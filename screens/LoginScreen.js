import React from "react";
import { TextInput, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>
            
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
                onPress={() => navigation.navigate('Home')}
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
        backgroundColor: "tomato",
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
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 10,
        padding: 12,
        color: "#7a2323",
        marginBottom: 15,
        borderColor: "#e57373",
        borderWidth: 1.5,
    },
    loginButton: {
        backgroundColor: "#c94c4c",
        padding: 14,
        borderRadius: 10,
        width: "90%",
        alignItems: "center",
        marginVertical: 10,
    },
    loginButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    signUpButton: {
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 10,
        width: "90%",
        alignItems: "center",
        borderColor: "#c94c4c",
        borderWidth: 2,
    },
    signUpButtonText: {
        color: "#c94c4c",
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default LoginScreen;
