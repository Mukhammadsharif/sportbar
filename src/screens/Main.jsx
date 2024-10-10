import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import MainBackgroundImage from '../assets/main_background.png';
import MainHeaderImage from '../assets/main_header.png';
import Logo from '../assets/logo_bg.png';
import {LinearGradient} from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
  const navigation = useNavigation();

  const urls = [
    {name: 'Меню', screen: 'Foods'},
    {name: 'Бронь столика', screen: 'ReserveScreen'},
    {name: 'Трансляции', screen: 'TranslationsScreen'},
    {name: 'События', screen: 'EventsScreen'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.container} source={MainBackgroundImage}>
        <View style={styles.header}>
          <ImageBackground source={MainHeaderImage} style={styles.headerImage}>
            <Image source={Logo} style={styles.logo} />
          </ImageBackground>
        </View>

        <ScrollView contentContainerStyle={styles.scrollView}>
          {urls.map((url, index) => (
            <LinearGradient
              key={index}
              colors={['#77D8FF', '#05ACEE']}
              style={styles.linearGradient}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(url.screen)}>
                <Text style={styles.text}>{url?.name}</Text>
              </TouchableOpacity>
            </LinearGradient>
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: Dimensions.get('window').height / 5.5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    height: 60,
    borderColor: '#FFCC00',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#0D1771',
    fontSize: 22,
    fontFamily: 'DaysOne-Regular',
    fontWeight: 'bold',
  },
});
