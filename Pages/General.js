import React , {Component} from 'react';
import {StyleSheet,View,Text,FlatList,ActivityIndicator} from 'react-native';


export default class General extends Component{
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://newsapi-65f63.firebaseapp.com/fetch-positivenews')
      .then((response) => response.json())
      
      .then((responseJson) => {
      
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
       
      });
  }

  

  render(){

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