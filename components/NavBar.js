import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native"; 
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";
import ContactScreen from "../screens/ContactScreen";
import AboutScreen from "../screens/AboutScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, iconName }) => (
  <View style={styles.drawerItem}>
    <Text style={styles.drawerText}>{label}</Text>
    <Ionicons name={iconName} size={22} color="white" />
  </View>
);

const NavBar = ({ navigation }) => {
  
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
            <Ionicons name="menu-outline" size={28} color="white" />
          </TouchableOpacity>
        ),
        drawerStyle: styles.drawer, 
        drawerContentStyle: styles.drawerContent, 
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#bbb",
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
              <Ionicons name="menu-outline" size={28} color="white" />
            </TouchableOpacity>
          ),
          drawerLabel: () => <CustomDrawerItem label="Home" iconName="home-outline" />,
        })} 
      />
      <Drawer.Screen 
        name="Shop" 
        component={ShopScreen} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
              <Ionicons name="menu-outline" size={28} color="white" />
            </TouchableOpacity>
          ),
          drawerLabel: () => <CustomDrawerItem label="Shop" iconName="cart-outline" />,
        })}  
      />
      <Drawer.Screen 
        name="Cart" 
        component={CartScreen} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
              <Ionicons name="menu-outline" size={28} color="white" />
            </TouchableOpacity>
          ),
          drawerLabel: () => <CustomDrawerItem label="Cart" iconName="basket-outline" />,
        })}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
              <Ionicons name="menu-outline" size={28} color="white" />
            </TouchableOpacity>
          ),
          drawerLabel: () => <CustomDrawerItem label="Profile" iconName="person-outline" />,
        })}
      />
      <Drawer.Screen 
        name="Contact" 
        component={ContactScreen} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
              <Ionicons name="menu-outline" size={28} color="white" />
            </TouchableOpacity>
          ),
          drawerLabel: () => <CustomDrawerItem label="Contact" iconName="call-outline" />,
        })}
      />
      <Drawer.Screen 
        name="About" 
        component={AboutScreen} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
              <Ionicons name="menu-outline" size={28} color="white" />
            </TouchableOpacity>
          ),
          drawerLabel: () => <CustomDrawerItem label="About" iconName="information-circle-outline" />,
        })}
       />
      <Drawer.Screen 
        name="Logout" 
        component={LoginScreen} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
              <Ionicons name="menu-outline" size={28} color="white" />
            </TouchableOpacity>
          ),
          drawerLabel: () => <CustomDrawerItem label="Logout" iconName="log-out-outline" />,
        })}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#343434", 
  },
  menuButton: {
    marginLeft: 15,
  },
  drawer: {
    backgroundColor: "#1E1E1E", 
  },
  drawerContent: {
    flex: 1, 
    backgroundColor: "#1E1E1E", 
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  drawerText: {
    color: "white",
    fontSize: 16,
  },
});

export default NavBar;
