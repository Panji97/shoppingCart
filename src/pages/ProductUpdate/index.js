import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonCustom, Gap, Header, InputCustom} from '../../components';
import axios from 'axios';

const ProductUpdate = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('https://picsum.photos/200/200');
  const [id, setId] = useState({});

  useEffect(() => {
    catchData();
  }, []);

  const catchData = () => {
    const {data} = route.params;
    setId(data);
    setTitle(data.title);
    setDesc(data.description);
    setStock(data.stock);
    setPrice(data.price);
    setImage(data.image);
  };

  const updateData = () => {
    const data = {
      title,
      description,
      stock,
      price,
      image,
    };

    axios.put('http://localhost:8081/products/' + id.id, data).then(res => {
      navigation.navigate('Home');
    });
  };

  return (
    <View style={styles.containerWrapper}>
      <Header title="Product" />
      <View style={styles.container}>
        <InputCustom
          title="Title"
          value={title}
          onChangeText={value => setTitle(value)}
        />
        <InputCustom
          title="Description"
          value={description}
          onChangeText={value => setDesc(value)}
        />
        <InputCustom
          title="Stock"
          value={toString(stock)}
          onChangeText={value => setStock(value)}
          keyboardType="number-pad"
        />
        <InputCustom
          title="Price"
          value={toString(price)}
          onChangeText={value => setPrice(value)}
          keyboardType="number-pad"
        />
        <Gap height={20} />
        <ButtonCustom title="Update" color="green" onPress={updateData} />
      </View>
    </View>
  );
};

export default ProductUpdate;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 2,
  },
  text: {
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
    height: 100,
    width: 100,
  },
});
