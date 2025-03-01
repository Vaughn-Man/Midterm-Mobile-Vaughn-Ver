import React from "react";
import { Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions, View } from "react-native";
import { Carousel } from "react-responsive-carousel";

const { width } = Dimensions.get("window");

const featuredItems = [
    { id: "1", image: "https://via.placeholder.com/300x150/FF5733/FFFFFF?text=Big+Discounts" },
    { id: "2", image: "https://via.placeholder.com/300x150/33FF57/FFFFFF?text=Flash+Sale" },
    { id: "3", image: "https://via.placeholder.com/300x150/3357FF/FFFFFF?text=New+Arrivals" },
];

const categories = [
    { id: "1", name: "Fruits", icon: "🍎" },
    { id: "2", name: "Vegetables", icon: "🥕" },
    { id: "3", name: "Dairy", icon: "🥛" },
    { id: "4", name: "Meat", icon: "🥩" },
    { id: "5", name: "Snacks", icon: "🍪" },
];

const products = [
    { id: "101", name: "Apples", price: "$2.99", image: "https://via.placeholder.com/100" },
    { id: "102", name: "Bananas", price: "$1.49", image: "https://via.placeholder.com/100" },
    { id: "103", name: "Milk", price: "$3.49", image: "https://via.placeholder.com/100" },
    { id: "104", name: "Chicken", price: "$6.99", image: "https://via.placeholder.com/100" },
];

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput style={styles.searchInput} placeholder="Search for products..." />
            </View>

            <Carousel
                loop
                width={width * 0.9}
                height={150}
                autoPlay
                data={featuredItems}
                scrollAnimationDuration={1000}
                rendrItem={({ item }) => (
                    <Image source={{ uri: item.image }} style={styles.carouselImage} />
                )}
            />

            <Text style={styles.sectionTitle}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                {categories.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.categoryItem}>
                        <Text style={styles.categoryIcon}>{item.icon}</Text>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Popular Products</Text>
            <FlatList
                data={products}
                numColumns={2}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <Image source={{ uri: item.image }} style={styles.productImage} />
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
    container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  
    searchContainer: { marginVertical: 10, padding: 10, backgroundColor: "#f1f1f1", borderRadius: 10 },
    searchInput: { fontSize: 16 },
  
    carouselImage: { width: "100%", height: 150, borderRadius: 10, alignSelf: "center" },
  
    sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
    categoryContainer: { flexDirection: "row", marginBottom: 10 },
    categoryItem: { alignItems: "center", marginRight: 15, padding: 10, backgroundColor: "#eee", borderRadius: 10 },
    categoryIcon: { fontSize: 24 },
  
    productCard: { width: "48%", marginBottom: 15, alignItems: "center", backgroundColor: "#f9f9f9", padding: 10, borderRadius: 10 },
    productImage: { width: 100, height: 100, borderRadius: 10 },
    productName: { fontSize: 14, fontWeight: "bold", marginVertical: 5 },
    productPrice: { fontSize: 16, color: "tomato" },
    addButton: { marginTop: 5, backgroundColor: "tomato", padding: 5, borderRadius: 5, width: "100%", alignItems: "center" },
    addButtonText: { color: "#fff", fontSize: 14 },
  });


export default HomeScreen;