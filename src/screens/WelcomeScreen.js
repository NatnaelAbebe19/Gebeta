import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import Animated, { useSharedValue } from "react-native-reanimated";

export default function WelcomeScreen() {
  //   const ring1Padding = useSharedValue(0);
  //   const ring2Padding = useSharedValue(0);
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      {/* Logo with in with rings */}

      <View className="flex items-center space-y-2">
        <Text
          className="font-extrabold text-white tracking-widest "
          style={{ fontSize: hp(7) }}
        >
          Gebeta
        </Text>
      </View>
      <View className="bg-white/20 rounded-full" style={{ padding: hp(5.5) }}>
        <View className="bg-white/20 rounded-full" style={{ padding: hp(5) }}>
          <Image
            source={require("../../assets/intro.png")}
            style={{ width: hp(20), height: hp(20) }}
          />
        </View>
      </View>

      {/* Title and punchline */}
      <View className="flex items-center space-y-2">
        <Text
          className="font-light text-white tracking-widest text-center max-w-[330px]"
          style={{ fontSize: hp(2.4) }}
        >
          Dinner dilemmas solved. Order in or whip it up - all in one app.
        </Text>
      </View>
    </View>
  );
}
