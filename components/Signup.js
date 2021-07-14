import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Signup ( props ) {
  return(
    <View>
      <Text style={SignupStyles.heading}>Sign up for an account</Text>
      <Text>Email</Text>
      <TextInput style={SignupStyles.input}/>
      <Text>Password</Text>
      <TextInput style={SignupStyles.input} secureTextEntry={true}/>
      <TouchableOpacity style={SignupStyles.button}>
        <Text style={SignupStyles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

const SignupStyles = StyleSheet.create({
  heading: {
    fontSize: 22,
  },
  input: {
    fontSize: 18,
    borderColor: '#cccccc',
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#000000',
    padding: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  }
})