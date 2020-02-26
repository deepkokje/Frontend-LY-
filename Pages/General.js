import React , {Component} from 'react';
import {StyleSheet,View,Text,FlatList,ActivityIndicator} from 'react-native';
//import { Container, Header, Content, List, ListItem, Thumbnail,Left, Body, Right, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {DataItem} from './dataitem';


export default class General extends Component{
  constructor(props){
    super(props)
    this.state ={ isLoading: true,
 
  }
  }

  async componentDidMount(){
    try {
      const response = await fetch('https://newsapi-65f63.firebaseapp.com/fetch-positivenews');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson
      }, function () {
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  

  render(){
    console.log(this.state.dataSource)
 
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => <Text>{item.Title}, 
        {item.Description}</Text>}
        keyExtractor={({id}, index) => id}
      />
    </View>
        
    );
  }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center',
      marginTop: 50,
      justifyContent: 'center',
    },
  });