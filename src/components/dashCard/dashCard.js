import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

export default ({image}) => (
  <View style={styles.card}>
    <Image style={styles.cover} source={{uri: image}} />
  </View>
  // <Card style={styles.card}>
  //   <Card.Cover style={styles.cover} source={{uri: 'https://picsum.photos/id/1056/150/180'}} />
  //   <Card.Content>
  //     <Title style={styles.title}>{title}</Title>
  //     <Paragraph style={styles.subtitle}>{subtitle}</Paragraph>
  //   </Card.Content>
  // </Card>
);
