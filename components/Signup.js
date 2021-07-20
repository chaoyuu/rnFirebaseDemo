import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Signup ( props ) {
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()

  const[validEmail,setValidEmail] = useState(false)
  const[validPassword,setValidPassword] = useState(false)

  const HandleEmail = ( emailVal ) => {
    //validate email
    // find where '@' character is
    const atIndex = emailVal.indexOf('@')
    // get the domain element (the section after '@')
    const domain = emailVal.split('@').pop()
    // get the tld from the domain (eg .com)
    const tld = domain.split('.').pop()
    // check if the email contains spaces
    const diff = emailVal.split(' ').join('').length - emailVal.length
    if( atIndex > 0 && domain.length > 2 && tld.length >= 2 && tld !== domain && diff === 0 ) {
      setValidEmail( true )
    }
    else {
      setValidEmail( false )
    }
    setEmail( emailVal )
  }
  
  const HandlePassword = ( passwordVal ) => {
    //validate password
    // check the length
    const pwLength = passwordVal.length
    // check if numeric
    const isNumeric = isNaN(parseInt( passwordVal ))
    // check if it contains capitals
    const chars = passwordVal.split('')
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const containsCaps = chars.some( (val) => caps.split('').includes(val) )
    // check if it contains special characters
    const specialChars = '!@#$%^&*()_+=-{}[]|\/?><~`"'
    const containsSpecial = chars.some( (val) => specialChars.split('').includes(val))

    if( pwLength >= 8 && isNumeric && containsCaps && containsSpecial ) {
      setValidPassword( true )
    }
    else {
      setValidPassword( false )
    }
    setPassword( passwordVal )
  }

  const HandleSubmit = () => {
    props.handler( email, password )
  }
  
  return(
    <View style={SignupStyles.pageContainer}>
      <Text style={SignupStyles.heading}>Sign up for an account</Text>
      <Text style={SignupStyles.label}>Email</Text>
      <TextInput 
      style={SignupStyles.input} 
      onChangeText={ (val) => HandleEmail(val)  }
      />
      <Text style={SignupStyles.label}>Password</Text>
      <TextInput 
      style={SignupStyles.input} 
      secureTextEntry={true}
      onChangeText={ (val) => HandlePassword(val) }
      />
      <TouchableOpacity 
      style={(validEmail && validPassword) ? SignupStyles.button : SignupStyles.buttonDisabled} 
      onPress={HandleSubmit}
      disabled={ (validEmail && validPassword) ? false : true }
      >
        <Text style={SignupStyles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={SignupStyles.authToggle} onPress={ props.toggle }>
        <Text style={SignupStyles.toggleText}>Sign in to your account</Text>
      </TouchableOpacity>
    </View>
  )
}

const SignupStyles = StyleSheet.create({
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
    backgroundColor: '#000000',
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    padding: 10,
    marginVertical: 10,
  },
  authToggle: {
    marginVertical: 10,
  },
  toggleText : {
    textAlign: 'center',
  },
})