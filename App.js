import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {StartStack} from './Components/Navigator'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import reducers from './store/reducers';
import Dashboard from './Components/Dashboard';
import Start from './Components/Start';

const rootReducers = combineReducers({
  allCategories :reducers,  
});
const store = createStore(rootReducers,applyMiddleware(ReduxThunk));

const loadFontsFromAssets = () => {
  return Font.loadAsync({
    'Poppins-Bold' : require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Italic' : require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Light' : require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium' : require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular' : require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold' : require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
}

export default function App(props) {
  const [isFontsLoading,setIsFontsLoading] = useState(false);
  if(!isFontsLoading){
    return(
      <AppLoading 
        startAsync={loadFontsFromAssets}
        onFinish={() => setIsFontsLoading(true)}
        onError={console.log('Something is bad')} />
    )
  }
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StartStack/>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
