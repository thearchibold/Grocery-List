/**
 * Created by archibold on 12/06/2018.
 */
import React ,{Component} from 'react';
import {View, Text, FlatList,TouchableOpacity, StyleSheet} from 'react-native';
import firebaseApp from './firebaseConnector';
import SpinnerLoader from './sharedcomponents/loadingSpinner';
import {NavigationBar,Heading,Title,Caption} from '@shoutem/ui'
import { Actions } from 'react-native-router-flux';
import GroceryListHeader from './GroceryListHeader'



export default class GroceryListDetails extends  Component{
    constructor(props){
        super(props);
        this.state={
            showloader:true,
            listArray:[]
        }
    }
    componentWillMount(){
        let listArry = [];
        let listLink = firebaseApp.database().ref().child("GroceryListHeader");
        listLink.on('value',(snap) =>{
            snap.forEach((child)=>{

                listArry.push({
                    lid:child.key,
                    title: child.val().mListTitle,
                    date:child.val().mListDate

                })
            })
        });
        this.setState({listArray:listArry, showloader:false})
    }

    render(){

        const Loader = ()=>{
            return(
            <View>
                <Text>{this.props.listid}</Text>
            </View>
            )};

        const renderFlatItems = ()=>{
            return(
            <FlatList

                data={this.state.listArray}

                renderItem={({item}) =>

                    <View style={{margin:10}}>
                        <Text>{item.title}</Text>
                        <Text>{item.date}</Text>
                    </View>
                }
            />
            )
        };
        const header= ()=>{
            return(
                <View style={css.navbar}>
                    <NavigationBar
                        hasHistory={true}
                        navigateBack = {
                            ()=>{
                                Actions.pop()
                            }
                        }
                    />
                </View>
            )
        }

        return(
            <View style={{flex:1,flexDirection:'column', backgroundColor:'white'}}>
                <View style={css.navbar}>
                    <NavigationBar
                        hasHistory={true}
                        navigateBack = {
                            ()=>{
                                Actions.pop()
                            }
                        }
                        centerComponent={ <Title style={{fontWeight:'bold', marginBottom:10}}>{this.props.navtitle}</Title>}
                    />
                </View>

                <FlatList

                    data={this.state.listArray}
                    keyExtractor={item => item.lid}
                    renderItem={({item}) =>

                    <TouchableOpacity activeOpacity={0.5} onPress={
                        ()=>{
                            Actions.details({listid:item.lid, listname:item.title, listdate:item.date})
                        }
                    }>
                        <View style={{margin:10}} >
                            <Text style = {{fontWeight:'bold'}}>{item.title}</Text>
                            <Text>{item.date}</Text>
                        </View>
                    </TouchableOpacity>
                    }

                    ItemSeparatorComponent = {()=>{
                    return (
                    <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#bbb8b8",
                        marginLeft: "4%",
                        marginRight:'4%'
                    }}/>
                    );}}

                />

            </View>
        )
    }
}
const css =StyleSheet.create({
    navbar:{
        height:'10%',
        backgroundColor:'#fffffc',
        borderBottomColor:'#838383',
        borderBottomWidth:5
    }
});

