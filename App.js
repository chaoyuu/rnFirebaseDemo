import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebaseConfig } from './config';
import * as firebase from 'firebase'

import { Signup } from './components/Signup';
import { Signin } from './components/Signin'

if( !firebase.apps.length ) {
  firebase.initializeApp( firebaseConfig )
}

export default function App() {
  const [ signup, setSignup ] = useState( true )

  const HandleSignup = ( email, password ) => {
    // console.log( email, password )
    firebase.auth().createUserWithEmailAndPassword( email, password )
    .then( (response) => console.log(response) )
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
  if( signup ) {
    return (
      <View style={styles.container}>
        <Signup toggle={ToggleSignup} handler={HandleSignup} />
      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
        <Signin toggle={ToggleSignup}/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
