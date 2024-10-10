import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BackgroundImage from '../assets/event_4.png';
import {useNavigation} from '@react-navigation/native';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from '../config/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';

export default function Football() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{
          objectFit: 'cover',
          width: Dimensions.get('window').width,
        }}
        style={styles.imageBackground}
        source={BackgroundImage}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            color={COLORS.white}
            size={20}
          />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: Dimensions.get('window').width,
  },
  imageBackground: {
    flex: 1,
    height: '110%',
    width: Dimensions.get('window').width,
  },
  icon: {
    margin: 15,
    backgroundColor: '#FFCC00',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
