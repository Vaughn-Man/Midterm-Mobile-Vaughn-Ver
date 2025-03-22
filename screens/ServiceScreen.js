import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const services = [
  {
    id: "1",
    name: "Software Installation",
    image: require("../assets/images/software.png"),
  },
  {
    id: "2",
    name: "Network Configuration",
    image: require("../assets/images/network.png"),
  },
  {
    id: "3",
    name: "Hardware Repair",
    image: require("../assets/images/hardware.png"),
  },
  {
    id: "4",
    name: "Virus Removal",
    image: require("../assets/images/virus.png"),
  },
  {
    id: "5",
    name: "System Optimization",
    image: require("../assets/images/optimization.png"),
  },
  {
    id: "6",
    name: "Miscellaneous Services",
    image: require("../assets/images/misc.png"),
  },
];

const ServiceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/support.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>Tech Support Services</Text>
        <Text style={styles.headerSubtitle}>Fast & Reliable IT Solutions</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Available Services</Text>
      </View>

      <View style={styles.serviceContainer}>
        {services.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceItem}>
            <Image source={service.image} style={styles.serviceIcon} />
            <Text style={styles.serviceName}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.supportButton}>
        <Text style={styles.supportButtonText}>Request Support</Text>
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

  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginBottom: 15, 
  },

  headerTitle: {
    fontSize: 24, 
    fontWeight: "bold",
    color: "white",
  },

  headerSubtitle: {
    fontSize: 17,
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
    fontSize: 22, 
    fontWeight: "bold",
    color: "lightgray",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  serviceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  serviceItem: {
    width: "48%",
    backgroundColor: "#1C1C1C",
    padding: 18, 
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: "gray",
  },

  serviceIcon: {
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: "contain",
  },

  serviceName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  supportButton: {
    backgroundColor: "gray",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },

  supportButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ServiceScreen;
