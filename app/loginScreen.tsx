import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>
        Welcome to {"\n"}
        <Text style={styles.brand}>Harve</Text>
        <Text style={styles.brandX}>X</Text>
        <Text style={styles.brand}>tro!</Text>
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email here"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password here"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />

      {/* Show Password */}
      <TouchableOpacity
        style={styles.showPassword}
        onPress={() => setShowPassword(!showPassword)}
      >
        <View style={styles.checkbox} />
        <Text style={styles.showPasswordText}>Show password</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <LinearGradient
        colors={["#3FA09C", "#118800", "#2B7A78", "#1E813C", "#1D5251"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.loginButton}
      >
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/success")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.or}>Or login with</Text>
        <View style={styles.line} />
      </View>

      {/* Google Button */}
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => router.push("/login-google")}
      >
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
  },
  backButton: {
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 30,
  },
  brand: {
    fontWeight: "700",
  },
  brandX: {
    fontWeight: "700",
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  showPassword: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#CCC",
    marginRight: 8,
    borderRadius: 4,
  },
  showPasswordText: {
    color: "#555",
  },
  forgot: {
    color: "#2E7D73",
    textAlign: "right",
    marginBottom: 24,
  },
  loginButton: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 30,
    width: 297,
    height: 61,
  },
  loginText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDD",
  },
  or: {
    marginHorizontal: 10,
    color: "#777",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 14,
    borderRadius: 14,
    justifyContent: "center",
  },
  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
