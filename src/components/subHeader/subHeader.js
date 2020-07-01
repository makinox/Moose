import React from 'react';
import {View} from 'react-native';
import {Title, Avatar, Text} from 'react-native-paper';
import styles from './styles';

export default ({title, description, avatar = ''}) => (
  <View style={styles.subHeader}>
    {avatar ? (
      <Avatar.Image size={50} source={{uri: avatar}} style={styles.subAvatar} />
    ) : (
      <Avatar.Text size={50} label="xd" style={styles.subAvatar} />
    )}
    <View>
      {/* {console.log(avatar)} */}
      <Title style={styles.title}>{title}</Title>
      <Text style={styles.subTitle}>{description}</Text>
    </View>
  </View>
);
