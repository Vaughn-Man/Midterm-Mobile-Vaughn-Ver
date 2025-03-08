import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import ContactScreen from './screens/ContactScreen';
import CartScreen from './screens/CartScreen';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import NavBar from './components/NavBar';

export default function App() {

const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator options={{ headerShown: false}} >
      <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
      />
      <Stack.Screen
      name="NavBar"
      component={NavBar}
      options={{ headerShown: false}}
      /> 
      <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Logout"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
        />
      </Stack.Navigator>
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
