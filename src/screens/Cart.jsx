import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../components/GlobalContext';
import CartFullBackground from '../assets/cart_full_background.png';
import CartEmptyBackground from '../assets/cart_empty_background.png';
import CartEmptyBall from '../assets/cart_empty_ball.png';
import CartCard from '../components/CartCard';
import {COLORS} from '../config/colors';
import {currency} from '../foods/foods';
import ButtonLight from '../components/ButtonLight';

export default function Cart() {
  const navigation = useNavigation();
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      const list = await AsyncStorage.getItem('cartList');
      if (list?.length) {
        setCart(JSON.parse(list));
      } else {
        setCart(null);
      }
    };

    getCart();
  }, [refresh]);

  useEffect(() => {
    if (cart?.length) {
      let sum = 0;
      cart.forEach(product => {
        sum += product.price * product.count;
      });

      setPrice(sum);
    }
  }, [cart, refresh]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={cart?.length ? CartFullBackground : CartEmptyBackground}>
        {!cart?.length ? (
          <View style={styles.emptyContainer}>
            <Image source={CartEmptyBall} style={styles.emptyBall} />
            <View style={styles.line} />
            <Text style={styles.emptyText}>Ваша корзина пуста!</Text>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Ваш заказ</Text>
            </View>

            <View style={styles.line} />

            <ScrollView>
              <View style={styles.scrollView}>
                {cart.map((item, index) => (
                  <CartCard item={item} key={index} />
                ))}

                <View style={styles.footer}>
                  <Text style={styles.priceTitle}>К оплате:</Text>

                  <View style={styles.currency}>
                    <Text style={styles.currencyText}>
                      <Text style={styles.price}>
                        {price} {currency}
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>

            <ButtonLight
              text={'Подтвердить'}
              onPress={() => navigation.navigate('OrderConfirmationScreen')}
            />
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  imageBackground: {
    flex: 1,
    height: '100%',
    width: '110%',
    marginLeft: '-5%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyBall: {
    width: '50%',
    height: '35%',
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: '#FDC600',
  },
  emptyText: {
    color: '#FDC600',
    marginTop: 10,
    fontSize: 24,
    fontFamily: 'DaysOne-Regular',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#FFEFCF',
    borderRadius: 25,
    width: '70%',
    alignSelf: 'center',
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'DaysOne-Regular',
    color: '#0D1771',
  },
  scrollView: {
    backgroundColor: '#FFEFCF',
    width: '70%',
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: 30,
    paddingBottom: 50,
  },
  priceTitle: {
    textAlign: 'right',
    paddingRight: 20,
    marginTop: 30,
    fontSize: 18,
    fontFamily: 'DaysOne-Regular',
    color: COLORS.black,
  },
  currency: {
    backgroundColor: '#0D1771',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 10,
  },
  currencyText: {
    fontSize: 15,
    fontFamily: 'DaysOne-Regular',
    color: COLORS.white,
  },
  footer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
