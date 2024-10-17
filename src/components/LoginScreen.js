import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { role } = route.params;

  const handleLogin = () => {
    if (role === 'Seller') {
      navigation.replace('SellerPage');
    } else {
      navigation.replace('BuyerPage');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <ImageBackground source={require('../../frontend/Data/Shetkari04.jpeg')} style={styles.image}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.center}>
      <Text onPress={handleLogin} style={styles.button}>Login</Text>
      </View>
      </ImageBackground>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 20
  },
  image: {
    ...StyleSheet.absoluteFill,
    // height: 890,
    padding: 20,
    flex: 1,
    justifyContent: 'flex-end', 
    // marginBottom: 20
    // alignItems: 'center',
},
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    color: 'black',
    fontWeight: '900',
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    fontSize: 20
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
    marginTop: 10,
    borderRadius: 15,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10,
  },
  center: {
    marginHorizontal: 'auto'
  }
});

export default LoginScreen;
