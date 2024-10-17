import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, Alert, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';

function ListProduct({ navigation }) {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [productionDate, setProductionDate] = useState('');
  
    const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        const fileSizeInMB = result.assets[0].fileSize / (1024 * 1024);
        if (fileSizeInMB > 2) {
          Alert.alert('Error', 'The image size exceeds 2MB.');
        } else {
          setImage(result.assets[0].uri);
        }
      }
    };
  
    const handleDescriptionChange = (text) => {
      if (text.length <= 200) {
        setDescription(text);
      }
    };
  
    const handleSubmit = () => {
      if (!image || !description || !price || !productionDate) {
        Alert.alert('Error', 'Please fill in all fields.');
      } else {
        Alert.alert('Success', 'Product listed successfully!');
        // Implement product listing logic here
      }
    };
  
    return (
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text>Upload Image:</Text>
        <Button title="Pick an image from gallery" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        
        <Text>Description (Max 200 characters):</Text>
        <TextInput
          value={description}
          onChangeText={handleDescriptionChange}
          placeholder="Product Description"
          maxLength={200}
          multiline
          style={{ height: 80, borderColor: 'gray', borderWidth: 1 }}
        />
  
        <Text>Price (Numbers only):</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholder="Product Price"
          style={{ borderColor: 'gray', borderWidth: 1 }}
        />
  
        <Text>Production Date:</Text>
        <TextInput
          value={productionDate}
          onChangeText={setProductionDate}
          placeholder="YYYY-MM-DD"
          style={{ borderColor: 'gray', borderWidth: 1 }}
        />
  
        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
    );
  }
  