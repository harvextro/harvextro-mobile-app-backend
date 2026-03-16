import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function logChilli(color, confidence) {
  try {
    await addDoc(collection(db, "production_logs"), {
      color: color,
      confidence: confidence,
      timestamp: new Date(),
      session_id: "session_1",
    });

    console.log("Chilli logged");
  } catch (error) {
    console.error("Error logging chilli:", error);
  }
}
