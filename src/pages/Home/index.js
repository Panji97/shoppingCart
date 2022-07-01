import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Content, Footer, Header} from '../../components';
import axios from 'axios';

const Home = ({navigation}) => {
  const [qty, setQty] = useState(null);
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios('http://localhost:8081/products').then(res => {
      setData(res.data);
      setQty(res.data.length);
      let total = 0;
      res.data.forEach(item => {
        total += item.price;
      });
      setPrice(total);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping Cart" />
      <View style={styles.contentWrapper}>
        <ScrollView style={styles.content}>
          {data.map((res, index) => {
            return (
              <Content
                key={index}
                source={{uri: res.image}}
                price={res.price}
                onPress={() => {
                  navigation.navigate('ProductUpdate', {data: res});
                }}
                onDelete={() => {
                  axios
                    .delete('http://localhost:8081/products/' + res.id)
                    .then(() => {
                      getData();
                    });
                }}
              />
            );
          })}
        </ScrollView>
        <Footer
          qty={qty}
          price={price}
          onPress={() => navigation.navigate('Product')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
  contentWrapper: {
    justifyContent: 'space-between',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
});
