import React from "react";
import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const featuredItems = [
  { id: "1", image: require("../assets/images/laptop.jpg") },
  { id: "2", image: require("../assets/images/gpu.jpg") },
  { id: "3", image: require("../assets/images/motherboard.jpg") },
];

const products = [
  {
    id: "101",
    name: "Gaming Laptop",
    price: "$999.99",
    image: require("../assets/images/gaming-laptop.jpg"),
  },
  {
    id: "102",
    name: "Graphics Card",
    price: "$499.99",
    image: require("../assets/images/graphics-card.jpg"),
  },
  {
    id: "103",
    name: "Mechanical Keyboard",
    price: "$129.99",
    image: require("../assets/images/keyboard.jpg"),
  },
  {
    id: "104",
    name: "Gaming Mouse",
    price: "$59.99",
    image: require("../assets/images/mouse.jpg"),
  },
  {
    id: "105",
    name: "SSD 1TB",
    price: "$149.99",
    image: require("../assets/images/ssd.jpg"),
  },
  {
    id: "106",
    name: "Gaming Monitor",
    price: "$299.99",
    image: require("../assets/images/monitor.jpg"),
  },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for hardware..."
          placeholderTextColor="gray"
        />
      </View>

      <Carousel
        loop
        width={width}
        height={160}
        autoPlay
        data={featuredItems}
        scrollAnimationDuration={1000}
        snapEnabled={true}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} />
          </View>
        )}
      />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Popular Hardware</Text>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "black" },

  searchContainer: {
    marginVertical: 15,
    padding: 12,
    backgroundColor: "#1C1C1C",
    borderRadius: 12,
  },

  searchInput: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 12,
    backgroundColor: "#333",
    color: "white",
  },

  sectionContainer: {
    backgroundColor: "#1C1C1C",
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 8,
    alignSelf: "center",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    color: "lightgray",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  carouselItem: { 
    justifyContent: "center", 
    alignItems: "center",
    width: "100%",
},

  carouselImage: { 
    width: "90%",  
    height: 160, 
    borderRadius: 12, 
    alignSelf: "center",
    marginRight: 38,
},

  productCard: {
    width: "48%",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#1C1C1C",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "gray",
  },

  productImage: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginBottom: 8,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
    color: "white",
    textAlign: "center",
  },

  productPrice: {
    fontSize: 16,
    color: "tomato",
    fontWeight: "600",
  },

  addButton: {
    marginTop: 10,
    backgroundColor: "gray",
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },

  addButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default HomeScreen;
