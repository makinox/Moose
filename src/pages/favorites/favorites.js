import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Appbar, withTheme} from 'react-native-paper';
import DashCard from '../../components/dashCard/dashCard';
import styles from '../favorites/styles';

const Favorites = ({navigation}) => {
  const bg1 = '#d81b60';
  const info = [
    {title: 'Primera', subtitle: 'Prime', img: 'https://picsum.photos/id/1056/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1001/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1000/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1013/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1015/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1019/150/180'},
  ];

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor('#d81b60', true);
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
          {info.map((el, idx) => (
            <DashCard key={idx} image={el.img} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default withTheme(Favorites);
