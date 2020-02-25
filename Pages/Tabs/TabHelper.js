import React from 'react';
//import react in our code.
import {
  createAppContainer,
} from 'react-navigation';
import {createMaterialTopTabNavigator,
    
} from 'react-navigation-tabs';
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
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#F8F8F8',
          style: {
            backgroundColor: '#FF9800',
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: '#87B56A',
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