import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export default ({children}) => <View style={styles.cardContainer}>{children}</View>;
