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
import {PreferencesContext} from './src/context/globalThemeContext/ThemeContextGlobal';
import {NavigationContainer} from '@react-navigation/native';

const Light = {
  ...MD3LightTheme,
  colors: LightScheme,
};

const Dark = {
  ...MD3DarkTheme,
  colors: DarkScheme,
};

export default function Main() {
  const colorScheme = useColorScheme();

  //for automatic device switch
  const theme = colorScheme === 'dark' ? Dark : Light;

  const [isThemeDark, setIsThemeDark] = React.useState(false);

  //manual toggle switch
  // let theme = isThemeDark ? Dark : Light;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
