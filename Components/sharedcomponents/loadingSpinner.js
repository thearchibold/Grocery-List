/**
 * Created by archibold on 12/06/2018.
 */
import React,{Component} from 'react'
import {View, ActivityIndicator} from 'react-native'

export  default class SpinnerLoader extends  Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='small' color='red' />
            </View>
        )
    }
}