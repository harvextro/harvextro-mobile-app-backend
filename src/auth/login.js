import { auth } from "../firebase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GoogleAuthProvider } from "@react-native-firebase/auth";

/**
 * Email / Password Login
 */
export const loginWithEmail = async (email, password) => {
  try {

    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password
    );

    const user = userCredential.user;

    console.log("Login successful:", user.email);

    return user;

  } catch (error) {

    console.error("Login failed:", error.message);

    throw error;

  }
};

/**
 * Google Login
 */
export const loginWithGoogle = async () => {
  try {

    await GoogleSignin.hasPlayServices();

    const userInfo = await GoogleSignin.signIn();

    const googleCredential = GoogleAuthProvider.credential(
    userInfo.idToken
    );

    const userCredential = await auth().signInWithCredential(googleCredential);

    console.log("Google login successful:", userCredential.user.email);

    return userCredential.user;

  } catch (error) {

    console.error("Google login error:", error);

    throw error;

  }
};
