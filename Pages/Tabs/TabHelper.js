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
  const TabHelper = createStackNavigator({
    TabScreen: {
      screen: TabScreen,
      navigationOptions: {
        header: null,
      },
    },
  });
  export default createAppContainer(TabHelper);