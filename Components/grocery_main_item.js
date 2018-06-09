import React ,{Component} from 'react'
import {View, Text, StyleSheet, ListView, TouchableOpacity} from 'react-native'
import {Icon,Heading,Title,Image,Caption} from '@shoutem/ui'

export default class GroceryMainItem extends Component<props>{
  constructor(props){
    super(props);

  }
  render(){
    return(


      <View style={styles.container}>
            <Title>{this.props.listname}</Title>
            <Caption>{this.props.listdate}</Caption>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    height:30,
    flexDirection:'column',

  }
})
