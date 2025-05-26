import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import AddAssetScreen from '../screens/AddAssetScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import strings from '../constants/strings';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            switch (route.name) {
              case strings.home:
                iconName = 'home-outline';
                break;
              case strings.portfolio:
                iconName = 'pie-chart-outline';
                break;
              case strings.addAsset:
                iconName = 'add-circle-outline';
                break;
              case strings.settings:
                iconName = 'settings-outline';
                break;
              default:
                iconName = 'help';
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name={strings.home} component={HomeScreen} />
        <Tab.Screen name={strings.portfolio} component={PortfolioScreen} />
        <Tab.Screen name={strings.addAsset} component={AddAssetScreen} />
        <Tab.Screen name={strings.settings} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
