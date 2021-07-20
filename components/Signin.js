import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Signin ( props ) {
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()

  const[validEmail,setValidEmail] = useState(false)
  const[validPassword,setValidPassword] = useState(false)

  const handleEmail = (emailVal) => {
    if( emailVal.length >= 5 ) {
      setValidEmail( true )
    }
    else{
      setValidEmail( false )
    }
  }

  const handlePassword = (passwordVal) => {
    if( passwordVal.length >= 6 ) {
      setValidPassword( true )
    }
    else{
      setValidPassword( false )
    }
  }

  const HandleSubmit = () => {
    props.handler( email, password )
  }

  return(
    <View style={SigninStyles.pageContainer}>
      <Text style={SigninStyles.heading}>Sign in to your account</Text>
      <Text style={SigninStyles.label}>Email</Text>
      <TextInput onChangeText={ (val) => handleEmail(val) } style={SigninStyles.input}/>
      <Text style={SigninStyles.label}>Password</Text>
      <TextInput onChangeText={ (val) => handlePassword(val) } style={SigninStyles.input} secureTextEntry={true}/>
      <TouchableOpacity 
      style={(validEmail && validPassword) ? SigninStyles.button : SigninStyles.buttonDisabled}
      onPress={HandleSubmit}
      >
        <Text style={SigninStyles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={SigninStyles.authToggle} onPress={ props.toggle }>
        <Text style={SigninStyles.toggleText}>Sign up for an account</Text>
      </TouchableOpacity>
    </View>
  )
}

const SigninStyles = StyleSheet.create({
  pageContainer: {
    marginTop: 50,
    minWidth: 320,
    backgroundColor: '#f3f3f3',
    padding: 10,
    borderRadius: 15,
  },
  heading: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
  },
  input: {
    fontSize: 18,
    borderColor: '#cccccc',
    borderWidth: 2,
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#03084f',
    padding: 5,
    marginVertical: 10,
    padding: 10,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  authToggle: {
    marginVertical: 10,
  },
  toggleText : {
    textAlign: 'center',
  },
})