import React, {useEffect, useState} from 'react';
import styles, {shadowOpt} from './styles';
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
