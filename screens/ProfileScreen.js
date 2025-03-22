import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView
} from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={require("../assets/images/doe.png")}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@mail.com</Text>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <View style={styles.textContainer}>
          <Text style={styles.bioText}>
            Passionate about software development and cutting-edge technologies.
            Loves building innovative solutions and solving complex challenges.
          </Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <View style={styles.textContainer}>
          <Text style={styles.aboutText}>
            Hey there! I'm John, a full-stack developer who enjoys coding,
            exploring new technologies, and contributing to open-source
            projects.
          </Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Contact Info</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contactText}>
            📧 Email:
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL("mailto:johndoe@mail.com")}
            >
              {" "}
              johndoe@mail.com
            </Text>
          </Text>

          <Text style={styles.contactText}>
            📞 Phone:
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL("tel:+1234567890")}
            >
              {" "}
              +1 (234) 567-890
            </Text>
          </Text>

          <Text style={styles.contactText}>
            🌐 Website:
            <Text
              style={styles.linkText}
              onPress={() => Linking.openURL("https://www.johndoe.dev")}
            >
              {" "}
              www.johndoe.dev
            </Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tech Support</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "gray",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 3,
  },
  email: {
    fontSize: 16,
    color: "gray",
    marginBottom: 15,
  },
  infoCard: {
    width: "90%",
    backgroundColor: "#1C1C1C",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "gray",
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "lightgray",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  bioText: {
    fontSize: 14,
    color: "white",
    lineHeight: 22,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  aboutText: {
    fontSize: 14,
    color: "white",
    lineHeight: 22,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  contactContainer: {
    alignItems: "center",
    marginTop: 5,
  },
  contactText: {
    fontSize: 15,
    marginBottom: 8,
    color: "lightgray",
    fontWeight: "500",
  },
  linkText: {
    color: "#3399ff",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "gray",
    padding: 12,
    borderRadius: 10,
    width: "90%",
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
