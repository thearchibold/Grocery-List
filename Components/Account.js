/**
 * Created by archibold on 09/06/2018.
 */
import React ,{Component} from 'react';
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationBar,Heading,Title,Image,Caption} from '@shoutem/ui'



export  default class Account extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{height:'10%', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                    <Text style={{fontWeight:'bold'}}>ACCOUNT</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='ios-construct-outline' size={40}/>
                </View>

                <View style={{flex:1,alignItems:'center'}}>
                    <Text>STILL UNDER CONSTRUCTION</Text>
                </View>
            </View>
        )
    }

}