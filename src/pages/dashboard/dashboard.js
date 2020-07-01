import React, {useEffect, useContext} from 'react';
import styles from './styles';
import {AppContext} from '../../utils/context';
import {Appbar, withTheme} from 'react-native-paper';
import {StatusBar, ScrollView, SafeAreaView} from 'react-native';
import {SubHeader, DashCard, CardContainer} from '../../components';
import {getCollections} from '../../utils/api';

const Dashboard = ({navigation}) => {
  const {useCol, splash, useSplash} = useContext(AppContext);
  const bg1 = '#ffffff';
  const handleRoute = itemInfo => navigation.navigate('Art', {...itemInfo});

  useEffect(() => {
    getCollections().then(res => {
      useSplash(res);
    });
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
          {splash.map((sp, ixx) => (
            <CardContainer key={ixx}>
              {/* {console.log(sp)} */}
              <SubHeader title={sp.title} description={sp.description} avatar={sp.cover.urls.thumb} />
              <ScrollView horizontal={true}>
                {sp.preview.map((el, idx) => (
                  <DashCard key={idx} image={el.urls.small} handlePress={() => handleRoute(el)} />
                ))}
              </ScrollView>
            </CardContainer>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default withTheme(Dashboard);
