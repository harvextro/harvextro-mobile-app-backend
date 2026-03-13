import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router"; // <- use this
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const WelcomeScreen = () => {
  const router = useRouter(); // <- router for navigation
  const [fontsLoaded] = useFonts({
    Alice: require("../assets/fonts/Alice/Alice-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/harvextro.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>HarveXtro</Text>

      {/* Login Button */}
      <LinearGradient
        colors={["#3FA09C", "#118800", "#2B7A78", "#1E813C", "#1D5251"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonLogin}
      >
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => router.push("/loginScreen")} // <- navigation
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Register Button */}
      <LinearGradient
        colors={["#3FA09C", "#118800", "#2B7A78", "#1E813C", "#1D5251"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonRegister}
      >
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => router.push("/registerScreen")} // <- navigation
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // Logo position according to Figma
  logo: {
    position: "absolute",
    left: 85,
    top: 171,
    width: 244,
    height: 244,
  },

  // Title below logo
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 171 + 244 + 20, // logo Y + height + margin
    fontFamily: "Alice",
    fontSize: 48,
    color: "#000",
    textAlign: "center",
  },

  // Login button
  buttonLogin: {
    position: "absolute",
    left: 58,
    top: 565,
    width: 297,
    height: 61,
    borderRadius: 12,
  },

  // Register button
  buttonRegister: {
    position: "absolute",
    left: 58,
    top: 660,
    width: 297,
    height: 61,
    borderRadius: 12,
  },

  buttonInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
