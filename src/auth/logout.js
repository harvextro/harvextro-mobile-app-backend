import { auth } from "../firebase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const logoutUser = async () => {
  try {

    // If user logged in with Google, sign out from Google
    await GoogleSignin.signOut();

    // Sign out from Firebase
    await auth().signOut();

    console.log("User logged out successfully");

    return true;

  } catch (error) {

    console.error("Logout failed:", error.message);
    throw error;

  }
};

