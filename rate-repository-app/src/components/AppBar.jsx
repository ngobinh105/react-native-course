import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.primary,
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    marginRight: 15,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Text>
          <Link to='/'>
            <Text style={styles.text}>Repositories</Text>
          </Link>
          <Link to='/signin'>
            <Text style={styles.text}>Sign in</Text>
          </Link>
        </Text>
      </ScrollView>
    </View>
  )
}

export default AppBar
