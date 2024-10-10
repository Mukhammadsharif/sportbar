import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../config/colors';
import BallImage from '../assets/ball_full.png';
import {useNavigation} from '@react-navigation/native';

export default function ButtonLight({
  text,
  onPress,
  back = false,
  main = true,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {main ? (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Image source={BallImage} style={styles.image} />
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      ) : (
        ''
      )}

      {back ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={styles.text}>Назад</Text>
        </TouchableOpacity>
      ) : (
        ''
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 10,
    position: 'absolute',
    bottom: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 25,
    width: '70%',
    backgroundColor: '#FFCC00',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: 'DaysOne-Regular',
    fontWeight: 'bold',
  },
  image: {
    height: 60,
    objectFit: 'contain',
    position: 'absolute',
    right: -20,
  },
});
