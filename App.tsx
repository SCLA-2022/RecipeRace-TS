import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { useFonts } from "expo-font";

// redux
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {loadCoin, getCoin} from './store/slices/coinslice'



export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
