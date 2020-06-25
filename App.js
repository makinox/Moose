import React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Dashboard from './src/pages/dashboard/dashboard';

const MusicRoute = () => <Dashboard />;
// const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const theme = {
  colors: {
    bg1: '#131830',
  },
};

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'music', title: 'Music', icon: 'music'},
      {key: 'albums', title: 'Albums', icon: 'album'},
      {key: 'recents', title: 'Recents', icon: 'history'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        theme={theme}
        barStyle={{backgroundColor: theme.colors.bg1}}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
