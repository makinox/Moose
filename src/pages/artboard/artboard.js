import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import {Text, FAB} from 'react-native-paper';
import {SubHeader} from '../../components';

export default ({route, navigation}) => {
  console.log(route.params.img);
  // const _goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
      </Appbar.Header> */}
      <SubHeader title="El nombre elegido" />
      <View>
        <Image style={styles.cover} source={{uri: route.params.img}} />
      </View>
      <View>
        <Text>Titulo de la imagen</Text>
        <Text>Subtitulo de la imagen</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <FAB icon="heart-outline" />
          <Text>Favicon</Text>
        </View>
        <View>
          <FAB icon="download" />
          <Text>Descargar</Text>
        </View>
        <View>
          <FAB icon="account-outline" />
          <Text>Perfil</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: 300,
    width: 300,
    borderRadius: 20,
  },
});
