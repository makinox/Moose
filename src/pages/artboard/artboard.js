import React, {useState, useEffect} from 'react';
import styles from './styles';
import {SubHeader} from '../../components';
import {Text, FAB} from 'react-native-paper';
import {AppContext} from '../../utils/context';
import {downloadImages} from '../../utils/download';
import {colorsFromUrl} from 'react-native-vibrant-color';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, View, Image, ScrollView, StatusBar} from 'react-native';

export default ({route, navigation}) => {
  const {useCol, fav, addFav, deleteFav} = React.useContext(AppContext);
  const [cols, useCols] = useState(['#ffffff', '#ffffff']);
  const [voted, useVoted] = useState(false);
  const updateCols = () => {
    colorsFromUrl(route.params.urls.thumb).then(colors => {
      // useCols([colors.averageColor, colors.dominantColor, colors.vibrantColor, colors.darkVibrantColor]);
      useCols(['#ffffff', colors.vibrantColor]);
      StatusBar.setBackgroundColor('#ffffff', true);
      useCol(colors.vibrantColor);
    });
  };
  const addFavorite = () => {
    addFav(route.params);
    useVoted(true);
  };
  const deleteFavorite = () => {
    deleteFav(route.params);
    useVoted(false);
  };
  const favState = () => {
    // console.log(route.params);
    const result = fav.filter(el => el.id === route.params.id);
    if (result.length) {
      useVoted(true);
    } else {
      useVoted(false);
    }
  };
  useEffect(() => {
    favState();
    const unsubscribe = navigation.addListener('focus', () => {
      updateCols();
    });

    return unsubscribe;
  }, [navigation]);
  const downloadImage = () => {
    downloadImages(route.params.urls.full);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient colors={cols} style={styles.safe} start={{x: 0.0, y: 0.0}} end={{x: 0.1, y: 1}}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <SubHeader title={route.params.id} />
          </View>
          <View style={styles.coverContainer}>
            <View style={styles.coverCard}>
              <Image style={styles.cover} source={{uri: route.params.urls.small}} />
            </View>
          </View>
          <View style={styles.artTitleContainer}>
            <Text style={styles.artTitle}>Titulo de la imagen</Text>
            <Text style={styles.artSubtitle}>Subtitulo de la imagen</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.activeButton}>
              {voted ? (
                <FAB style={styles.activeFab} icon="heart-outline" color="red" onPress={deleteFavorite} />
              ) : (
                <FAB style={styles.activeFab} icon="heart-outline" onPress={addFavorite} />
              )}
              <Text style={styles.activeText}>Favicon</Text>
            </View>
            <View style={styles.activeButton}>
              <FAB style={styles.activeFab} icon="download" onPress={downloadImage} />
              <Text style={styles.activeText}>Descargar</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};
