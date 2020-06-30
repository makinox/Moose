import React, {useEffect} from 'react';
import styles from './styles';
import {AppContext} from '../../utils/context';
import {Appbar, withTheme} from 'react-native-paper';
import {StatusBar, ScrollView, SafeAreaView} from 'react-native';
import {SubHeader, DashCard, CardContainer} from '../../components';
import {getCollections} from '../../utils/api';

const Dashboard = ({navigation}) => {
  const {useCol, infoList} = React.useContext(AppContext);
  const bg1 = '#ffffff';
  const handleRoute = itemInfo => navigation.navigate('Art', {...itemInfo});

  useEffect(() => {
    getCollections();
    const unsubscribe = navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor(bg1, true);
      useCol(bg1);
    });
    return unsubscribe;
  }, [navigation]);

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
              {infoList.map((el, idx) => (
                <DashCard key={idx} image={el.img} handlePress={() => handleRoute(el)} />
              ))}
            </ScrollView>
          </CardContainer>

          <CardContainer>
            <SubHeader title="Mas nuevas" />
            <ScrollView horizontal={true}>
              {infoList.map((el, idx) => (
                <DashCard key={idx} image={el.img} handlePress={() => handleRoute(el)} />
              ))}
            </ScrollView>
          </CardContainer>

          <CardContainer>
            <SubHeader title="Mas bonitas" />
            <ScrollView horizontal={true}>
              {infoList.map((el, idx) => (
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
