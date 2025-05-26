import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import formatNumber from '../utils/formatNumber';

interface AssetCardProps {
  name: string;
  amount: number;
}

const AssetCard: React.FC<AssetCardProps> = ({ name, amount }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.amount}>{formatNumber(amount)} تومان</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  amount: {
    fontSize: 14,
    color: colors.text,
    marginTop: 4,
  },
});

export default AssetCard;
