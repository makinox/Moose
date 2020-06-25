import React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import styles from './styles';

export default ({title}) => (
  <View>
    <Title style={styles.subHeader}>{title}</Title>
  </View>
);
