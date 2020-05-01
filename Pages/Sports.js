import React , {Component} from 'react';
import {StyleSheet,View,Text,ActivityIndicator} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,Left, Body, Right, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import DataItem from './dataitem';
import Time from './Time'
import Modal  from './modal'




export default class Sports extends Component{
  constructor(props){
    super(props)
    this.state ={ 
      isLoading: true,
      dataSource:null,
      setModalvisible:false,
      modalArticleData:{}
 
  }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  async componentDidMount(){
    try {
      const response = await fetch('https://newsappludwig.herokuapp.com/predict/sports');
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
    // console.log(this.state.dataSource)
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
              return <DataItem onPress={this.handleItemDataOnPress} dataSource ={item}/>
          }}
          keyExtractor={(item, index) => index.toString()}
          />
        </Content>
        <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />

      </Container>
  )
  }
  }