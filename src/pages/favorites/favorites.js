import React, {useEffect, useContext} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Appbar, withTheme} from 'react-native-paper';
import DashCard from '../../components/dashCard/dashCard';
import styles from '../favorites/styles';
import {AppContext} from '../../utils/context';

const Favorites = ({navigation}) => {
  const bg1 = '#d81b60';
  const handleRoute = itemInfo => navigation.navigate('Art', {...itemInfo});
  const {fav} = useContext(AppContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor(bg1, true);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Appbar.Header style={{backgroundColor: bg1}}>
        <Appbar.Content title="Favorites" />
      </Appbar.Header>
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.container}>
          {fav.map((el, idx) => (
            <DashCard key={idx} image={el.urls.small} handlePress={() => handleRoute(el)} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default withTheme(Favorites);
