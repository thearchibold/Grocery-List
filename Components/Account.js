/**
 * Created by archibold on 09/06/2018.
 */
import React ,{Component} from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationBar,Heading,Title,Image,Caption} from '@shoutem/ui'



export  default class Account extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{height:'10%', justifyContent:'space-between', alignItems:'center', backgroundColor:'white',flexDirection:'row', padding:5}}>
                       <Text style={{fontWeight:'bold'}}>ACCOUNT</Text>
                       <TouchableOpacity>
                            <Text>Edit Details</Text>
                       </TouchableOpacity>

                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:50}}>
                    <Image style={{height:150, width:150, borderRadius:75}} source={require('./images/maame.jpg')} />
                </View>

                <View style={{flex:2,backgroundColor:'white', padding:10}}>
                    <View style={{flexDirection:'row', height:'10%'}}>
                        <Icon name="" size={20}/>
                        <Caption style={{color:'#034e36', fontWeight:'bold'}}>Personal Information</Caption>
                    </View>

                    <View style={{margin:10}}>
                        <View style={{margin:5, flexDirection:'row',justifyContent:'space-between'}}>
                            <Caption style = {{color:'#c0c0c0'}}>Name</Caption>
                            <Caption style = {{color:'#565656', fontWeight:'bold'}}>Archibold Bernard</Caption>
                        </View>

                        <View style={{margin:5, backgroundColor:'#d9d9d9', height:1}}>
                            {/*line sepatator*/}
                        </View>

                        <View style={{margin:5, flexDirection:'row',justifyContent:'space-between'}}>
                            <Caption style = {{color:'#C0C0C0'}}>Email</Caption>
                            <Caption style = {{color:'#565656', fontWeight:'bold'}}>e.archibold@webforgegh.com</Caption>
                        </View>

                        <View style={{margin:5, backgroundColor:'#d9d9d9', height:1}}>
                            {/*line sepatator*/}
                        </View>

                        <View style={{margin:5, flexDirection:'row',justifyContent:'space-between'}}>
                            <Caption style = {{color:'#C0C0C0'}}>Gender</Caption>
                            <Caption style = {{color:'#565656', fontWeight:'bold'}}>Male</Caption>
                        </View>
                        <View style={{margin:5, backgroundColor:'#d9d9d9', height:1}}>
                            {/*line sepatator*/}
                        </View>

                        <View style={{margin:5, flexDirection:'row',justifyContent:'space-between'}}>
                            <Caption style = {{color:'#C0C0C0'}}>Phone Number</Caption>
                            <Caption style = {{color:'#565656', fontWeight:'bold'}}>0271898933</Caption>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}
const css = StyleSheet.create({
   profileimage:{
       height:50,
       width:50,
       borderWidth:100
   }
});