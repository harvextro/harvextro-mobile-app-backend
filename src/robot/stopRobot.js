import firestore from "@react-native-firebase/firestore";

export const stopRobot = async () => {

  try {

    await firestore()
      .collection("robot")
      .doc("status")
      .update({
        state: "stopped",
        updatedAt: firestore.FieldValue.serverTimestamp(),
      }
    
    );

    console.log("Robot stopped");

  } catch (error) {
    console.error("Stop robot error:", error);
  }

};