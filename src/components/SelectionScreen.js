import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SelectionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Image source={require('../../frontend/Data/Shetkari02.jpg')} style={styles.image} />
      <View style={styles.container2}>

        
      <Text style={styles.text}>Are you a Seller or Buyer?</Text>
      <TouchableOpacity>
      <Text style={styles.button} onPress={() => navigation.navigate('LoginScreen', { role: 'Seller' })}>Seller</Text>
      <Text style={styles.button} onPress={() => navigation.navigate('LoginScreen', { role: 'Buyer' })}>Buyer</Text></TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
  },
  container2: { 
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    marginBottom: 50
  },
  text: { 
    fontSize: 30,
    marginBottom: 20,
    fontWeight: '900',
    color: '#fff',
  },
  image: {
    position: 'absolute',
    width: 450,
    height: 890,
  },
  button: {
    color: 'black',
    fontWeight: '900',
    fontSize: 25,
    backgroundColor: '#fff',
    width: 300,
    height:'auto',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 15,
    // flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10,
  }
});

export default SelectionScreen;
