import { auth } from "../firebase";

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
