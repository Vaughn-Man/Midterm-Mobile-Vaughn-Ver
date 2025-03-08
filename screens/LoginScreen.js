import React from "react";
import { Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { View, Text } from "react-native-web";

const LoginScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../assets/images/splash-bg.jpg")} t
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Back!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Username"
                    placeholderTextColor="#fff"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor="#fff"
                    secureTextEntry
                />
                
                <TouchableOpacity 
                    style={styles.loginButton} 
                    onPress={() => navigation.navigate('NavBar')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signUpButton}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "tomato", 
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.3)", 
        padding: 30,
        borderRadius: 20,
        width: "90%",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 10,
        padding: 12,
        color: "#fff",
        marginBottom: 15,
        borderColor: "#fff",
        borderWidth: 1,
    },
    loginButton: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginVertical: 5,
    },
    signUpButton: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        padding: 12,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 5,
        borderColor: "#fff",
        borderWidth: 1,
    },
    buttonText: {
        color: "tomato",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default LoginScreen;
