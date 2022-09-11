import React from 'react';
import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Formik } from 'formik';

import SignUpStyles from '../pages/SignUp/SignUpStyles';
import { btn } from '../../styles/btn';

function SignUpForm({navigation}) {
    const [userData, setUserData] = useState();

    const toProcessingData = (values) => {
        setUserData(values);
        console.log(values);
    }

    return (
        <View>
            <Formik 
                initialValues={{name: '', email: '', password: ''}} 
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                    if (!values.name) {
                        errors.name = 'Required name';
                    }
                    if (!values.password) {
                        errors.password = 'Required password';
                    }
                    return errors;
                  }}
                onSubmit={(values) => toProcessingData(values)}>
                {(props) => (
                    <View>
                        <TextInput
                            style={[SignUpStyles.input, props.errors.name && SignUpStyles.error]} 
                            value={props.values.name} 
                            placeholder='Name' 
                            placeholderTextColor='#99A8B1'
                            onChangeText={props.handleChange('name')}  
                            />
                        {<Text>{props.errors.name}</Text>}
                        <TextInput
                            style={[SignUpStyles.input, props.errors.email && SignUpStyles.error]} 
                            value={props.values.email} 
                            placeholder='Email' 
                            placeholderTextColor='#99A8B1'
                            onChangeText={props.handleChange('email')} 
                            />
                        {<Text>{props.errors.email}</Text>}
                        <TextInput
                            style={[SignUpStyles.input, props.errors.password && SignUpStyles.error]} 
                            value={props.values.password}
                            placeholderTextColor='#99A8B1'
                            placeholder='Password' 
                            onChangeText={props.handleChange('password')} 
                            />
                        {<Text>{props.errors.password}</Text>}
                        <View style={btn.SignUpBtn}>
                            <Button 
                                title='Sin Up' 
                                color='#69C262'
                                onPress={() => navigation.navigate('Inbox', props.values)} 
                                disabled={props.isSubmitting || (
                                    Object.keys(props.errors).length > 0
                                ) || !(
                                    props.values.name.length > 0 
                                )}
                                />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default SignUpForm;