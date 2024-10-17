import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ListProduct = () => {
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
        Alert.alert('File size exceeds the 2MB limit');
        return;
      }
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <TextInput
        value={productionDate}
        onChangeText={setProductionDate}
        placeholder="Production Date"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <Button title="Submit" onPress={() => Alert.alert('Product Listed!')} />
    </View>
  );
};

export default ListProduct;
