import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export default ({image, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image pres style={styles.cover} source={{uri: image}} />
      </View>
    </TouchableOpacity>
  );
};
