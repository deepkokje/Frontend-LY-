import React from 'react';
//import react in our code.
import { Text, View } from 'react-native';
// import all basic components

export default class Negative extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home page from pages > TabPages</Text>
      </View>
    );
  }
}
