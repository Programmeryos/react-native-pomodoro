import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import SignUpStyles from './SignUpStyles';
import SignUpForm from '../../Forms/SignUpForm';
const SignUp = ({navigation}) => {
  return (
    <View style={SignUpStyles.container}>
        <Text style={[SignUpStyles.title, {marginBottom: 30}]} >Sign Up</Text>
        <SignUpForm navigation={navigation}/>
        <View style={SignUpStyles.footerContainer}>
          <Text style={SignUpStyles.footerText}>Alredy have account?</Text>
          <Text style={[SignUpStyles.touchibleText, {marginLeft: 5}]}>Log in</Text>
        </View>
    </View>
  )
}

export default SignUp;