import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';

const categories = [
    { id: "1", name: "Fruits", icon: "🍎" },
    { id: "2", name: "Vegetables", icon: "🥕" },
    { id: "3", name: "Dairy", icon: "🥛" },
    { id: "4", name: "Meat", icon: "🥩" },
    { id: "5", name: "Snacks", icon: "🍪" },
];

const products = [
    { id: 1, name: 'Apples', price: '$2/kg', image: require("../assets/images/apples.jpg") },
    { id: 2, name: 'Carrots', price: '$1/kg', image: require("../assets/images/carrots.jpg") },
    { id: 3, name: 'Chicken Breast', price: '$5/kg', image: require("../assets/images/breast.jpg") },
    { id: 4, name: 'Shawarma', price: '$2', image: require("../assets/images/shawarma.jpg") },
];

function ShopScreen() {
    const renderProduct = ({ item }) => (
        <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add to Basket</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput placeholder="Search fresh produce..." style={styles.searchInput} />
            </View>

            <Text style={styles.sectionTitle}>Shop by Category</Text>
            <ScrollView horizontal style={styles.categoryContainer}>
                {categories.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.categoryItem}>
                        <Text style={styles.categoryIcon}>{item.icon}</Text>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>Fresh Deals</Text>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
        </ScrollView>
    );
}

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

    sectionTitle: { fontSize: 20, fontWeight: "bold", marginVertical: 10, marginLeft: 20, color: "#2c3e50" },
    categoryContainer: { flexDirection: "row", marginLeft: 25, marginBottom: 10 },
    categoryItem: { alignItems: "center", marginRight: 15, padding: 10, backgroundColor: "#ffd700", borderRadius: 10 },
    categoryIcon: { fontSize: 24 },

    productCard: { width: "48%", marginBottom: 15, alignItems: "center", backgroundColor: "#fffae6", padding: 10, borderRadius: 10, borderColor: "#ffd700", borderWidth: 1 },
    productImage: { width: 100, height: 100, borderRadius: 10 },
    productName: { fontSize: 14, fontWeight: "bold", marginVertical: 5 },
    productPrice: { fontSize: 16, color: "#27ae60" },
    addButton: { marginTop: 5, backgroundColor: "tomato", padding: 5, borderRadius: 5, width: "100%", alignItems: "center" },
    addButtonText: { color: "#fff", fontSize: 14 },
});

export default ShopScreen;
