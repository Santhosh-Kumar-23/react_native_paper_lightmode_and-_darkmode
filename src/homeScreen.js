import {View, useColorScheme} from 'react-native';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {
  useTheme,
  Appbar,
  TouchableRipple,
  Switch,
  ActivityIndicator,
  MD2Colors,
  Button,
} from 'react-native-paper';
import {PreferencesContext} from './context/globalThemeContext/ThemeContextGlobal';

const HomeScreen = () => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);
  //get current device mode(dark or light)
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
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
      {/* <Text>Switch</Text> */}
      {/* <Switch color={'blue'} value={isThemeDark} onValueChange={toggleTheme} /> */}
      {/* <ActivityIndicator animating={true} color={theme.colors.error} /> */}
      <Appbar.Header c>
        <Appbar.BackAction onPress={() => {}} color={theme.colors.p} />
        <Appbar.Content title="Razor pay" color={theme.colors.primary} />
        <Appbar.Action
          icon="calendar"
          onPress={() => {}}
          color={theme.colors.primary}
        />
        <Appbar.Action
          icon="magnify"
          onPress={() => {}}
          color={theme.colors.primary}
        />
      </Appbar.Header>
    </View>
  );
};

export default HomeScreen;
