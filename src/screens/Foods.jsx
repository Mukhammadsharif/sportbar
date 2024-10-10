import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../config/colors';
import {foods} from '../foods/foods';
import FoodCard from '../components/FoodCard';
import {GlobalContext} from '../components/GlobalContext';

export default function Foods() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const {refresh, setRefresh} = useContext(GlobalContext);

  const categories = [
    {name: 'Салаты', value: 0},
    {name: 'Первые блюда', value: 1},
    {name: 'Десерты', value: 2},
    {name: 'Напитки', value: 3},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={
              selectedCategory === category?.value
                ? styles.activeCategory
                : styles.inactiveCategory
            }
            onPress={() => {
              setSelectedCategory(category?.value);
              setRefresh(!refresh);
            }}>
            <Text
              style={
                selectedCategory === category?.value
                  ? styles.activeCategoryText
                  : styles.inActiveCategoryText
              }>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {foods[selectedCategory].map((item, index) => (
          <FoodCard item={item} key={index} />
        ))}
      </ScrollView>
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
    backgroundColor: '#FFEFCF',
  },
  scrollView: {
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 200,
  },
  header: {
    height: Dimensions.get('window').height / 7.5,
    backgroundColor: COLORS.background,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  activeCategory: {
    backgroundColor: '#FFCC00',
    width: '45%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 25,
    borderColor: '#B25F00',
    borderWidth: 2,
  },
  inactiveCategory: {
    backgroundColor: '#B25F00',
    width: '45%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 25,
  },
  activeCategoryText: {
    color: COLORS.black,
    fontSize: 13,
    fontFamily: 'DaysOne-Regular',
    fontWeight: 'bold',
  },
  inActiveCategoryText: {
    color: COLORS.white,
    fontSize: 13,
    fontFamily: 'DaysOne-Regular',
    fontWeight: 'bold',
  },
});
