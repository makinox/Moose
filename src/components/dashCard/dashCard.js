import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

export default ({image, handlePress}) => {
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.card}>
        <Image style={styles.cover} source={{uri: image}} />
      </View>
    </TouchableWithoutFeedback>
  );
};
