import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebaseConfig } from './config';
import * as firebase from 'firebase'

import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Home } from './components/Home';

if( !firebase.apps.length ) {
  firebase.initializeApp( firebaseConfig )
}

export default function App() {
  const [ signup, setSignup ] = useState( true )
  const [ auth, setAuth ] = useState( false )

  const HandleSignup = ( email, password ) => {
    // console.log( email, password )
    firebase.auth().createUserWithEmailAndPassword( email, password )
    .then( (response) => {
      console.log(response)
      setAuth( true )
    } )
    .catch( (error) => console.log(error) )
  }

  const HandleSignin = ( email, password ) => {
    firebase.auth().signinWithEmainAndPassword( email, password )
    .then( (response) => {
      console.log(response)
      setAuth( true )
    })
    .catch( (error) => console.log(error) )
  }

  const ToggleSignup = () => {
    if( signup === true ) {
      setSignup( false )
    }
    else {
      setSignup( true )
    }
  }
  
  const Stack = createStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signin" >
          { (props) => <Signin {...props} handler={HandleSignin} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          { (props) => <Signup {...props} handler={HandleSignup} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
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
