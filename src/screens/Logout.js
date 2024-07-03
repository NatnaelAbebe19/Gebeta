import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import Animated, { FadeIn } from "react-native-reanimated";
const ProfilePage = ({ route }) => {
  const username = route.params?.params?.username;
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex justify-center items-center h-full">
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute top-8 flex-row justify-between items-center pt-1 "
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="p-2 rounded-full ml-5 bg-white"
        >
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
        </TouchableOpacity>
      </Animated.View>
      <Text className="text-xl my-4">
        Welcome to your profile page,{" "}
        <Text className="text-amber-400">{username}!</Text>
      </Text>
      <TouchableOpacity onPress={handleLogout} className="w-[200px]">
        <Text className="text-white bg-amber-400 p-2 px-4 rounded-lg text-center text-xl">
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;
