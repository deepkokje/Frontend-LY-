import React , {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';


export default class Political extends Component{
    render(){
        return(
        <View style ={styles.MainConatiner} >
             <Text style={{ fontSize: 23 }}> Political Screen</Text>
        </View>)
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