<<<<<<< HEAD
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
=======
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
>>>>>>> 5b90ce21fc5875f4e9fd64f103faebaadd4c5837

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is a modal</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    alignItems: "center",
    justifyContent: "center",
=======
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> 5b90ce21fc5875f4e9fd64f103faebaadd4c5837
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
