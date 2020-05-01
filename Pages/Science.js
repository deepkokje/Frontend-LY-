import React , {Component} from 'react';
import {StyleSheet,View,Text,FlatList,ActivityIndicator} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,Left, Body, Right, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import DataItem from './dataitem';
import Time from './Time'
import Modal from './modal'





export default class Science extends Component{
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
      const response = await fetch('https://newsappludwig.herokuapp.com/predict/science');
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
    let view = this.state.isLoading ? (  
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
       <Text style={{marginTop: 10}} children="Please Wait.." />
     </View>
     
     ):(
      <List
      dataArray ={this.state.dataSource}
      renderRow={(item)=>{
          return <DataItem onPress ={this.handleItemDataOnPress} dataSource={item}/>
      }}
      keyExtractor={(item, index) => index.toString()}
      />
     )

  return(
      <Container>
      <Content>
         {view}
          
          
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