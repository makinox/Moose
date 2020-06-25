import React from 'react';
import {StatusBar, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Appbar, withTheme, Card, Title, Paragraph} from 'react-native-paper';

const DashCard = ({title, subtitle}) => (
  <Card style={styles.card}>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
    </Card.Content>
  </Card>
);

const Dashboard = ({theme}) => {
  const bg1 = '#131830';
  const info = [
    {title: 'Primera', subtitle: 'Prime', img: 'img.com'},
    {title: 'Senconda', subtitle: 'Second', img: 'img.com'},
    {title: 'Senconda', subtitle: 'Second', img: 'img.com'},
    {title: 'Senconda', subtitle: 'Second', img: 'img.com'},
  ];

  return (
    <>
      <StatusBar backgroundColor={bg1} />
      {/* {console.log(theme.colors)} */}
      <Appbar.Header style={{backgroundColor: bg1}}>
        <Appbar.Content title="Muse" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <ScrollView horizontal={true}>
          {info.map((el, idx) => (
            <DashCard key={idx} title={el.title} subtitle={el.subtitle} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default withTheme(Dashboard);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  card: {
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
  },
});
