import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About Us</Text>

      <Image
        source={require("../assets/images/tech-logo.jpg")}
        style={styles.aboutImage}
      />

      <Text style={styles.description}>
        Welcome to our company! We specialize in cutting-edge software solutions
        designed to enhance efficiency, drive innovation, and transform digital
        experiences. Our mission is to deliver high-quality, scalable, and
        secure technology that empowers businesses and individuals to thrive in
        the digital era.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🪐 Our Mission</Text>
        <Text style={styles.sectionText}>
          To develop innovative and reliable software solutions that streamline
          processes, enhance productivity, and empower businesses to achieve
          their full potential in the digital landscape.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👨‍💻 Our Vision</Text>
        <Text style={styles.sectionText}>
          To be a leading force in the tech industry, recognized for pioneering
          innovation, delivering seamless user experiences, and driving digital
          transformation through cutting-edge software solutions.
        </Text>
      </View>

      <Text style={styles.footerText}>
        Thank you for choosing us! We promise to serve you to the best of our
        abilities. 💙
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "black",
    alignItems: "center",
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "lightgray",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },

  aboutImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 25,
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    marginBottom: 25,
    lineHeight: 26,
    fontWeight: "500",
    paddingHorizontal: 10,
  },

  section: {
    backgroundColor: "#1C1C1C",
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
    borderColor: "gray",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "lightgray",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  sectionText: {
    fontSize: 15,
    color: "white",
    lineHeight: 24,
    fontWeight: "500",
    textAlign: "justify",
  },

  footerText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
    color: "#aaa",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
});

export default AboutScreen;
