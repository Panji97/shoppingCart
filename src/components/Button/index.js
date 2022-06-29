import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonCustom = ({title, color, onPress, size}) => {
  return (
    <TouchableOpacity style={styles.container(color)} onPress={onPress}>
      <Text style={styles.text(size)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  container: color => ({
    paddingHorizontal: 20,
    backgroundColor: color,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: size => ({
    color: '#fff',
    fontSize: size,
    fontWeight: '300',
  }),
});
