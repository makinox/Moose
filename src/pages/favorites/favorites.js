import React from 'react';
import {SafeAreaView} from 'react-native';
import {Title, Appbar, withTheme} from 'react-native-paper';

const Favorites = () => {
  const bg1 = '#d81b60';

  return (
    <>
      {/* <StatusBar backgroundColor={bg1} /> */}
      <Appbar.Header style={{backgroundColor: bg1}}>
        <Appbar.Content title="Muse" />
        {/* <Appbar.Action icon="dots-vertical" onPress={() => {}} /> */}
      </Appbar.Header>
      <SafeAreaView>
        <Title>Favs</Title>
      </SafeAreaView>
    </>
  );
};

export default withTheme(Favorites);
