import { auth } from "../firebase";

// Firebase function to send password reset email
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

// Helper function to validate password strength
const isPasswordValid = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
};

