import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.primary,
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log('click click')
        }}
      >
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  )
}

export default AppBar
