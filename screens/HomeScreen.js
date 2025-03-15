import React from "react";
import { Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const featuredItems = [
    { id: "1", image: require("../assets/images/cart.jpg") },
    { id: "2", image: require("../assets/images/basket.jpg") },
    { id: "3", image: require("../assets/images/grocery.jpg") },
];

const categories = [
    { id: "1", name: "Fruits", icon: "🍎" },
    { id: "2", name: "Vegetables", icon: "🥕" },
    { id: "3", name: "Dairy", icon: "🥛" },
    { id: "4", name: "Meat", icon: "🥩" },
    { id: "5", name: "Snacks", icon: "🍪" },
    { id: "6", name: "Misc", icon: "📦" }, 
];

const products = [
    { id: "101", name: "Apples", price: "$2.99", image: require("../assets/images/apples.jpg") },
    { id: "102", name: "Bananas", price: "$1.49", image: require("../assets/images/bananas.jpg") },
    { id: "103", name: "Milk", price: "$3.49", image: require("../assets/images/milk.jpg") },
    { id: "104", name: "Chicken", price: "$6.99", image: require("../assets/images/chicken.jpg") },
    { id: "105", name: "Lettuce", price: "$3.99", image: require("../assets/images/lettuce.jpg") },
    { id: "106", name: "Shawarma", price: "$2.49", image: require("../assets/images/shawarma.jpg") },
];

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search for products..." />
            </View>

            <Carousel
                loop
                width={width}
                height={150}
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
                    <Image source={item.image} style={styles.carouselImage} />
                )}
            />
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Categories</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                {categories.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.categoryItem}>
                        <Text style={styles.categoryIcon}>{item.icon}</Text>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Popular Products</Text>
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
    container: { flex: 1, padding: 10, backgroundColor: "#fff" },

    searchContainer: { 
        marginVertical: 10, 
        padding: 10, 
        backgroundColor: "#ffffff", 
        borderRadius: 12, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
    },
    searchInput: { 
        fontSize: 16, 
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1, 
        borderColor: "#ddd", 
        borderRadius: 8,
        backgroundColor: "#f9f9f9",
    },

    sectionContainer: {
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 15,
        marginLeft: 10,
        alignSelf: "center",
    },

    carouselImage: { width: "100%", height: 150, borderRadius: 10, alignSelf: "center"},

    sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10, marginLeft: 20 },
    categoryContainer: { flexDirection: "row", marginLeft: 30, marginBottom: 10 },
    categoryItem: { alignItems: "center", marginRight: 15, padding: 10, backgroundColor: "#eee", borderRadius: 10 },
    categoryIcon: { fontSize: 24 },

    productCard: { width: "48%", marginBottom: 15, alignItems: "center", backgroundColor: "#f9f9f9", padding: 10, borderRadius: 10, borderWidth: 2, borderColor: "tomato" },
    productImage: { width: 100, height: 100, borderRadius: 10 },
    productName: { fontSize: 14, fontWeight: "bold", marginVertical: 5 },
    productPrice: { fontSize: 16, color: "tomato" },
    addButton: { marginTop: 5, backgroundColor: "tomato", padding: 5, borderRadius: 5, width: "100%", alignItems: "center" },
    addButtonText: { color: "#fff", fontSize: 14 },
});


export default HomeScreen;