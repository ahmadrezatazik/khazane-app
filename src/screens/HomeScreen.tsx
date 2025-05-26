import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>📊 داشبورد خزانه</Text>
      <Button title="مشاهده پرتفو" onPress={() => navigation.navigate('Portfolio')} />
      <Button title="افزودن دارایی" onPress={() => navigation.navigate('AddAsset')} />
    </View>
  );
}
