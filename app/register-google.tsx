import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function GoogleRegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
          }}
          style={styles.googleLogo}
          resizeMode="contain"
        />
        <Text style={styles.registerText}>Register with Google</Text>
      </View>

      {/* Profile Icon */}
      <View style={styles.profileIconContainer}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileIcon}>👤</Text>
        </View>
      </View>

      <Text style={styles.title}>Choose an account</Text>

      {/* Account 1 */}
      <TouchableOpacity style={styles.accountRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View>
          <Text style={styles.accountName}>Account Name</Text>
          <Text style={styles.email}>email@gmail.com</Text>
        </View>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Account 2 */}
      <TouchableOpacity style={styles.accountRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View>
          <Text style={styles.accountName}>Account Name</Text>
          <Text style={styles.email}>email@gmail.com</Text>
        </View>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Use Another Account */}
      <TouchableOpacity style={styles.accountRow}>
        <View style={styles.useAnotherIcon}>
          <Text style={{ fontSize: 18 }}>👤</Text>
        </View>
        <Text style={styles.useAnotherText}>Use another account</Text>
      </TouchableOpacity>

      {/* Footer Text */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          To continue, Google will share your name, email address, language
          preference, and profile picture with Company. Before using this app,
          you can review Company’s{" "}
          <Text style={styles.link}>privacy policy</Text> and{" "}
          <Text style={styles.link}>terms of service</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  registerText: {
    fontSize: 16,
    fontWeight: "500",
  },

  profileIconContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },

  profileIcon: {
    fontSize: 28,
    color: "#888",
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 20,
  },

  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#673AB7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  accountName: {
    fontSize: 15,
    fontWeight: "500",
  },

  email: {
    fontSize: 13,
    color: "#666",
  },

  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
  },

  useAnotherIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  useAnotherText: {
    fontSize: 15,
  },

  footer: {
    marginTop: 30,
  },

  footerText: {
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
  },

  link: {
    color: "#1a73e8",
  },
});
// changes
