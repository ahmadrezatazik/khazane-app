import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import { formatNumber } from '../utils/formatNumber';

type AssetCardProps = {
  name: string;
  value: number;
  unit: string;
};

const AssetCard = ({ name, value, unit }: AssetCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>
        {formatNumber(value)} {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  value: {
    fontSize: 14,
    color: colors.black,
    marginTop: 4,
  },
});

export default AssetCard;
