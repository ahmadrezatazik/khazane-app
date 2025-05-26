import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getAllAssets } from '../api/khazaneApi';

export default function PortfolioScreen() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    getAllAssets().then(data => setAssets(data));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>📦 دارایی‌ها</Text>
      <FlatList
        data={assets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 12, marginVertical: 4, backgroundColor: '#eee' }}>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}
