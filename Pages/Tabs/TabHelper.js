import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
  import Positive from './positives'
  import Negative from './negative'

  const TabScreen = createMaterialTopTabNavigator(
    {
        Positive: { screen: Positive },
        Negative: { screen: Negative},
      },
      {

        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
          activeTintColor: ' #00FFFF ',
          inactiveTintColor: '		#00FFFF',
          style: {
            backgroundColor: '#000068',
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: '#87B56A',  //slider
            borderBottomWidth: 2,
          },
        },
      }
  );
  const TabHelper = createStackNavigator({
    TabScreen: {
      screen: TabScreen,
      navigationOptions: {
        header: null,
      },
    },
  });
  export default createAppContainer(TabHelper);