import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo';
import { createStackNavigator } from '@react-navigation/stack';



import Login from './Screens/Login';
import Home from './Screens/Home';
import Feed from './Screens/feed';
import Count from './Screens/count';
import Product from './Screens/Product';
import CardProduct from './Screens/cardProduct';

function BottomTabs(){
  
  
  const BottomTab = createBottomTabNavigator();

  return(
  <BottomTab.Navigator
  screenOptions={{
   headerStyle :{backgroundColor:'#f99'},
   headerTintColor:'white',
   tabBarActiveBackgroundColor: '#da70d6'
  }}
  >


    <BottomTab.Screen name='feed' component={Feed}
    options={{
      tabBarIcon: () =>
        <Entypo name="login" size={24} color="black" />
    }}
    />
    <BottomTab.Screen name='Home' component={Home}
       options={{
          tabBarIcon: () =>
          <Entypo name="home" size={24} color="black" />
          }}
         />
    <BottomTab.Screen name='count' component={Count}
       options={{
          tabBarIcon: () =>
          <Entypo name="home" size={24} color="black" />
          }}
         />


<BottomTab.Screen name='Product' component={Product}
    options={{
      tabBarIcon: () =>
        <Entypo name="Product" size={24} color="black" />
    }}
    />
  </BottomTab.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();
    
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaLogin' component={Login}/>
        <Stack.Screen options={{headerShown:false}} name='Home' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
