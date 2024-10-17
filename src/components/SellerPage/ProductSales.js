import React from 'react';
import { View, Text } from 'react-native';

const ProductSales = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Today's Sales: 20</Text>
      <Text>Weekly Sales: 100</Text>
      <Text>Monthly Sales: 400</Text>
      <Text>Yearly Sales: 5000</Text>
    </View>
  );
};

export default ProductSales;
