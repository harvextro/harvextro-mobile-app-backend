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
)
