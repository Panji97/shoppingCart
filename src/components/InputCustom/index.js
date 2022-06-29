import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputCustom = ({
  title,
  value,
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputCustom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 5,
  },
  text: {
    color: '#000',
    fontWeight: '400',
  },
  input: {
    borderWidth: 1,
    color: '#000',
  },
});
