import React, {useEffect, useState} from 'react';
import styles from './styles';
import {BoxShadow} from 'react-native-shadow';
import {colorsFromUrl} from 'react-native-vibrant-color';
import {View, Image, TouchableWithoutFeedback} from 'react-native';

export default ({image, handlePress}) => {
  const [col, useCol] = useState('#000000');
  const updateCols = () => {
    colorsFromUrl(image).then(colors => {
      // console.log(colors);
      useCol(colors.vibrantColor);
    });
  };
  useEffect(() => {
    updateCols();
  }, []);

  return (
    <BoxShadow setting={shadowOpt(col)}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.card}>
          <Image style={styles.cover} source={{uri: image}} />
        </View>
      </TouchableWithoutFeedback>
    </BoxShadow>
  );
};

const shadowOpt = (color = '#000000') => ({
  width: 180,
  height: 150,
  color,
  margin: 2,
  border: 10,
  radius: 20,
  opacity: 0.13,
  x: 1,
  y: 10,
  style: {margin: 15},
});
