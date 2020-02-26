import React,{Component} from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {ActivityIndicator} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Expo from "expo";
import DataItem from '../dataitem';
import Time from '../Time'

export default class General extends Component{
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    
    });
    this.setState({ loading: false });
  }
  async componentDidMount(){
    try {
      const response = await fetch('http://newsappludwig.herokuapp.com/predict/general/positive');
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
    <Container>
      <Content>
        <List
        dataArray ={this.state.dataSource}
        renderRow={(item)=>{
            return <DataItem dataSource ={item}/>
        }}/>
          
        
      </Content>
    </Container>
  )
}


}
