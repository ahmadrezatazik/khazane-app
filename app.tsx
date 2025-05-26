import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';
import colors from './src/constants/colors';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle='dark-content' backgroundColor={colors.background} />
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
