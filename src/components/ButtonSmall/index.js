import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonSmall = ({name, color, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(color)} onPress={onPress}>
      <Icon name={name} size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default ButtonSmall;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 5,
    borderRadius: 3,
  }),
});
