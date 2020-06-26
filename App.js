import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import Dashboard from './src/pages/dashboard/dashboard';
import Favorites from './src/pages/favorites/favorites';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const DashboardRoute = () => <Dashboard />;
const FavsRoute = () => <Favorites />;
const colorList = [{color: '#ffffff', content: 'dark-content'}, {color: '#d81b60', content: 'ligth-content'}];

export default () => {
  const [index, useIndex] = React.useState(0);
  return (
    <NavigationContainer>
      <Tab.Navigator shifting={true} initialRouteName="Home" barStyle={{backgroundColor: colorList[index].color}}>
        <Tab.Screen
          name="Home"
          component={DashboardRoute}
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
          name="Settings"
          component={FavsRoute}
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

// class MyComponent extends React.Component {
//   state = {
//     index: 0,
//     routes: [
//       {badge: false, key: 'home', title: 'Home', color: '#ffffff', icon: 'home-outline'},
//       {badge: false, key: 'favorite', title: 'Favorite', color: '#d81b60', icon: 'heart-outline'},
//     ],
//     barStyle: ['dark-content', 'ligth-content'],
//   };

//   _handleIndexChange = index => {
//     this.setState({index});
//     StatusBar.setBackgroundColor(this.state.routes[index].color, true);
//     StatusBar.setBarStyle(this.state.barStyle[index]);
//   };

//   _renderScene = BottomNavigation.SceneMap({
//     home: MusicRoute,
//     favorite: AlbumsRoute,
//   });

//   render() {
//     return (
//       <BottomNavigation
//         theme={theme}
//         barStyle={{backgroundColor: this.state.routes[this.state.index].color}}
//         // labeled={false}
//         shifting={true}
//         navigationState={this.state}
//         onIndexChange={this._handleIndexChange}
//         renderScene={this._renderScene}
//       />
//     );
//   }
// }
