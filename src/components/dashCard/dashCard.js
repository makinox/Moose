import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {BoxShadow} from 'react-native-shadow';

export default ({image, handlePress}) => {
  return (
    <BoxShadow setting={shadowOpt}>
      <TouchableWithoutFeedback onPress={handlePress} style={{position: 'relative'}}>
        <View style={styles.card}>
          <Image style={styles.cover} source={{uri: image}} />
        </View>
      </TouchableWithoutFeedback>
    </BoxShadow>
  );
};

const shadowOpt = {
  width: 180,
  height: 150,
  color: '#2ea44f',
  margin: 10,
  border: 2,
  radius: 3,
  opacity: 0.2,
  x: 3,
  y: 3,
  style: {margin: 10, borderRadius: 100},
};
