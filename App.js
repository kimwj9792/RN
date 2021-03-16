import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from './screens/Search'; 
import Home from './screens/Home'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#00aaff' />
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'home') {
              iconName = 'ios-home';
            } else if (route.name === 'search') {
              iconName = 'ios-search';
            } 
            return <Icon name={iconName} size={25} color={color} />;
          }
        })}
        tabBarOptions = {{
          activeTintColor: '#00aaff',
          inactiveTintColor: 'gray',
          activeBackgroundColor: 'white',
          inactiveBackgroundColor: 'white',
        }}
        >
          <Tab.Screen name='home' component={Home} 
            initialParams={{city: 'seoul'}}
          />
          <Tab.Screen name='search' component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
