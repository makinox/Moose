import React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Dashboard from './src/pages/dashboard/dashboard';

const MusicRoute = () => <Dashboard />;
// const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
// const RecentsRoute = () => <Text>Recents</Text>;
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
      // {key: 'recents', title: 'Recents', icon: 'history'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    favorite: AlbumsRoute,
    // recents: RecentsRoute,
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
