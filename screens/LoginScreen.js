import React from "react";
import { Button, TextInput, StyleSheet } from "react-native";
import { View, Text } from "react-native-web";

const LoginScreen = ({ navigation }) => {


    return (
        <View>
            <Text
            style={styles.text}
            >Login</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter Username"
            />
            <TextInput
            style={styles.input}
            placeholder="Enter Password"
            />
            <View>
                <Button
                style={styles.loginButton}
                title="Login"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
            <Button
            style={styles.loginButton}
            title="Sign Up"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: { marginBottom: 10 },
    input: { borderWidth: 1, marginBottom: 20, padding: 10, width: '100%' },
    loginButton: { marginVertical: 10 },
});

export default LoginScreen;