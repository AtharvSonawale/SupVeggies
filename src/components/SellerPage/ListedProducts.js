import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const products = [
  { id: '1', description: 'Product 1', price: '$10' },
  { id: '2', description: 'Product 2', price: '$20' },
  { id: '3', description: 'Product 3', price: '$30' },
];

const ListedProducts = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  product: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' }
});

export default ListedProducts;
