import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foods from './screens/Foods';
import Main from './screens/Main';
import Cart from './screens/Cart';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCartShopping,
  faHome,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from './config/colors';
import OrderConfirmation from './screens/OrderConfirmation';
import Reserve from './screens/Reserve';
import ReserveConfirmation from './screens/ReserveConfirmation';
import Translations from './screens/Translations';
import Events from './screens/Events';
import Football from './screens/Football';
import Legend from './screens/Legend';
import Champ from './screens/Champ';
import MasterClass from './screens/MasterClass';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const {height} = Dimensions.get('window');

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={TabScreen}
          name="TabScreen"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={OrderConfirmation}
          name="OrderConfirmationScreen"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Reserve}
          name="ReserveScreen"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={ReserveConfirmation}
          name="ReserveConfirmationScreen"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Translations}
          name="TranslationsScreen"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Events}
          name="EventsScreen"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Football}
          name="Football"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Legend}
          name="Legend"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={Champ}
          name="Champ"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={MasterClass}
          name="MasterClass"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flexDirection: 'row',
          height: height * 0.1,
          backgroundColor: COLORS.background,
          paddingTop: 10,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Montserrat-Regular',
        },
        tabBarActiveTintColor: '#F34E3A',
        tabBarInactiveTintColor: '#9F9F9F',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Foods"
        component={Foods}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faUtensils}
              color={focused ? COLORS.iconActive : COLORS.white}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faHome}
              color={focused ? COLORS.iconActive : COLORS.white}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faCartShopping}
              color={focused ? COLORS.iconActive : COLORS.white}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});
