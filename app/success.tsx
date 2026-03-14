import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

/*export default function Layout() {
  const [fontsLoaded] = useFonts({
    Alice: require("../assets/fonts/Alice-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }


return <Stack />;
},*/

export default function Success() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/success.jpeg")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>You have registered{"\n"}successfully!!</Text>

      <LinearGradient
        colors={["#3FA09C", "#118800", "#2B7A78", "#1E813C", "#1D5251"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/loginScreen")}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    padding: 0,
  },
  image: {
    width: 387,
    height: 400,
    top: 0,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    color: "#1b6b6b",
    /*fontWeight: "600",*/
    marginBottom: 40,
    fontFamily: "Alice",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 70,
    borderRadius: 12,
    elevation: 30, // shadow for Android
    width: 297,
    height: 61,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "center",
  },
});
// push
