import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CartEmptyBackground from '../assets/cart_empty_background.png';
import ButtonLight from '../components/ButtonLight';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../config/colors';
import QRCode from 'react-native-qrcode-svg';
import BallLeft from '../assets/ball_left.png';
import BallRight from '../assets/ball_right.png';

export default function OrderConfirmation() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={CartEmptyBackground}>
        <View style={styles.emptyContainer}>
          <Image source={BallLeft} style={styles.ballLeft} />
          <Image source={BallRight} style={styles.ballRight} />

          <Text style={styles.title}>Спасибо за {'\n'} заказ!</Text>

          <View style={styles.qrContainer}>
            <QRCode
              value={'https://daglavka.com/'}
              size={Dimensions.get('window').width / 3}
              color={COLORS.black}
              backgroundColor={'transparent'}
            />
          </View>
        </View>
        <ButtonLight
          text={'Вернуться'}
          onPress={() => {
            navigation.navigate('Foods');
          }}
        />
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
    height: '110%',
    width: '110%',
    marginLeft: '-5%',
    justifyContent: 'center',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height / 2.2,
    backgroundColor: '#FFCC00',
    position: 'relative',
  },
  emptyBall: {
    width: '50%',
    height: '35%',
  },
  title: {
    fontSize: 38,
    fontFamily: 'DaysOne-Regular',
    color: COLORS.black,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  qrContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  ballLeft: {
    height: 150,
    objectFit: 'contain',
    position: 'absolute',
    left: '-45%',
    top: 0,
  },
  ballRight: {
    height: 150,
    objectFit: 'contain',
    position: 'absolute',
    right: '-45%',
    bottom: 0,
  },
});
