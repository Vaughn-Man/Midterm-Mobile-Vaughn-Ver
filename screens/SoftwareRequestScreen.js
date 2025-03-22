import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const SoftwareRequestScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Software Building Request</Text>
        <Text style={styles.headerSubtitle}>
          Let us know your software requirements
        </Text>
      </View>

      <Image
        source={require("../assets/images/request.png")}
        style={styles.requestImage}
      />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Request Details</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Software Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter software name..."
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe the software..."
          placeholderTextColor="gray"
          multiline
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Required Features</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="List key features..."
          placeholderTextColor="gray"
          multiline
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Deadline</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter deadline..."
          placeholderTextColor="gray"
        />
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  requestImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  headerSubtitle: {
    fontSize: 16,
    color: "gray",
  },

  sectionContainer: {
    backgroundColor: "#1C1C1C",
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 25,
    paddingVertical: 12,
    alignSelf: "center",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "lightgray",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#1C1C1C",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: "white",
    borderWidth: 1,
    borderColor: "gray",
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  submitButton: {
    backgroundColor: "gray",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },

  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SoftwareRequestScreen;
