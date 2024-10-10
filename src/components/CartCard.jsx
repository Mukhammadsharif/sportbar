import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from './GlobalContext';
import {currency} from '../foods/foods';
import {COLORS} from '../config/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default function FoodCard({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const [carts, setCarts] = useState([]);

  const add = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const trash = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(cart => cart.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const define = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        await trash(product);
      } else {
        await add(product);
      }
    } else {
      await add(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(cart => cart.name === item.name);
        console.log(cartList, item);
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      } else {
        setAdded(false);
      }
    };

    getProduct();
  }, [refresh]);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  const increment = async () => {
    if (carts?.length) {
      const updatedCarts = carts.map(product => {
        if (product.name === item.name) {
          return {...product, count: product.count + 1}; // Increment count
        }
        return product; // Leave other products unchanged
      });

      // Save the updated cart to AsyncStorage
      await AsyncStorage.setItem('cartList', JSON.stringify(updatedCarts));
      await setRefresh(!refresh); // Trigger refresh
    }
  };

  const decrement = async () => {
    if (carts?.length) {
      const updatedCarts = carts.map(product => {
        if (product.name === item.name && product.count > 0) {
          return {...product, count: product.count - 1}; // Decrease count
        }
        return product; // Leave other products unchanged
      });

      // Save the updated cart to AsyncStorage
      await AsyncStorage.setItem('cartList', JSON.stringify(updatedCarts));
      await setRefresh(!refresh); // Trigger refresh
    }
  };

  const deleteItem = async () => {
    if (carts?.length) {
      const newArray = carts.filter(product => product.name !== item.name);
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image source={item?.image} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.weight}>
            {item?.weight ? item?.weight + 'г' : ''}{' '}
          </Text>
          <View style={styles.rightFooter}>
            <View style={styles.currency}>
              <Text style={styles.currencyText}>
                {item?.price} {currency}
              </Text>
            </View>

            {added ? (
              <View style={styles.countContainer}>
                <TouchableOpacity
                  style={[styles.actionContainer, {paddingHorizontal: 10}]}
                  onPress={() => {
                    if (
                      carts.find(product => product.name === item.name).count >
                      1
                    ) {
                      decrement();
                    } else {
                      deleteItem();
                    }
                  }}>
                  <Text style={styles.action}>-</Text>
                </TouchableOpacity>

                <Text style={styles.count}>
                  {carts.find(product => product.name === item.name)?.count}
                </Text>

                <TouchableOpacity
                  style={styles.actionContainer}
                  onPress={() => increment()}>
                  <Text style={styles.action}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.plusContainer}
                onPress={() => define(item)}>
                <FontAwesomeIcon icon={faPlus} size={14} color="white" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  container: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
  },
  rightContainer: {
    marginLeft: 15,
  },
  rightFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  currency: {
    backgroundColor: '#B25F00',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  currencyText: {
    fontSize: 15,
    fontFamily: 'DaysOne-Regular',
    color: COLORS.white,
  },
  title: {
    fontSize: 13,
    fontFamily: 'DaysOne-Regular',
    color: COLORS.black,
  },
  weight: {
    fontSize: 12,
    fontFamily: 'DaysOne-Regular',
    color: COLORS.black,
    marginTop: 10,
    opacity: 0.5,
  },
  plusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#B25F00',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countContainer: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 3,
    backgroundColor: '#B25F00',
    borderRadius: 12,
  },
  actionContainer: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    fontFamily: 'DaysOne-Regular',
    color: COLORS.white,
    fontSize: 13,
  },
  count: {
    fontFamily: 'DaysOne-Regular',
    color: COLORS.white,
    marginHorizontal: 15,
    fontSize: 13,
  },
  line: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#AFA9A9',
    height: 1,
    marginTop: 5,
  },
});
