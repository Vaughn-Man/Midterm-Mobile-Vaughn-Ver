import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import CheckoutModal from '../components/CheckOutModal';

const cartItems = [
    { id: 1, name: 'Apples', price: '$2/kg', quantity: 2, image: require("../assets/images/apples.jpg") },
    { id: 2, name: 'Carrots', price: '$1/kg', quantity: 1, image: require("../assets/images/carrots.jpg") },
    { id: 3, name: 'Chicken Breast', price: '$5/kg', quantity: 3, image: require("../assets/images/breast.jpg") },
];

function CartScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={item.image} style={styles.cartImage} />
            <View style={styles.cartDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Cart</Text>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity style={styles.checkoutButton} onPress={() => {setModalVisible(true)}}>
                <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>

            <CheckoutModal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                onConfirm={() => {
                    setModalVisible(false);
                    alert("Checkout successful!");
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 15, 
        backgroundColor: "#fff" 
    },

    header: { 
        fontSize: 26, 
        fontWeight: "bold", 
        color: "tomato", 
        textAlign: "center", 
        marginBottom: 20 
    },

    cartItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffebe6",
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    cartImage: { 
        width: 70, 
        height: 70, 
        borderRadius: 12, 
        marginRight: 12 
    },

    cartDetails: { 
        flex: 1 
    },

    itemName: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#2c3e50" 
    },

    itemPrice: { 
        fontSize: 16, 
        color: "tomato", 
        fontWeight: "600", 
        marginVertical: 3 
    },

    itemQuantity: { 
        fontSize: 15, 
        color: "#555" 
    },

    removeButton: { 
        backgroundColor: "#ff4d4d", 
        paddingVertical: 8, 
        paddingHorizontal: 12, 
        borderRadius: 8, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2 
    },

    removeButtonText: { 
        color: "#fff", 
        fontSize: 15, 
        fontWeight: "bold" 
    },

    checkoutButton: {
        backgroundColor: "tomato",
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },

    checkoutButtonText: { 
        color: "#fff", 
        fontSize: 20, 
        fontWeight: "bold", 
        textTransform: "uppercase" 
    },
});

export default CartScreen;
