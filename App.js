import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {Dashboard, Favorites, Artboard} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const colorList = [{color: '#ffffff', content: 'dark-content'}, {color: '#d81b60', content: 'ligth-content'}];
const Home = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
    <Stack.Screen name="Art" component={Artboard} />
  </Stack.Navigator>
);

export default () => {
  const [index, useIndex] = React.useState(0);
  return (
    <NavigationContainer>
      <Tab.Navigator shifting={true} initialRouteName="Home" barStyle={{backgroundColor: colorList[index].color}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="home-outline" color={color} size={26} />,
          }}
          listeners={() => ({
            tabPress: e => {
              useIndex(0);
              StatusBar.setBackgroundColor(colorList[0].color, true);
              StatusBar.setBarStyle(colorList[0].content);
            },
          })}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="heart-outline" color={color} size={26} />,
          }}
          listeners={() => ({
            tabPress: e => {
              useIndex(1);
              StatusBar.setBackgroundColor(colorList[1].color, true);
              StatusBar.setBarStyle(colorList[1].content);
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
