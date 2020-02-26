import React,{Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';
import Time from './Time'



export default class DataItem extends Component {

    constructor(props) {
        super(props);
        this.dataSource = props.dataSource;
    }
    render(){
        return(

<ListItem thumbnail >
            <Left>
              <Thumbnail square source={{uri:this.dataSource.urlToImage}}/>
            </Left>
            <Body>
            <Text numberOfLines={2}>{this.dataSource.title}</Text>
                <Text note numberOfLines={2}>{this.dataSource.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{this.dataSource.source.name}</Text>
                    <Time time={this.dataSource.publishedAt}></Time>
                    </View>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        );
    }


            }