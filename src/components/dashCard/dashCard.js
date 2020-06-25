import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {colorsFromUrl} from 'react-native-vibrant-color';

export default ({image}) => {
  const [color, useColor] = useState([]);
  useEffect(() => {
    colorsFromUrl(image).then(colors => useColor(colors));
  }, [image]);

  return (
    <View
      style={{
        marginTop: 10,
        marginRight: 5,
        marginLeft: 20,
        marginBottom: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: color.dominantColor,
      }}>
      <Image style={styles.cover} source={{uri: image}} />
    </View>
  );
};
