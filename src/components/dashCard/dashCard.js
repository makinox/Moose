import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
// import {colorsFromUrl} from 'react-native-vibrant-color';

export default ({image}) => {
  // const [color, useColor] = useState([]);
  // useEffect(() => {
  //   colorsFromUrl(image).then(colors => useColor(colors));
  // }, [image]);

  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={{uri: image}} />
    </View>
  );
};
