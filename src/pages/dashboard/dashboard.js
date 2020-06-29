import React from 'react';
import {StatusBar, ScrollView, SafeAreaView} from 'react-native';
import {Appbar, withTheme} from 'react-native-paper';
import {SubHeader, DashCard, CardContainer} from '../../components';
import styles from './styles';

const Dashboard = ({navigation}) => {
  const bg1 = '#ffffff';
  const info = [
    {title: 'Primera', subtitle: 'Prime', img: 'https://picsum.photos/id/1056/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1001/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1000/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1013/150/180'},
  ];
  const handleRoute = itemInfo => navigation.navigate('Art', {...itemInfo});

  return (
    <>
      <StatusBar backgroundColor={bg1} barStyle="dark-content" />
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Muse" />
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollSection}>
          <CardContainer>
            <SubHeader title="Mas populares" />
            <ScrollView horizontal={true}>
              {info.map((el, idx) => (
                <DashCard key={idx} image={el.img} handlePress={() => handleRoute(el)} />
              ))}
            </ScrollView>
          </CardContainer>

          <CardContainer>
            <SubHeader title="Mas nuevas" />
            <ScrollView horizontal={true}>
              {info.map((el, idx) => (
                <DashCard key={idx} image={el.img} handlePress={() => handleRoute(el)} />
              ))}
            </ScrollView>
          </CardContainer>

          <CardContainer>
            <SubHeader title="Mas bonitas" />
            <ScrollView horizontal={true}>
              {info.map((el, idx) => (
                <DashCard key={idx} image={el.img} handlePress={() => handleRoute(el)} />
              ))}
            </ScrollView>
          </CardContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default withTheme(Dashboard);
