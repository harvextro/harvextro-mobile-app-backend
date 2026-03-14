
import React, { useState } from 'react';
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
          <Image
            source={require('@/assets/images/headericon2.png')} 
            style={styles.headerImage3}
          />

      </View>
    <View style={styles.container}>
        {/*date*/}
        <TouchableOpacity>
            <Text style={[styles.date,{ backgroundColor: 'rgba(255, 255, 255, 1)' }]}>Tuesday 12 2026</Text>
        </TouchableOpacity>

        {/*Total count*/}
        <TouchableOpacity>
            <Text style={[styles.count,{ backgroundColor: 'rgba(255, 255, 255, 1)' }]}>Total Count : </Text>
        </TouchableOpacity>

        {/*Chilli count*/}
        <View style={styles.container2}>
            <TouchableOpacity>
                <Text style={[styles.box,{ backgroundColor: 'rgba(255, 255, 255, 1)',color: 'Green' }]}>Green Count</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[styles.box,{ backgroundColor: 'rgba(255, 255, 255, 1)' }]}>Red Count</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[styles.box,{ backgroundColor: 'rgba(255, 255, 255, 1)' }]}>Yellow Count</Text>
            </TouchableOpacity>
        </View>

        {/*the grid of the harvest*/}
        <View style={[styles.preview_box, { backgroundColor: 'rgba(45, 79, 53, 0.4)' }]}>
        </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  preview_box: {
    width: 327,
    height: 247,
    marginTop: 40, // Reduced this so it doesn't push off screen
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
date:{
   width:250,
    height:50,
    borderRadius: 20,
    marginTop:40,
    borderWidth:1,
    padding:10,
    paddingLeft:56,
    paddingTop:11,
    fontSize:18,
    color:'black',
  },
  count:{
   width:340,
    height:100,
    borderRadius: 20,
    marginTop:40,
    borderWidth:1,
    padding:10,
    paddingLeft:60,
    paddingTop:30,
    fontSize:26,
    color:'black',
    
  },
  container2:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    gap:10,
  },
  box:{
    width:120,
    height:100,
    borderRadius: 20,
    marginTop:50,
    borderWidth:1,
    padding:10,
    paddingLeft:18,
    paddingTop:30,
    fontSize:15,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  
});

export default App;