import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/user.png")} style={styles.profileImage} />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@mail.com</Text>

            <View style={styles.infoCard}>
                <Text style={styles.sectionTitle}>Bio</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.bioText}>
                        Passionate about fresh, organic products. Loves exploring new markets
                        and trying out different recipes. Food enthusiast & part-time chef.
                    </Text>
                </View>
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.sectionTitle}>About Me</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.aboutText}>
                        Hey there! I'm John, a food lover who enjoys cooking and discovering
                        fresh ingredients. When I'm not in the kitchen, I'm out exploring
                        local markets and trying out new cuisines.
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.buttonText}>Payment Methods</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffebeb",
        padding: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: "tomato",
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "tomato",
        marginBottom: 3,
    },
    email: {
        fontSize: 16,
        color: "#555",
        marginBottom: 15,
    },
    infoCard: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    textContainer: {
        borderWidth: 2,
        borderColor: "tomato",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "tomato",
        marginBottom: 5,
    },
    bioText: {
        fontSize: 14,
        color: "#333",
        lineHeight: 22,
        textAlign: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    aboutText: {
        fontSize: 14,
        color: "#444",
        lineHeight: 22,
        textAlign: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    button: {
        backgroundColor: "tomato",
        padding: 12,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default ProfileScreen;