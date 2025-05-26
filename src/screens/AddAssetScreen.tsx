import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function AddAssetScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace('Home'), 1500);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>💰 خزانه</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
