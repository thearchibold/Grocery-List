/**
 * Created by archibold on 11/06/2018.
 */
import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native'

export default  class CustomButton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={css.submitButton}>
                <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>{this.props.buttontext}</Text>
            </View>
        )
    }

}
const css = StyleSheet.create({
    submitButton:{
        height:25,
        padding:5,
        borderWidth:1,
        borderColor:'#7f7f7f',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#7f7f7f'
    }
});