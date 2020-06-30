import 'react-native-gesture-handler';
import * as React from 'react';
import {Dashboard, Favorites, Artboard} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppProvider, AppContext} from './src/utils/context';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
    <Stack.Screen name="Art" component={Artboard} options={{headerTransparent: true, headerTitle: ''}} />
  </Stack.Navigator>
);

const TabNav = () => {
  const {col, useCol} = React.useContext(AppContext);
  // console.log(col);
  return (
    <Tab.Navigator shifting={true} initialRouteName="Home" barStyle={{backgroundColor: col}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="home-outline" color={color} size={26} />,
        }}
        listeners={() => ({
          focus: () => {
            useCol('#ffffff');
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
          focus: () => {
            useCol('#d81b60');
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default () => (
  <AppProvider>
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  </AppProvider>
);
