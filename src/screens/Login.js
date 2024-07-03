import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Toast from "react-native-toast-message";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  // const { username = "", setUsername = () => {} } = route.params || {};
  const test = "test";
  console.log(username);

  const handleLogin = () => {
    if (password === "" || username === "") {
      Alert.alert("Error", "All fields are required");
      return;
    }

    Toast.show({
      type: "success",
      text1: "Logged in successfully!",
      text2: "Enjoy your meal!🍔",
      position: "bottom",
    });
    console.log("Ready to gp");
    setTimeout(() => {
      navigation.navigate("Home", { params: { username } });
    }, 2500);
  };

  return (
    <View style={styles.container}>
      <Toast className="z-50" />
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
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Sign in to your account
      </Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <Text className=" text-[#0000ff] underline py-2 px-6">
        forgot passowrd
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Text className="text-right mr-6">
          Don't have an account
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text className="pt-2 underline"> Sign up.</Text>
          </TouchableOpacity>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#fbbf24",
    padding: 3,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#ffffff", // White text color
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
});

export default Login;
