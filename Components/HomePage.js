/**
 * Created by archibold on 12/06/2018.
 */
import React ,{Component} from 'react'
import {View, Text, StyleSheet, FlatList,ListView,Image,TouchableOpacity} from 'react-native'
import {NavigationBar,Heading,Title,Caption} from '@shoutem/ui'
import GroceryMainItem from './grocery_main_item'
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import GroceryListDetails from './GroceryListDetails'
import DashBoardItem from './sharedcomponents/dashboardItem'

import firebaseApp from './firebaseConnector';
import DashBoard from "./dashboarditem";

export  default class HomePage extends Component{
    constructor(props){
        super(props);

    }
    componentWillMount(){


    }


    render(){
        return(
            <View style={styles.pagecontainer}>
                <View style = {styles.navbar}>
                    <NavigationBar
                        centerComponent={  <Title style={{fontWeight:'bold', marginBottom:10}}>GROCERY LIST</Title>}
                    />
                </View>
                <View style={{height:1, width:'100%', backgroundColor:'#919191'}}></View>

                <View style={{width:'100%',height:'100%'}}>


                    <View style= {{height:20, flexDirection:'row', alignItems:'center',marginTop:10, marginStart:10}}>
                        <Image source={require('./images/grid.png')} style={{width: 12, height: 12}} />
                        <Caption style={{marginLeft:10,color:'#038a5e', fontWeight:'bold'}}

                        >
                           MENU ITEMS
                        </Caption>
                    </View>


                    <View style= {{ width:'100%', height:'100%'}}>

                      {/*first row*/}
                        <View style={styles.dashboardRow}>

                            <View style={{flex:1}}>
                            <TouchableOpacity activeOpacity={0.5} style={{flex:1}}
                                  onPress={ () =>{Actions.settings({navtitle:"CURRENT LIST",})}}>
                            <DashBoardItem  imagelink = {require('./images/list.png')} command="Current List"/>
                            </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>
                                <TouchableOpacity activeOpacity={0.5} style={{flex:1}}
                                                  onPress={ () =>{Actions.settings({navtitle:"PAST LIST"})}}>
                                    <DashBoardItem  imagelink = {require('./images/history.png')} command="Past List"/>
                                </TouchableOpacity>
                            </View>

                        </View>

                        {/*second Row*/}
                        <View style={styles.dashboardRow}>

                            <View style={{flex:1}}>
                                <TouchableOpacity activeOpacity={0.5} style={{flex:1}}
                                                  onPress={ () =>{Actions.settings({navtitle:"LIST STATISTICS",})}}>
                                    <DashBoardItem  imagelink = {require('./images/diagram.png')} command="List Statistics"/>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>
                                <TouchableOpacity activeOpacity={0.5} style={{flex:1}}
                                                  onPress={ () =>{Actions.settings({navtitle:"DELETED LIST"})}}>
                                    <DashBoardItem  imagelink = {require('./images/file.png')} command="Deleted List"/>
                                </TouchableOpacity>
                            </View>

                        </View>

                        {/*third row*/}
                        <View style={styles.dashboardRow}>

                            <View style={{flex:1}}>
                                <TouchableOpacity activeOpacity={0.5} style={{flex:1}}
                                                  onPress={ () =>{Actions.settings({navtitle:"LIST STATISTICS",})}}>
                                    <DashBoardItem  imagelink = {require('./images/diagram.png')} command="List Statistics"/>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>
                                <TouchableOpacity activeOpacity={0.5} style={{flex:1}}
                                                  onPress={ () =>{Actions.settings({navtitle:"DELETED LIST"})}}>
                                    <DashBoardItem  imagelink = {require('./images/file.png')} command="Deleted List"/>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pagecontainer:{
        flex:10,
        flexDirection:'column',
        backgroundColor:'white'
    },
    navbar:{
        height:'10%',
        backgroundColor:'#fffffc',
        borderBottomColor:'#838383',
        borderBottomWidth:2
    },
    dashboardRow:{
        flexDirection:'row',
        height:150,
        backgroundColor:'white',
        padding:5,

    },


});