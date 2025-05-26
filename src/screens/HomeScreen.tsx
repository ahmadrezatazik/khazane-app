import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AssetCard from '../components/AssetCard';
import { getCryptoData, getGoldData, getForexData, getStockData } from '../api/khazaneApi';
import colors from '../constants/colors';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cryptoRes, goldRes, forexRes, stockRes] = await Promise.all([
          getCryptoData(),
          getGoldData(),
          getForexData(),
          getStockData(),
        ]);

        const allAssets = [
          ...cryptoRes.data.map((item: any) => ({ ...item, type: 'کریپتو', unit: 'تومان' })),
          ...goldRes.data.map((item: any) => ({ ...item, type: 'طلا', unit: 'تومان' })),
          ...forexRes.data.map((item: any) => ({ ...item, type: 'ارز', unit: 'تومان' })),
          ...stockRes.data.map((item: any) => ({ ...item, type: 'سهام', unit: 'تومان' })),
        ];

        setAssets(allAssets);
      } catch (error) {
        console.error('خطا در دریافت داده:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {assets.map((asset, index) => (
        <AssetCard
          key={index}
          name={`${asset.name} (${asset.type})`}
          value={asset.price || asset.value || 0}
          unit={asset.unit}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
