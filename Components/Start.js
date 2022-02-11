import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Styles from '../Utilities/AppStyle';
import Colors from '../Utilities/AppColors';

const Start = props => {
    return(
        <View style={Styles.startContainer}>
              <View style={Styles.imageContainer}>                
                  <Image
                      source={require('../assets/app_icons_and_pictures/splash_logo.png')}
                      style={Styles.imageStyle}
                  />
              </View>
      
                <View style={Styles.startBtn}>
                  <TouchableOpacity onPress={()=> props.navigation.navigate('Dashboard')}>
                      <Text style={{fontFamily:'Poppins-Bold', fontSize:30, color:Colors.blue2}}>Let's Play</Text>
                  </TouchableOpacity>
                </View>
              
        </View>
    )
}


export const screenOptions = navData => {
    return{
        headerTitle:'Start',
        headerShown: false
    }
};

export default Start;