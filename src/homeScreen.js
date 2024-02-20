import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const HomeScreen = () => {
  const theme = useTheme();
  //get current device mode(dark or light)
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        padding: 16,
        height: '100%',
      }}>
      <Text
        style={{
          color: theme.colors.primary,
          textAlign: 'center',
          fontSize: 16,
        }}>
        Mode: {colorScheme}
      </Text>
      <View
        style={{backgroundColor: theme.colors.primary, margin: 5, padding: 20}}>
        <Text style={{color: theme.colors.title}}>Primary</Text>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.secondary,
          margin: 5,
          padding: 20,
        }}>
        <Text style={{color: theme.colors.title}}>Secondary</Text>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.error,
          margin: 5,
          padding: 20,
        }}>
        <Text style={{color: theme.colors.title}}>Error</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
