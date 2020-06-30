import React from 'react';
import {View} from 'react-native';
import {Title, Avatar, Text} from 'react-native-paper';
import styles from './styles';

export default ({title}) => (
  <View style={styles.subHeader}>
    <Avatar.Text size={50} label="XD" style={styles.subAvatar} />
    <View>
      <Title style={styles.title}>{title}</Title>
      <Text style={styles.subTitle}>Subtitulo</Text>
    </View>
  </View>
);
