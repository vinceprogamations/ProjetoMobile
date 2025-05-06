import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Profile from './components/profile';
// import{Gallery,Artist} from './components/profile';
// import Test from './components/test';

import Login from './Screens/Login';
import Home from './Screens/Home';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


export default function Bottom() {

  const BottomTab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
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
        <BottomTab.Screen name='Login' component={Login}
           options={{
              tabBarIcon: () =>
              <Entypo name="login" size={24} color="black" />
              }}
             />

      </BottomTab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
