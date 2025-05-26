import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import strings from '../constants/strings';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings.appName}</Text>
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
    fontSize: 24,
    color: colors.primary,
  },
});

export default HomeScreen;
