import React, { useEffect } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Navigation from "./src/navigation"; // this controls screen navigation


export default function App() {

  // Runs once when the app starts
  useEffect(() => {
    
    // Configure Google login for the app
    GoogleSignin.configure({

      webClientId: "YOUR_FIREBASE_WEB_CLIENT_ID",   // This is required for Firebase Google authentication
    });

    }, []);

  // handles which screen appears  
  return <Navigation />;
}
