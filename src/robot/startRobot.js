import firestore from "@react-native-firebase/firestore";

export const startRobot = async () => {

  try {

    await firestore()
      .collection("robot")
      .doc("status")
      .update({
        state: "running",
        updatedAt: firestore.FieldValue.serverTimestamp(),

      }
    
    );


    console.log("Robot started");

  } 
  catch (error) {
    console.error("Start robot error:", error);
  }
  
};