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
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Placeholder for login logic
    if (
      username === "" ||
      password === "" ||
      confirmPassword === "" ||
      email === ""
    ) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    Toast.show({
      type: "success",
      text1: "Successfully signed up!",
      text2: "Welcome to Gebeta👋",
      position: "bottom",
    });
  };

  return (
    <View style={styles.container}>
      <Toast className="z-50" />
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute top-8 flex-row justify-between items-center pt-1 "
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
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
        Welcome to the Signup page
      </Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
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
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <Text className="text-right mr-6">
          Already have an account
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text className="pt-2 underline text-right"> Sign in.</Text>
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

export default Signup;
