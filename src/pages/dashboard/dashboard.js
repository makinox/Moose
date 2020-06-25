import React from 'react';
import {StatusBar, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Appbar, withTheme} from 'react-native-paper';
import {SubHeader, DashCard, CardContainer} from '../../components';

const Dashboard = () => {
  const bg1 = '#ffffff';
  const info = [
    {title: 'Primera', subtitle: 'Prime', img: 'https://picsum.photos/id/1056/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1001/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1000/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1013/150/180'},
  ];

  return (
    <>
      <StatusBar backgroundColor={bg1} barStyle="dark-content" />
      {/* {console.log(theme.colors)} */}
      <Appbar.Header style={{backgroundColor: bg1}}>
        <Appbar.Content title="Muse" />
        {/* <Appbar.Action icon="dots-vertical" onPress={() => {}} /> */}
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollSection}>
          <CardContainer>
            <SubHeader title="Mas populares" />
            <ScrollView horizontal={true}>
              {info.map((el, idx) => (
                <DashCard key={idx} image={el.img} />
              ))}
            </ScrollView>
          </CardContainer>

          <CardContainer>
            <SubHeader title="Mas nuevas" />
            <ScrollView horizontal={true}>
              {info.map((el, idx) => (
                <DashCard key={idx} image={el.img} />
              ))}
            </ScrollView>
          </CardContainer>

          <CardContainer>
            <SubHeader title="Mas bonitas" />
            <ScrollView horizontal={true}>
              {info.map((el, idx) => (
                <DashCard key={idx} image={el.img} />
              ))}
            </ScrollView>
          </CardContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default withTheme(Dashboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollSection: {
    paddingTop: 20,
  },
});
