import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useColorScheme from './hooks/useColorScheme';
import {tintColorLight} from './constants/Colors';
import Navigation from './navigation';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar
        animated={true}
        backgroundColor={tintColorLight}
        barStyle={'dark-content'}
        showHideTransition={'slide'}
        hidden={false}
      />
    </SafeAreaProvider>
  );
}
