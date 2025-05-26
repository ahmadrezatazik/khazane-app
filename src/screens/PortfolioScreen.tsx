import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>پرتفوی شما هنوز خالی است.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.primary,
  },
});

export default PortfolioScreen;
