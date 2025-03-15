import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

const CheckoutModal = ({ visible, onCancel, onConfirm }) => {
    return(
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel} >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Confirm Checkout</Text>
                    <Text style={styles.modalText}>Are you sure you want to checkout?</Text>

                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={[styles.modalButton, { backgroundColor: "tomato" }]}
                            onPress={onConfirm}
                        >
                            <Text style={styles.modalButton}>Confirm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.modalButton, { backgroundColor: "gray" }]}
                            onPress={onCancel}
                        >
                            <Text style={styles.modalButton}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: 300,
        alignItems: "center",
    },
    modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    modalText: { fontSize: 16, marginBottom: 20, textAlign: "center" },
    modalButtons: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
    modalButton: { flex: 1, padding: 10, borderRadius: 5, alignItems: "center", marginHorizontal: 5 },
    modalButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default CheckoutModal;