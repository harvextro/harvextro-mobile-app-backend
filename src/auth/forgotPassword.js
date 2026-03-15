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


// Firebase function to reset password using the code from email
export const resetPassword = async (oobCode, newPassword, confirmPassword) => {
  try {
    if (newPassword !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    if (!isPasswordValid(newPassword)) {
      throw new Error("Password must be at least 8 characters long and include letters and numbers.");
    }

    // Confirm password reset using Firebase
    await confirmPasswordReset(auth, oobCode, newPassword);
    console.log("Password reset successful!");
    return true;
  } catch (error) {
    console.error("Password reset failed:", error.message);
    throw error;
  }
};


