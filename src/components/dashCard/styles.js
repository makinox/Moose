import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {},
  title: {
    color: '#ffffff',
  },
  subtitle: {
    color: '#fdfdfd',
  },
  cover: {
    height: 150,
    width: 170,
    borderRadius: 20,
  },
});

export const shadowOpt = (color = '#000000') => ({
  width: 170,
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
