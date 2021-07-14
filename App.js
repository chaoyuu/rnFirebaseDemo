import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebaseConfig } from './config';
import * as firebase from 'firebase'

import { Signup } from './components/Signup';

if( !firebase.apps.length ) {
  firebase.initializeApp( firebaseConfig )
}

export default function App() {

  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
