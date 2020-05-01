import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
  import HealthPositive from './HealthPos'
  import HealthNegative from './HealthNeg'


  const HealthTabScreen = createMaterialTopTabNavigator(
    {
      Positive: { screen: HealthPositive },
       Negative: { screen:  HealthNegative},
      },
      {

        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
          activeTintColor: '#F4F5F3 ',
          inactiveTintColor: '		#00FFFF',
          style: {
            backgroundColor: '#55B8A7',
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: '#FFFEFE ',  //slider
            borderBottomWidth: 2,
          },
        },
      }
  );
  const HealthTabHelper = createStackNavigator({
    HealthTabScreen: {
      screen: HealthTabScreen,
      navigationOptions: {
        header: null,
      },
    },
  });
  export default createAppContainer(HealthTabHelper);