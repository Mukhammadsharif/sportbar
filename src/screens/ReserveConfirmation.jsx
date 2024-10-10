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
import BallLeft from '../assets/ball_left.png';
import BallRight from '../assets/ball_right.png';

export default function ReserveConfirmation() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={CartEmptyBackground}>
        <Image source={BallLeft} style={styles.ballLeft} />
        <Image source={BallRight} style={styles.ballRight} />
        <View style={styles.emptyContainer}>
          <Text style={styles.title}>Ваш столик успешно забронирован!</Text>
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
    height: Dimensions.get('window').height / 6,
    backgroundColor: '#0EA5F1',
    position: 'relative',
    borderBottomWidth: 10,
    borderBottomColor: '#FFCC00',
  },
  emptyBall: {
    width: '50%',
    height: '35%',
  },
  title: {
    fontSize: 22,
    fontFamily: 'DaysOne-Regular',
    color: COLORS.black,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  ballLeft: {
    height: 150,
    objectFit: 'contain',
    position: 'absolute',
    left: '-50%',
    top: '30%',
    zIndex: 101,
  },
  ballRight: {
    height: 150,
    objectFit: 'contain',
    position: 'absolute',
    right: '-50%',
    bottom: '30%',
    zIndex: 101,
  },
});
