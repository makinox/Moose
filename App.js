import React from 'react';
import {StatusBar} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import Dashboard from './src/pages/dashboard/dashboard';
import Favorites from './src/pages/favorites/favorites';

const MusicRoute = () => <Dashboard />;
const AlbumsRoute = () => <Favorites />;
const theme = {
  colors: {
    bg1: '#ffffff',
  },
};

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {badge: false, key: 'home', title: 'Home', color: '#ffffff', icon: 'home-outline'},
      {badge: false, key: 'favorite', title: 'Favorite', color: '#d81b60', icon: 'heart-outline'},
    ],
    barStyle: ['dark-content', 'ligth-content'],
  };

  _handleIndexChange = index => {
    this.setState({index});
    StatusBar.setBackgroundColor(this.state.routes[index].color, true);
    StatusBar.setBarStyle(this.state.barStyle[index]);
  };

  _renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    favorite: AlbumsRoute,
  });

  render() {
    return (
      <BottomNavigation
        theme={theme}
        barStyle={{backgroundColor: this.state.routes[this.state.index].color}}
        // labeled={false}
        shifting={true}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
