import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './LoginScreen';

const SignUpScreen = ({navigation}) => {
  // if(LoginScreen == true){
  //   navigation.navigate('SellerPage');
  // }
  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pincode, setPincode] = useState('');
  // const { role } = route.params;

  const validateUsername = (username) => {
    const usernamePattern = /^[A-Za-z ]{1,30}$/;
    return usernamePattern.test(username);
  }

  const validatePhoneNo = (phoneNo) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNo);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSignUp = () => {
    if(!validateUsername(username)) {
      Alert.alert('Username should be filled!')
    }

    if (!validatePhoneNo(phoneNo)) {
      Alert.alert('Phone No. is invalid');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Password should contain 1 uppercase, 1 lowercase, 1 special character, and at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    if (!/^\d{6}$/.test(pincode)) {
      Alert.alert('Pincode is not valid');
      return;
    }

    // Add further steps to check phoneNo in the database, and save the account
    Alert.alert('Account Created Successfully');
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../frontend/Data/Shetkari03.jpeg')} style={styles.image}>
    <View style={styles.container2} tintColor="rgba(255, 255, 255, 0.5)">
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        keyboardType="numeric"
        value={phoneNo}
        onChangeText={setPhoneNo}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Pincode"
        keyboardType="numeric"
        value={pincode}
        onChangeText={setPincode}
        style={styles.input}
      />
      <View style={styles.center}>
      <Text onPress={handleSignUp} style={styles.button}>SignUp</Text>
      </View>
    </View>
    </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: { 
    flex: 1,
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
  image: {
        ...StyleSheet.absoluteFillObject,
    },
  // },
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

export default SignUpScreen;
