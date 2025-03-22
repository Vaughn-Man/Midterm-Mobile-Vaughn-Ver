import React from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/react-white.png")}
        style={{ width: 120, height: 120 }}
      />
      <Text style={styles.title}>You must Log In first</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        placeholderTextColor="#7a2323"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#7a2323"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25,
  },
  input: {
    width: "90%",
  backgroundColor: "#fff", 
  borderRadius: 10,
  padding: 12,
  color: "black", 
  marginBottom: 15,
  borderColor: "#1C1C1C", 
  borderWidth: 1.5,
  fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#343434",
    padding: 14,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginTop: 70,
    borderColor: "#fff",
    borderWidth: 2,
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpButton: {
    backgroundColor: "#343434",
    padding: 14,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 2,
  },
  signUpButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LoginScreen;
