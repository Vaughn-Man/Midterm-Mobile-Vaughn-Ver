import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const AboutScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>About Us</Text>

            <Image source={require("../assets/images/marketlogo.jpg")} style={styles.aboutImage} />

            <Text style={styles.description}>
                Welcome to our store! We are committed to providing fresh and high-quality products. 
                Our mission is to make your shopping experience seamless, ensuring that you get the best 
                items at the best prices. 
            </Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🌟 Our Mission</Text>
                <Text style={styles.sectionText}>
                    To bring quality products closer to our customers while maintaining affordability and excellence.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🚀 Our Vision</Text>
                <Text style={styles.sectionText}>
                    To be a trusted name in the industry, known for innovation, customer satisfaction, and 
                    sustainable growth.
                </Text>
            </View>

            <Text style={styles.footerText}>Thank you for choosing us! 💙</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flexGrow: 1, 
        paddingVertical: 30, 
        paddingHorizontal: 20, 
        backgroundColor: "#fff", 
        alignItems: "center" 
    },

    header: { 
        fontSize: 24, 
        fontWeight: "bold", 
        textAlign: "center", 
        marginBottom: 20, 
        color: "tomato",
        textTransform: "uppercase",
        letterSpacing: 1.2
    },

    aboutImage: { 
        width: "100%", 
        height: 200, 
        borderRadius: 12, 
        marginBottom: 25 
    },

    description: { 
        fontSize: 16, 
        textAlign: "center", 
        color: "#333", 
        marginBottom: 25, 
        lineHeight: 26,
        fontWeight: "500",
        paddingHorizontal: 10 
    },

    section: { 
        backgroundColor: "#fff5f5", 
        padding: 20, 
        borderRadius: 12, 
        marginBottom: 20, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
        width: "100%",
        borderWidth: 1,
        borderColor: "tomato",
    },

    sectionTitle: { 
        fontSize: 18, 
        fontWeight: "bold", 
        marginBottom: 10, 
        color: "tomato",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 1
    },

    sectionText: { 
        fontSize: 15, 
        color: "#444", 
        lineHeight: 24, 
        fontWeight: "500",
        textAlign: "justify"
    },

    footerText: { 
        fontSize: 14, 
        fontWeight: "bold", 
        marginTop: 30, 
        textAlign: "center", 
        color: "#555",
        paddingHorizontal: 15, 
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
});

export default AboutScreen;
