import firestore from "@react-native-firebase/firestore";

export const pauseRobot = async () => {

  try {

    await firestore()
      .collection("robot")
      .doc("status")
      .update({
        state: "paused",
        updatedAt: firestore.FieldValue.serverTimestamp(),

      }
    );

    console.log("Robot paused");

  } 
  catch (error) {
    console.error("Pause robot error:", error);
  }
  
};