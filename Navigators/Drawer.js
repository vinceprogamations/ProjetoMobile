import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Profile from './components/profile';
// import{Gallery,Artist} from './components/profile';
// import Test from './components/test';


import Login from './Screens/Login';
import Home from './Screens/Home';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



export default function Drawer() {

  
    const Drawer = createDrawerNavigator();
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Home' component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
