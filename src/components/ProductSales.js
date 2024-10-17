import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, Alert, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';


function ProductSales() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sales Data and Analytics</Text>
        <Text>Today: 10 sales</Text>
        <Text>Last Week: 50 sales</Text>
        <Text>Last Month: 200 sales</Text>
        <Text>Last Year: 3000 sales</Text>
      </View>
    );
  }