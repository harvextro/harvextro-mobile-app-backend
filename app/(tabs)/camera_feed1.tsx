
import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Switch
} from 'react-native';

function App(): React.JSX.Element {
  const [isRobotOn, setIsRobotOn] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
    
  return (
    
    <ImageBackground
      source={require('@/assets/images/backgroundImage2.png')} 
      style={styles.background}
      resizeMode="cover"
    >   
       {/*header of the page */}
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
           <TouchableOpacity onPress={()=> router.push('/')}>
              <Image
                source={require('@/assets/images/headericon2.png')} 
                style={styles.headerImage3}
              />
            </TouchableOpacity>
          

      </View>
    <View style={styles.container}>

        {/*robot status*/}
        <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Robot Status</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#4CD6A3' }} // Figma green
              thumbColor={'#ffffff'}
              onValueChange={() => setIsRobotOn(previousState => !previousState)}
              value={isRobotOn}
              style={styles.switchScale}
            />
          </View>

          {/* Row 2: Pause */}
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>     Pause.      </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#4CD6A3' }}
              thumbColor={'#ffffff'}
              onValueChange={() => setIsPaused(previousState => !previousState)}
              value={isPaused}
              style={styles.switchScale}
            />
          </View>

        
          
        

        {/* Camera feed */}
        <View style={[styles.preview_box, { backgroundColor: 'rgba(45, 79, 53, 0.4)' }]}>
        </View>
        <TouchableOpacity onPress={()=> router.push('/(tabs)/camera_feed2')}>
            <Text style={[styles.footage,{ backgroundColor: 'rgba(30, 129, 60, 1)' }]}>Live Footage</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  statusContainer: {
    width: '85%',
    marginTop: 90,// Gives space from the edges of the screen
    gap: 30, // Space between the Robot Status row and the Pause row
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between', // Pushes text to left, switch to right
  },
  statusLabel: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
    marginLeft:-100,
    marginTop:65
    
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

  
  preview_box: {
    width: 327,
    height: 247,
    marginTop: 84, // Reduced this so it doesn't push off screen
    borderRadius: 10,
  },
  footage:{
    width:300,
    height:50,
    borderRadius: 20,
    marginTop:20,
    borderWidth:1,
    padding:10,
    paddingLeft:80,
    paddingTop:5,
    fontSize:25,
    color:'white',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  switchScale: {
    // Increased scale to 1.8 to make them "more bigger" as requested
    transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
    marginRight: 10,   // Prevents the scaled button from clipping the edge
    marginLeft:50,
    marginTop:60,
  },
});

export default App;