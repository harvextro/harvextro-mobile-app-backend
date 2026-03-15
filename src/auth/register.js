import { auth, firestore } from "../firebase";


/**
 * Validate password rules:
 * - At least 8 characters
 * - Contains letters and numbers
 */
const isPasswordValid = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
};


export const registerUser = async (
  username,
  email,
  password,
  confirmPassword,
  role = "farmer"
) => 
  {
  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
     }

    
    // Check password strength
    if (!isPasswordValid(password)) {
      throw new Error(
        "Password must be at least 8 characters long and include letters and numbers."
      );
    }


    // Create user
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password
    );


    const user = userCredential.user;


    // Save user data in Firestore
    await firestore()
      .collection("users")
      .doc(user.uid)
      .set({
        username: username,
        email: user.email,
        role: role,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });


    console.log("User registered successfully!");


    return user;


  } catch (error) {
    console.error("Registration error:", error.message);
    throw error;
  }
};

