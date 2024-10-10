import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CartFullBackground from '../assets/cart_full_background.png';
import ButtonLight from '../components/ButtonLight';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'react-native-linear-gradient';

export default function Translations() {
  const navigation = useNavigation();
  const translations = [
    {
      name: 'Colombia. Major League 2024',
      type: 'Atletico Nacional \n' + ' Envigado',
      date: '13.10.2024',
      time: '23:00',
    },
    {
      name: 'England. Cup 2024/2025',
      type: 'Biggleswade Town\n' + 'Olfreton Town',
      date: '08.10.2024',
      time: '21:45',
    },
    {
      name: 'Argentina. Major League 2024',
      type: 'Deportivo Riestra \n' + 'Atletico Tucuman',
      date: '18.10.2024 ',
      time: '21:00',
    },
    {
      name: 'Brazil D2',
      type: 'Brusque\n' + 'Ituano',
      date: '15.10.2024 ',
      time: '00:30',
    },
    {
      name: 'Chile. Major League',
      type: 'Kopyapo\n' + 'Everton',
      date: '20.10.2024',
      time: '20:45',
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
            {translations.map((item, index) => (
              <LinearGradient
                key={index}
                colors={['#FFCC00', '#CC5815']}
                style={styles.linearGradient}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.type}>{item.type}</Text>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.date}>{item.date}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </LinearGradient>
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
  },
  name: {
    color: '#CF6310',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'DaysOne-Regular',
    marginTop: 8,
  },
  type: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'DaysOne-Regular',
    marginTop: 5,
  },
  date: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'DaysOne-Regular',
    marginTop: 5,
    paddingLeft: 15,
  },

  time: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'DaysOne-Regular',
    marginTop: 5,
    paddingRight: 15,
  },
});
