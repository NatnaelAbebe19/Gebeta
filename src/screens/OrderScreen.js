import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Animated, { FadeIn } from "react-native-reanimated";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export default function OrderScreen() {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    // Handle the form submission logic here
    if (
      address === "" ||
      name === "" ||
      fatherName === "" ||
      email === "" ||
      paymentMethod === ""
    ) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    Toast.show({
      type: "success",
      text1: "Ordered Successfully!",
      text2: "Enjoy your meal!🍔",
      position: "bottom",
    });
    setPaymentMethod("");
    setAddress("");
    setName("");
    setFatherName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <View style={styles.container}>
      <Toast className="z-50" />
      <Text className="text-3xl font-bold mt-8">Order it, Now!</Text>
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-1 "
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 bg-white"
        >
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
        </TouchableOpacity>
      </Animated.View>
      <Text
        style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}
      ></Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Father's Name"
        value={fatherName}
        onChangeText={setFatherName}
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Picker
        selectedValue={paymentMethod}
        onValueChange={(itemValue, itemIndex) => setPaymentMethod(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Payment Method" value="" />
        <Picker.Item label="Pay with chapa" value="chapa" />
        <Picker.Item label="Cash on Delivery" value="cash" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#fbbf24", // Example blue background color
    padding: 3,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff", // White text color
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ced4da",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 14,
    backgroundColor: "#ffffff",
  },
  picker: {
    height: 50,
    marginBottom: 20,
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
});
