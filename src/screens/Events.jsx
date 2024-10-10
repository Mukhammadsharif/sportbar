import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CartFullBackground from '../assets/cart_full_background.png';
import ButtonLight from '../components/ButtonLight';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'react-native-linear-gradient';
import Ball from '../assets/ball_full.png';

export default function Events() {
  const navigation = useNavigation();
  const events = [
    {
      name: 'Мастер-класс\n' + 'по приготовлению пиццы',
      date: '25/10/24',
      url: 'MasterClass',
    },
    {
      name: 'Чемпионат по десткому\n' + 'мини-футболу',
      date: '27/10/24',
      url: 'Champ',
    },
    {
      name: 'Спорт: Легенды\n' + 'и Мифы',
      date: '28/10/24',
      url: 'Legend',
    },
    {
      name: 'Футбольный вечер',
      date: '29/10/24',
      url: 'Football',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={CartFullBackground}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Спортивные трансляции </Text>
          </View>

          <View style={styles.line} />

          <ScrollView showsVerticalScrollIndicator={false}>
            {events.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(item.url)}>
                <Image source={Ball} style={styles.ball} />
                <LinearGradient
                  colors={['#0071A9', '#0071A9']}
                  style={styles.linearGradient}>
                  <Text style={styles.name}>{item.name}</Text>

                  <Text style={styles.date}>{item.date}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ButtonLight
            text={'Забронировать'}
            onPress={() => navigation.navigate('ReserveConfirmationScreen')}
            back={true}
            main={false}
          />
        </View>
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
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: '#FDC600',
    marginBottom: 30,
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
  inputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 70,
    width: '80%',
    height: 100,
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'DaysOne-Regular',
    marginTop: 8,
  },
  date: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'DaysOne-Regular',
    marginTop: 5,
    paddingLeft: 15,
  },
  ball: {
    height: 120,
    objectFit: 'contain',
    position: 'absolute',
    left: '-50%',
    zIndex: 101,
  },
});
