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

            {/* Footer */}
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
        fontSize: 22, 
        fontWeight: "bold", 
        textAlign: "center", 
        marginBottom: 20 
    },

    aboutImage: { 
        width: "100%", 
        height: 180, 
        borderRadius: 12, 
        marginBottom: 25 
    },

    description: { 
        fontSize: 16, 
        textAlign: "center", 
        color: "#444", 
        marginBottom: 25, 
        lineHeight: 24,
        paddingHorizontal: 10 
    },

    section: { 
        backgroundColor: "#f9f9f9", 
        padding: 20, 
        borderRadius: 10, 
        marginBottom: 20, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
        width: "100%" 
    },

    sectionTitle: { 
        fontSize: 18, 
        fontWeight: "bold", 
        marginBottom: 10 
    },

    sectionText: { 
        fontSize: 14, 
        color: "#555", 
        lineHeight: 22 
    },

    footerText: { 
        fontSize: 14, 
        fontWeight: "bold", 
        marginTop: 30, 
        textAlign: "center", 
        color: "#777",
        paddingHorizontal: 10 
    },
});

export default AboutScreen;
