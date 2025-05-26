import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { addAsset } from '../api/khazaneApi';

export default function AddAssetScreen({ navigation }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    await addAsset({ name, amount: parseFloat(amount) });
    navigation.navigate('Portfolio');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>افزودن دارایی</Text>
      <TextInput placeholder="نام دارایی" value={name} onChangeText={setName} />
      <TextInput placeholder="مقدار" value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <Button title="افزودن" onPress={handleSubmit} />
    </View>
  );
}
