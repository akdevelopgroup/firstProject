import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={{width, height: 300}}
        source={require('./assets/logo.png')}
      />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
