import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Your Name" />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          keyboardType="email-address"
        />
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

        <Text style={styles.detailText}>
          📞 Phone:
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL("tel:+1234567890")}
          >
            {" "}
            +1 (234) 567-890
          </Text>
        </Text>

        <Text style={styles.detailText}>
          📧 Email:
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL("mailto:support@example.com")}
          >
            {" "}
            support@example.com
          </Text>
        </Text>

        <Text style={styles.detailText}>
          🌐 Website:
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL("https://www.example.com")}
          >
            {" "}
            www.example.com
          </Text>
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
    backgroundColor: "black",
    justifyContent: "center",
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "lightgray",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },

  inputContainer: {
    marginBottom: 25,
    width: "100%",
  },

  input: {
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 12,
    backgroundColor: "#1C1C1C",
    marginBottom: 15,
    color: "white",
  },

  messageInput: {
    height: 120,
    textAlignVertical: "top",
  },

  sendButton: {
    backgroundColor: "gray",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },

  sendButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  contactDetails: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#1C1C1C",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
  },

  detailsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "lightgray",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  detailText: {
    fontSize: 15,
    marginBottom: 8,
    lineHeight: 24,
    color: "white",
    fontWeight: "500",
  },

  linkText: {
    color: "#5DADE2",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

export default ContactScreen;
