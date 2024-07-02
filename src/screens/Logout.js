import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfilePage = ({ route }) => {
  const username = route.params?.params?.username;
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("Home");
  };
  return (
    <View className="flex justify-center items-center h-full">
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
