import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Contact Us</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Your Name" />
                <TextInput style={styles.input} placeholder="Your Email" keyboardType="email-address" />
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    placeholder="Your Message"
                    multiline
                />
            </View>

            <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Send Message</Text>
            </TouchableOpacity>
            <View style={styles.contactDetails}>
                <Text style={styles.detailsHeader}>Other Ways to Reach Us</Text>

                <Text style={styles.detailText}>📞 Phone:
                    <Text
                        style={styles.linkText}
                        onPress={() => Linking.openURL("tel:+1234567890")}
                    > +1 (234) 567-890</Text>
                </Text>

                <Text style={styles.detailText}>📧 Email:
                    <Text
                        style={styles.linkText}
                        onPress={() => Linking.openURL("mailto:support@example.com")}
                    > support@example.com</Text>
                </Text>

                <Text style={styles.detailText}>🌐 Website:
                    <Text
                        style={styles.linkText}
                        onPress={() => Linking.openURL("https://www.example.com")}
                    > www.example.com</Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingVertical: 30, 
        paddingHorizontal: 20, 
        backgroundColor: "#fff", 
        justifyContent: "center" 
    },

    header: { 
        fontSize: 22, 
        fontWeight: "bold", 
        textAlign: "center", 
        marginBottom: 25 
    },

    inputContainer: { 
        marginBottom: 25, 
        width: "100%" 
    },

    input: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        backgroundColor: "#f9f9f9",
        marginBottom: 15
    },

    messageInput: { 
        height: 120, 
        textAlignVertical: "top" 
    },

    sendButton: {
        backgroundColor: "tomato",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 30
    },

    sendButtonText: { 
        color: "#fff", 
        fontSize: 16, 
        fontWeight: "bold" 
    },

    contactDetails: { 
        padding: 20, 
        borderRadius: 10, 
        backgroundColor: "#f1f1f1", 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: "100%"
    },

    detailsHeader: { 
        fontSize: 18, 
        fontWeight: "bold", 
        marginBottom: 10 
    },

    detailText: { 
        fontSize: 14, 
        marginBottom: 8, 
        lineHeight: 22 
    },

    linkText: { 
        color: "blue", 
        textDecorationLine: "underline" 
    },
});

export default ContactScreen;
