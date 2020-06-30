import React, {useState, useEffect} from 'react';
import styles from './styles';
import {SubHeader} from '../../components';
import {Text, FAB} from 'react-native-paper';
import {AppContext} from '../../utils/context';
import {colorsFromUrl} from 'react-native-vibrant-color';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, View, Image, ScrollView, StatusBar} from 'react-native';

export default ({route, navigation}) => {
  const {useCol} = React.useContext(AppContext);
  const [cols, useCols] = useState(['#ffffff', '#ffffff']);
  const updateCols = () => {
    colorsFromUrl(route.params.img).then(colors => {
      useCols([colors.averageColor, colors.dominantColor, colors.vibrantColor, colors.darkVibrantColor]);
      StatusBar.setBackgroundColor(colors.averageColor, true);
      useCol(colors.darkVibrantColor);
    });
  };
  const addFavorite = () => console.log(route.params);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      updateCols();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient colors={cols} style={styles.safe}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <SubHeader title="El nombre elegido" />
          </View>
          <View style={styles.coverContainer}>
            <View style={styles.coverCard}>
              <Image style={styles.cover} source={{uri: route.params.img}} />
            </View>
          </View>
          <View style={styles.artTitleContainer}>
            <Text style={styles.artTitle}>Titulo de la imagen</Text>
            <Text style={styles.artSubtitle}>Subtitulo de la imagen</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.activeButton}>
              <FAB style={styles.activeFab} icon="heart-outline" onPress={addFavorite} />
              <Text style={styles.activeText}>Favicon</Text>
            </View>
            <View style={styles.activeButton}>
              <FAB style={styles.activeFab} icon="download" />
              <Text style={styles.activeText}>Descargar</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};
