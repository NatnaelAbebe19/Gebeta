import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function Categories() {
  return (
    <View>
      <Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="sapce-x-4"
          contentContainerStyle={{ paddingHorizontal: 15 }}
        ></ScrollView>
      </Text>
    </View>
  );
}
