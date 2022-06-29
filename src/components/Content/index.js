import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Dummy} from '../../assets';
import ButtonCustom from '../Button';
import ButtonSmall from '../ButtonSmall';
import Gap from '../Gap';

const Content = ({source, price, onPress, onDelete}) => {
  const [qty, setQty] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity style={styles.imageWrapper} onPress={onPress}>
          <Image source={source} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>Rp. {price}</Text>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <ButtonSmall
          name="minus"
          color="#F44236"
          onPress={() => {
            if (qty === 1) {
              return 1;
            }
            setQty(qty - 1);
          }}
        />
        <Gap width={10} />
        <Text style={styles.text}>{qty}</Text>
        <Gap width={10} />
        <ButtonSmall
          name="plus"
          color="#4FC2F8"
          onPress={() => {
            setQty(qty + 1);
          }}
        />
        <Gap width={10} />
        <ButtonSmall
          name="trash-can-outline"
          color="#F44236"
          onPress={onDelete}
        />
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 5,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  imageWrapper: {
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  priceWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    maxWidth: 100,
    minWidth: 75,
  },
  price: {
    backgroundColor: '#4CB050',
    padding: 2,
    color: '#fff',
  },
});
