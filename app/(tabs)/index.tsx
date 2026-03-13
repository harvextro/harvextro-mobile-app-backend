import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* First Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/success')}
      >
        <Text style={styles.buttonText}>Go to Success Page</Text>
      </TouchableOpacity>

      {/* Second Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#673AB7', marginTop: 15 }]}
        onPress={() => router.push('/register-google')}
      >
        <Text style={styles.buttonText}>Register-google</Text>
      </TouchableOpacity>

      {/* third Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#673AB7', marginTop: 15 }]}
        onPress={() => router.push('/login-google')}
      >
        <Text style={styles.buttonText}>Login-google</Text>
      </TouchableOpacity>

      {/* Four Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#673AB7', marginTop: 15 }]}
        onPress={() => router.push('/loginScreen')}
      >
        <Text style={styles.buttonText}>Login-Screen</Text>
      </TouchableOpacity>

      {/* Five Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#673AB7', marginTop: 15 }]}
        onPress={() => router.push('/registerScreen')}
      >
        <Text style={styles.buttonText}>Register-Screen</Text>
      </TouchableOpacity>

      {/* Five Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#673AB7', marginTop: 15 }]}
        onPress={() => router.push('/logopage')}
      >
        <Text style={styles.buttonText}>welcome screen</Text>
      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'teal',
    padding: 15,
    borderRadius: 10,
    width: 220,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
