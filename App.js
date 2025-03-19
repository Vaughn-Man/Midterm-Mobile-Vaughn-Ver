import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import ContactScreen from './screens/ContactScreen';
import CartScreen from './screens/CartScreen';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import NavBar from './components/NavBar';
import 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {

const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator options={{ headerShown: false}} >
      <Drawer.Screen
      name="NavBar"
      component={NavBar}
      options={{ headerShown: false}}
      /> 
      <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Drawer.Screen
          name="Shop"
          component={ShopScreen}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactScreen}
        />
        <Drawer.Screen
          name="Cart"
          component={CartScreen}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
        />
        <Drawer.Screen
        name="Logout"
        component={LoginScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
