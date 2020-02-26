import React,{Component} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

// import screens 
import Business from './Pages/Businesss';
import General from './Pages/General';
import Home from './Pages/Home';
import Political from './Pages/Political';
import Sports from './Pages/Sports';
import TabHelper from './Pages/Tabs/TabHelper'
// import Tech from './Pages/Tech';



class NavigationDrawerStructure extends Component {
  
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  First:{
    screen:TabHelper,
    navigationOptions:({navigation})=>({
      title:'   NewsApp   ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    })
  }
});

const Screen2_StackNavigator = createStackNavigator({
 Second:{
    screen:General,
    navigationOptions:({navigation})=>({
      title:'  General   ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    })
  }
});

const Screen3_StackNavigator = createStackNavigator({
  Third:{
     screen:Business,
     navigationOptions:({navigation})=>({
       title:'  Business   ',
       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
       headerStyle: {
         backgroundColor: '#FF9800',
       },
       headerTintColor: '#fff',
     })
   }
 });

 const Screen4_StackNavigator = createStackNavigator({
  Fourth:{
     screen:Political,
     navigationOptions:({navigation})=>({
       title:'  Political   ',
       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
       headerStyle: {
         backgroundColor: '#FF9800',
       },
       headerTintColor: '#fff',
     })
   }
 });
 
 const Screen5_StackNavigator = createStackNavigator({
  Fifth:{
     screen:Sports,
     navigationOptions:({navigation})=>({
       title:'  Sports   ',
       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
       headerStyle: {
         backgroundColor: '#FF9800',
       },
       headerTintColor: '#fff',
     })
   }
 });
 


const DrawerNavigator = createDrawerNavigator({
  
  Home:{
    screen:FirstActivity_StackNavigator,
    navigationOptions:{
      drawerLabel:'  Home   ',
    },
  } ,

  General:{
    screen:Screen2_StackNavigator,
    navigationOptions:{
      drawerLabel:'  General  '
    },
  },

  Business:{
    screen:Screen3_StackNavigator,
    navigationOptions:{
      drawerLabel:'  Business  '
    },
  },

  Political:{
    screen:Screen4_StackNavigator,
    navigationOptions:{
      drawerLabel:'  Political  '
    },
  },

  Sports:{
    screen:Screen5_StackNavigator,
    navigationOptions:{
      drawerLabel:'  Sports '
    },
  },



});
  

export default createAppContainer(DrawerNavigator);
