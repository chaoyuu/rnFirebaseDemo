import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Signin ( props ) {
  return(
    <View>
      <Text style={SigninStyles.heading}>Sign in to your account</Text>
      <Text>Email</Text>
      <TextInput style={SigninStyles.input}/>
      <Text>Password</Text>
      <TextInput style={SigninStyles.input} secureTextEntry={true}/>
      <TouchableOpacity style={SigninStyles.button}>
        <Text style={SigninStyles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ props.toggle }>
        <Text>Sign up for an account</Text>
      </TouchableOpacity>
    </View>
  )
}

const SigninStyles = StyleSheet.create({
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