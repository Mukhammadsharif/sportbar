import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from './GlobalContext';
import {currency} from '../foods/foods';
import {COLORS} from '../config/colors';

export default function CartCard({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [carts, setCarts] = useState([]);

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
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item?.name}</Text>
          <View style={styles.rightFooter}>
            <View style={styles.currency}>
              <Text style={styles.currencyText}>
                {item?.price} {currency}
              </Text>
            </View>

            <View style={styles.countContainer}>
              <TouchableOpacity
                style={[styles.actionContainer, {paddingHorizontal: 10}]}
                onPress={() => {
                  if (
                    carts.find(product => product.name === item.name).count > 1
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
    paddingHorizontal: 15,
  },
  rightFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  currency: {
    backgroundColor: '#0D1771',
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
    paddingHorizontal: 10,
  },
  weight: {
    fontSize: 12,
    fontFamily: 'DaysOne-Regular',
    color: COLORS.black,
    marginTop: 10,
    opacity: 0.5,
  },
  countContainer: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 3,
    backgroundColor: '#0D1771',
    borderRadius: 50,
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
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#0D1771',
    height: 1.5,
    marginTop: 5,
  },
});
