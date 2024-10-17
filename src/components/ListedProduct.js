import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, Alert, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';


function ListedProducts({ navigation }) {
    const [products, setProducts] = useState([
      { id: '1', description: 'Product 1', price: '100', productionDate: '2024-09-01' },
      { id: '2', description: 'Product 2', price: '200', productionDate: '2024-09-02' },
    ]);
  
    const handleDelete = (id) => {
      Alert.alert(
        'Delete Product',
        'Are you sure you want to delete this product?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: () => {
              setProducts(products.filter((product) => product.id !== id));
              Alert.alert('Deleted', 'Product deleted successfully.');
            },
          },
        ],
        { cancelable: false }
      );
    };
  
    const renderProductItem = ({ item }) => (
      <View style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>{item.description}</Text>
        <Text>{item.price}</Text>
        <Text>{item.productionDate}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProduct', { product: item })}
        >
          <Text style={{ color: 'blue' }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text style={{ color: 'red' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  
    return (
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>No products listed. List a product.</Text>}
      />
    );
  }
  
  function EditProduct({ route, navigation }) {
    const { product } = route.params;
    const [image, setImage] = useState(product.image || null);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [productionDate, setProductionDate] = useState(product.productionDate);
  
    const handleUpdate = () => {
      // Implement product update logic here
      Alert.alert('Updated', 'Product updated successfully!');
      navigation.navigate('Listed Products');
    };
  
    return (
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text>Edit Product</Text>
        <Button title="Pick an image from gallery" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
  
        <Text>Description (Max 200 characters):</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          maxLength={200}
          multiline
          style={{ height: 80, borderColor: 'gray', borderWidth: 1 }}
        />
  
        <Text>Price (Numbers only):</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={{ borderColor: 'gray', borderWidth: 1 }}
        />
  
        <Text>Production Date:</Text>
        <TextInput
          value={productionDate}
          onChangeText={setProductionDate}
          placeholder="YYYY-MM-DD"
          style={{ borderColor: 'gray', borderWidth: 1 }}
        />
  
        <Button title="Update" onPress={handleUpdate} />
      </ScrollView>
    );
  }