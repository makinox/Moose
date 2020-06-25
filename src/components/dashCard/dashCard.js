import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import styles from './styles';

export default ({title, subtitle}) => (
  <Card style={styles.card}>
    <Card.Cover
      style={styles.cover}
      source={{uri: 'https://picsum.photos/id/1056/150/180'}}
    />
    <Card.Content>
      <Title style={styles.title}>{title}</Title>
      <Paragraph style={styles.subtitle}>{subtitle}</Paragraph>
    </Card.Content>
  </Card>
);
