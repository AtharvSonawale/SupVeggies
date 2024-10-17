import React, { useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SelectionScreen');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Image source={require('../../frontend/Data/Shetkari1-transformed.jpeg')} style={styles.image} />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // width: 20
  },
  image: {
    width: 450,
    height: 890,
  },
});

export default SplashScreen;
