import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react'
import { Provider } from "react-redux";
import { store } from "./store/store";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    BubblegumSans: require('./assets/fonts/BubbleSans.ttf'),
    AleoBold: require('./assets/fonts/AleoBold.otf'),
    BubblePop: require('./assets/fonts/BubblePop.otf')
  })

  if (!isLoadingComplete || !loaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
