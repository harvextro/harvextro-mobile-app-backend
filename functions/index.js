// index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");

admin.initializeApp();

// ==========================
// 1️⃣ Validate Robot Commands
// Trigger: When a new command is added in commands/{robotId}
// Only allow START and STOP commands
// ==========================
exports.validateCommand = functions.firestore
  .document("commands/{robotId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    if (!["START", "STOP"].includes(data.action)) {
      logger.info(`Invalid command: ${data.action}, deleting...`);
      return snap.ref.delete();
    }

    logger.info(`Valid command for robot ${context.params.robotId}: ${data.action}`);
    return null;
});

// ==========================
// 2️⃣ Send FCM Notification for New Commands
// Trigger: Same path as validateCommand
// ==========================
exports.notifyRobot = functions.firestore
  .document("commands/{robotId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    // Fetch robot token from robots collection
    const robotDoc = await admin.firestore().collection("robots").doc(context.params.robotId).get();
    //const token = robotDoc.data()?.token;
    const robotData = robotDoc.data();
    const token = robotData ? robotData.token : null;

    if (!token) {
      logger.info(`No token found for robot ${context.params.robotId}`);
      return null;
    }

    const payload = {
      notification: {
        title: `New Command for Robot ${context.params.robotId}`,
        body: `Action: ${data.action}`,
      },
    };

    try {
      await admin.messaging().sendToDevice(token, payload);
      logger.info(`Notification sent to robot ${context.params.robotId}`);
    } catch (error) {
      logger.error("Error sending FCM:", error);
    }

    return null;
});

// ==========================
// 3️⃣ Auto Shutdown
// Trigger: When robot status updates
// Shuts down robot if inactive for more than 5 minutes
// ==========================
exports.autoShutdown = functions.firestore
  .document("status/{robotId}")
  .onUpdate(async (change, context) => {
    const before = change.before.data();
    const after = change.after.data();

    // If robot is already inactive, skip
    if (after.active === false) return null;

    const lastActive = after.lastActive?.toDate?.() || new Date();
    if (diffMinutes > 5) {
      logger.info(`Robot ${context.params.robotId} inactive > 5 min, shutting down`);

      await change.after.ref.update({ active: false });

      // Optionally log this in reports
      await admin.firestore().collection("reports").add({
        robotId: context.params.robotId,
        action: "autoShutdown",
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    }

    return null;
});

// ==========================
// 4️⃣ Generate Report
// Trigger: When a command is executed
// ==========================
exports.generateReport = functions.firestore
  .document("commands/{robotId}")
  .onUpdate(async (change, context) => {
    const data = change.after.data();

    await admin.firestore().collection("reports").add({
      robotId: context.params.robotId,
      command: data.action,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    logger.info(`Report generated for robot ${context.params.robotId}, command: ${data.action}`);
    return null;
});

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
/*

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

*/

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
// ******** setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
