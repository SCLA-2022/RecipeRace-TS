import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Image } from "react-native";

function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        const imageAssets = cacheImages([

          require("../assets/RegularQ.png"),
          require("../assets/VeganQ.png"),
          require("../assets/RegularEgg.png"),
          require("../assets/VeganEgg.png"),
          require("../assets/RegularS.jpeg"),
          require("../assets/VeganS.png"),
          require("../assets/RegularSalad.jpeg"),
          require("../assets/VeganSalad.png"),
          require("../assets/VeganFriedRice.png"),
          require("../assets/players/Arnaldo.jpeg"),
          require("../assets/players/Henry.jpeg"),
          require("../assets/players/Hoyt.jpeg"),
          require("../assets/players/Ivy.jpeg"),
          require("../assets/players/Kory.jpeg"),
          require("../assets/players/logan.jpeg"),
          require("../assets/players/Moshe.jpeg")
        ]);

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          BubblegumSans: require("../assets/fonts/BubbleSans.ttf"),
          AleoBold: require("../assets/fonts/AleoBold.otf"),
          BubblePop: require("../assets/fonts/BubblePop.otf"),
        });

        // load images
        await Promise.all([...imageAssets]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
