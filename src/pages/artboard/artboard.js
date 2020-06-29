import React from 'react';
import {SafeAreaView, View, Image, ScrollView} from 'react-native';
import {Text, FAB} from 'react-native-paper';
import {SubHeader} from '../../components';
import styles from './styles';

export default ({route}) => {
  console.log(route.params.img);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <SubHeader title="El nombre elegido" />
        </View>
        <View style={styles.coverContainer}>
          <Image style={styles.cover} source={{uri: route.params.img}} />
        </View>
        <View style={styles.artTitleContainer}>
          <Text style={styles.artTitle}>Titulo de la imagen</Text>
          <Text style={styles.artSubtitle}>Subtitulo de la imagen</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.activeButton}>
            <FAB icon="heart-outline" />
            <Text style={styles.activeText}>Favicon</Text>
          </View>
          <View style={styles.activeButton}>
            <FAB icon="download" />
            <Text style={styles.activeText}>Descargar</Text>
          </View>
          <View style={styles.activeButton}>
            <FAB icon="account-outline" />
            <Text style={styles.activeText}>Perfil</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
