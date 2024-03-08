import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';


export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 flex justify-end">
      
      {/* background image */}
      <ImageBackground 
        source={require('../assets/welcome.jpg')}
        className="h-full w-full absolute"
        style={styles.ImageBackground}
      />

      <View style={styles.topic}>
            <Text className="text-white font-bold text-5xl" style={styles.header}>Welcome</Text>
            <Text className="text-white font-bold text-5xl" style={styles.header}>To E-Net Computer Shop</Text>
            <Text className="text-neutral-200 font-medium" style={{fontSize: wp(4), textAlign : 'center', fontWeight: 'bold', color: '#fff'}}>
              We Serve You Best Customer Service Ever...!
            </Text>
        </View>

      {/* content & gradient */}
      <View style={styles.gradient}>
        <LinearGradient
            colors={['transparent', 'rgba(3,105,161,0.8)']}
            style={{width: wp(100), height: hp(60)}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
        />
        
        <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.goButton}>
            <Text className="text-white font-bold" style={styles.buttonText}>Let's go!</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  topic : {
      
    position : 'absolute',
    top : 200,
    bottom : 0,
    left : 0,
    right : 0
  },

  header : {
    textAlign: 'center',
    fontSize: wp(10), 
    fontWeight: 'bold',
    color: '#E7fa5a'
  },

  ImageBackground : {
      width: '100%',
      height: '150%',
      position: 'absolute'
  },

  goButton : {
      backgroundColor: theme.bg(1),
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '0.75rem',
      borderRadius: 99,
      paddingLeft: '3rem',
      paddingRight: '3rem',
      position: 'absolute',
      width: 240,
      height: 60,
      bottom: 70,
      marginLeft: 70
  },

  buttonText : {
      textAlign: 'center',
      fontSize: wp(8),
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 8
  },

  gradient : {
      bottom: '-90%',
      // position: 'absolute',
      // bottom: 0,
      // left: 0,
      // right: 0
  }
})