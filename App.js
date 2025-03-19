import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import NavBar from './components/NavBar';
import 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';

export default function App() {

const Drawer = createDrawerNavigator();

return (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <NavBar />
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
