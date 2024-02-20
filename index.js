/**
 * @format
 */

import * as React from 'react';
import {AppRegistry, useColorScheme} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MD3LightTheme, MD3DarkTheme, PaperProvider} from 'react-native-paper';
import {LightScheme} from './src/theme/lightTheme';
import {DarkScheme} from './src/theme/darkTheme';

const Light = {
  ...MD3LightTheme,
  colors: LightScheme,
};

const Dark = {
  ...MD3DarkTheme,
  colors: DarkScheme,
};

export default function Main() {
  const colorScheme = useColorScheme(); //get current device theme(light mode or dark mode)
  const theme = colorScheme === 'dark' ? Dark : Light;
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
