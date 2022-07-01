import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {ButtonCustom, Header} from '../../components';
import axios from 'axios';

const Product = ({navigation}) => {
  const [title] = useState('Orson');
  const [description] = useState('orson is good');
  const [stock] = useState(100);
  const [price] = useState(10000);
  const [image] = useState('https://picsum.photos/200/200');
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const addCart = () => {
    const data = {
      title,
      description,
      stock,
      price,
      image,
    };

    axios.post('http://localhost:8081/products', data).then(() => {
      navigation.navigate('Home');
    });
  };

  const getData = () => {
    axios.get('http://localhost:8081/products').then(res => {
      setData(res.data);
    });
  };

  return (
    <View style={styles.containerWrapper}>
      <Header title="Product" />
      <ScrollView style={styles.container}>
        {data.map((res, index) => {
          return (
            <View style={styles.content} key={index}>
              <Image source={{uri: res.image}} style={styles.image} />
              <Text style={styles.title}>{res.title}</Text>
              <Text style={styles.description}>{res.description}</Text>
              <View style={styles.textWrapper}>
                <Text style={styles.description}>Stock {res.stock}</Text>
                <Text style={styles.description}>Rp. {res.price}</Text>
              </View>
              <ButtonCustom
                title="Add to Cart"
                color="green"
                onPress={addCart}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    width: 250,
    alignSelf: 'center',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
  },
  description: {
    color: '#000',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    height: 100,
    width: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: 250,
  },
});
