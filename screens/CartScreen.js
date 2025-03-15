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
    container: { flex: 1, padding: 10, backgroundColor: "#fff" },

    header: { fontSize: 24, fontWeight: "bold", color: "tomato", textAlign: "center", marginVertical: 15 },

    cartItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff5f5",
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        borderColor: "tomato",
        borderWidth: 1,
    },

    cartImage: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
    cartDetails: { flex: 1 },
    itemName: { fontSize: 16, fontWeight: "bold" },
    itemPrice: { fontSize: 14, color: "tomato", marginVertical: 2 },
    itemQuantity: { fontSize: 14, color: "#555" },

    removeButton: { backgroundColor: "#ff6347", padding: 5, borderRadius: 5 },
    removeButtonText: { color: "#fff", fontSize: 14 },

    checkoutButton: {
        backgroundColor: "tomato",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 15,
    },
    checkoutButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default CartScreen;
