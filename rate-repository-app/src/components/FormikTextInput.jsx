import React from 'react'
import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'

const styles = StyleSheet.create({
  errorText: {
    margin: 5,
    color: '#d73a4a',
  },
  input: {
    borderWidth: 2,
    borderColor: '#24292e',
    padding: 10,
    margin: 5,
    borderRadius: 3,
  },
  errorInput: {
    borderWidth: 2,
    borderColor: '#d73a4a',
    padding: 10,
    margin: 5,
    borderRadius: 3,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError ? styles.errorInput : styles.input}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
