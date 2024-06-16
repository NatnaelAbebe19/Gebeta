import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import Animated from "react-native-reanimated";

export const CachedImage = (props) => {
  const [cachedSource, setChachedSource] = useState(null);
  const { uri } = props;

  useEffect(() => {
    const getCachedImage = async () => {
      try {
        const cachedImageData = await AsyncStorage.getItem(uri);
        if (cachedImageData) {
          setChachedSource({ uri: cachedImageData });
        } else {
          const response = await fetch(uri);
          const imageBlob = await response.blob();
          const base64Data = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
              resolve(reader.result);
            };
          });
          await AsyncStorage.setItem(uri, base64Data);
          setChachedSource({ uri: base64Data });
        }
      } catch (error) {
        console.log("Error caching image: ", error);
        setChachedSource({ uri });
      }
    };
    getCachedImage();
  }, []);
  return <Animated.Image source={cachedSource} {...props} />;
};
