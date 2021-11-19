import React from 'react'
import Text from './Text'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import { Pressable, View, StyleSheet } from 'react-native'
import * as yup from 'yup'

const styles = StyleSheet.create({
  button: {
    margin: 5,
    backgroundColor: '#0366d6',
    padding: 10,
    borderRadius: 3,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})
const LogInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  )
}
const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  }
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <LogInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
