import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';

const categories = [
    { id: "1", name: "Fruits", icon: "🍎" },
    { id: "2", name: "Vegetables", icon: "🥕" },
    { id: "3", name: "Dairy", icon: "🥛" },
    { id: "4", name: "Meat", icon: "🥩" },
    { id: "5", name: "Snacks", icon: "🍪" },
    { id: "6", name: "Misc", icon: "📦" },
];

const products = [
    { id: 1, name: 'Apples', price: '$2.99/kg', image: require("../assets/images/apples.jpg") },
    { id: 2, name: 'Carrots', price: '$1/kg', image: require("../assets/images/carrots.jpg") },
    { id: 3, name: 'Chicken Breast', price: '$5/kg', image: require("../assets/images/breast.jpg") },
    { id: 4, name: 'Shawarma', price: '$2.49', image: require("../assets/images/shawarma.jpg") },
    { id: 5, name: 'Bananas', price: '$1.49', image: require("../assets/images/bananas.jpg") },
    { id: 6, name: 'Lettuce', price: '$3.99', image: require("../assets/images/lettuce.jpg") },
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

            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Shop by Category</Text>
            </View>
            <ScrollView horizontal style={styles.categoryContainer}>
                {categories.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.categoryItem}>
                        <Text style={styles.categoryIcon}>{item.icon}</Text>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Fresh Deals</Text>
            </View>
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
    container: { flex: 1, padding: 15, backgroundColor: "#fff" },

    searchContainer: { 
        marginVertical: 15, 
        padding: 12, 
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
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1, 
        borderColor: "#ccc", 
        borderRadius: 12,
        backgroundColor: "#fff5f5",
        color: "#333"
    },

    sectionContainer: {
        backgroundColor: "#ffebe6",
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
        color: "tomato",
        textTransform: "uppercase",
        letterSpacing: 1 
    },

    categoryContainer: { 
        flexDirection: "row", 
        marginBottom: 15, 
        paddingHorizontal: 10 
    },

    categoryItem: { 
        alignItems: "center", 
        marginRight: 15, 
        paddingVertical: 12, 
        paddingHorizontal: 15, 
        backgroundColor: "#fff5f5", 
        borderRadius: 12, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2 
    },

    categoryIcon: { fontSize: 28, marginBottom: 5 },

    productCard: { 
        width: "48%", 
        marginBottom: 20, 
        alignItems: "center", 
        backgroundColor: "#fffae6", 
        padding: 12, 
        borderRadius: 12, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3 
    },

    productImage: { 
        width: 110, 
        height: 110, 
        borderRadius: 12, 
        marginBottom: 8 
    },

    productName: { 
        fontSize: 16, 
        fontWeight: "bold", 
        marginBottom: 3, 
        color: "#2c3e50", 
        textAlign: "center" 
    },

    productPrice: { 
        fontSize: 16, 
        color: "#27ae60", 
        fontWeight: "600" 
    },

    addButton: { 
        marginTop: 10, 
        backgroundColor: "tomato", 
        paddingVertical: 10, 
        borderRadius: 8, 
        width: "100%", 
        alignItems: "center" 
    },

    addButtonText: { 
        color: "#fff", 
        fontSize: 15, 
        fontWeight: "bold", 
        textTransform: "uppercase" 
    },
});


export default ShopScreen;
