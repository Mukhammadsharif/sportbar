import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CartFullBackground from '../assets/cart_full_background.png';
import ButtonLight from '../components/ButtonLight';
import {useNavigation} from '@react-navigation/native';

export default function Reserve() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={CartFullBackground}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Забронируйте Ваш столик </Text>
          </View>

          <View style={styles.line} />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Имя'}
              placeholderTextColor={'#636363'}
            />

            <TextInput
              style={styles.input}
              placeholder={'E-mail'}
              placeholderTextColor={'#636363'}
            />

            <TextInput
              style={styles.input}
              placeholder={'Номер телефона'}
              placeholderTextColor={'#636363'}
            />

            <TextInput
              style={styles.input}
              placeholder={'Дата и время'}
              placeholderTextColor={'#636363'}
            />

            <TextInput
              style={styles.input}
              placeholder={'Номер столика'}
              placeholderTextColor={'#636363'}
            />
          </View>

          <ButtonLight
            text={'Забронировать'}
            onPress={() => navigation.navigate('ReserveConfirmationScreen')}
            back={true}
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
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  input: {
    borderColor: '#7BD3FF',
    borderWidth: 2,
    width: '90%',
    paddingLeft: 15,
    fontFamily: 'DaysOne-Regular',
    color: '#636363',
    marginTop: 15,
    height: 45,
    fontSize: 12,
    backgroundColor: '#7BD3FF',
    borderRadius: 25,
  },
});
