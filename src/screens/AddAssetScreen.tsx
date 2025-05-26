import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AddAssetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>افزودن دارایی در آینده توسعه می‌یابد.</Text>
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
    fontSize: 16,
    color: colors.black,
  },
});

export default AddAssetScreen;
