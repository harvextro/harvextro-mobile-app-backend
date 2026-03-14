<<<<<<< HEAD
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
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    
    <ImageBackground
      source={require('@/assets/images/backgroungImage1.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.text}>Manual Header</Text>
        <Image
            source={require('@/assets/images/icon5.png')} 
            style={styles.headerImage1}
          />
          <Image
            source={require('@/assets/images/headericon3.png')} 
            style={styles.headerImage2}
          />
          <Image
            source={require('@/assets/images/headericon2.png')} 
            style={styles.headerImage3}
          />

      </View>
      <View style={styles.container}>

        {/* FIRST BOX */}
        <View style={[styles.first_box, { backgroundColor: 'rgba(45, 79, 53, 0.4)' }]}>
          <Image
            source={require('@/assets/images/icon2.png')} 
            style={styles.boxImage}
          />
          <TouchableOpacity onPress={() => router.push('/(tabs)/camera_feed1')}>
            <Text style={styles.text}>Robot Manipulation</Text>
          </TouchableOpacity>
        </View>

        {/* SECOND BOX */}
        <View style={[styles.second_box, { backgroundColor: 'rgba(45, 79, 53, 0.4)' }]}>
          <Image
            source={require('@/assets/images/icon1.png')} 
            style={styles.boxImage}
          />
          <TouchableOpacity>
            <Text style={styles.text}>Live Footage</Text>
          </TouchableOpacity>
        </View>

        {/* THIRD BOX */}
        <View style={[styles.third_box, { backgroundColor: 'rgba(45, 79, 53, 0.4)' }]}>
          <Image
            source={require('@/assets/images/icon5.png')} 
            style={styles.boxImage}
          />
          <TouchableOpacity>
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* FOURTH BOX */}
        <View style={[styles.fourth_box, { backgroundColor: 'rgba(45, 79, 53, 0.4)' }]}>
          <Image
            source={require('@/assets/images/icon4.png')} 
            style={styles.boxImage}
          />
          <TouchableOpacity>
            <Text style={styles.text}>Setting</Text>
          </TouchableOpacity>
        </View>

        {/* FIFTH BOX */}
        <View style={[styles.fifth_box, { backgroundColor: 'rgba(45, 79, 53, 0.4)' }]}>
          <Image
            source={require('@/assets/images/icon6.png')} 

            style={styles.boxImage}
          />
          <TouchableOpacity>
            <Text style={styles.text}>Chilly Count & Report</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
>>>>>>> 5b90ce21fc5875f4e9fd64f103faebaadd4c5837
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
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
=======
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header:{
    height:110,
    backgroundColor:'white',


  },
  headerImage1:{
    marginLeft:280,
    marginTop:73,
    width:40,
    height:40,
  },
  headerImage2:{
    marginLeft:340,
    marginTop:-40,
    width:40,
    height:40,

  },
  headerImage3:{
    marginLeft:15,
    marginTop:-40,
    width:40,
    height:40,

  },
 

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft:110,
    marginTop:-54,
    
    
  },

  boxImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
    marginTop:12,
    marginRight:200,
    resizeMode: 'contain',
    marginLeft:30,
  },

  first_box: {
    borderRadius: 20,
    width: 350,
    height: 100,
    padding: 5,
    
  },
  second_box: {
    width: 350,
    height: 100,
    padding: 5,
    borderRadius: 20,
  },
  third_box: {
    width: 350,
    height: 100,
    padding: 5,
    borderRadius: 20,
  },
  fourth_box: {
    width: 350,
    height: 100,
    padding: 5,
    borderRadius: 20,
  },
  fifth_box: {
    width: 350,
    height: 100,
    padding: 6,
    borderRadius: 20,
  },

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
>>>>>>> 5b90ce21fc5875f4e9fd64f103faebaadd4c5837
