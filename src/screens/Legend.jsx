import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BackgroundImage from '../assets/event_3.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../config/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';

export default function Legend() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{objectFit: 'cover'}}
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
  },
  imageBackground: {
    flex: 1,
    height: '110%',
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
