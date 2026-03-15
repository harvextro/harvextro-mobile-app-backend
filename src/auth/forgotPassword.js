import { auth } from "../firebase";

export const sendResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent to:", email);
    return true;
  } catch (error) {
    console.error("Failed to send reset email:", error.message);
    throw error;
  }
};
