import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonCustom from '../Button';

const Footer = ({qty, price, onPress}) => {
  return (
    <View>
      <View style={styles.containerDummy}>
        <Text style={styles.textDummy}>AddDummy</Text>
        <ButtonCustom title="+" color="#4CB050" size={16} onPress={onPress} />
      </View>
      <View style={styles.container}>
        <View style={styles.quantityWrapper}>
          <View style={styles.cart}>
            <Icon name="cart" size={30} color="#000" />
            <Text style={styles.text}>{qty}</Text>
          </View>
          <Text style={styles.text}>Total - Rp. {price}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonClose}>
            <ButtonCustom title="Close" color="red" size={14} />
          </View>
          <View style={styles.buttonCheckout}>
            <ButtonCustom title="Go to checkout" color="#1A73E8" size={14} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  containerDummy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#dcdcdc',
  },
  textDummy: {
    color: '#000',
  },
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cart: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonClose: {
    flex: 1,
  },
  buttonCheckout: {
    flex: 2,
  },
});
