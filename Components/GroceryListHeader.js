/**
 * Created by archibold on 12/06/2018.
 */
import React ,{Component} from 'react'
import {View, Text, StyleSheet, ListView,Button, FlatList,Switch} from 'react-native'
import {NavigationBar,Heading,Title,Image,Caption} from '@shoutem/ui'
import GroceryMainItem from './grocery_main_item'
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux'
import firebaseApp from './firebaseConnector';

let listArray;
let listLink;
export  default class GroceryListHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arraylist:[]
        }
    }
    componentWillMount() {

        let id = this.props.listid;
        listLink  = firebaseApp.database().ref().child("GroceryList").child(id);

        listArray = [];

        listLink.on('value', (snap) => {
            snap.forEach((child) =>{
                listArray.push({
                    itemid:child.key,
                    item: child.val().mItemName,
                    bought: child.val().mItemBought
                });
                /*listArray.push(listitem)*/
            });
        });
        this.setState({arraylist:listArray});


    }

   collectItems = (id)=> {

        listLink  = firebaseApp.database().ref().child("GroceryList").child(id);

        listArray = [];

        listLink.on('value', (snap) => {
            snap.forEach((child) =>{
                listArray.push({
                    itemid:child.key,
                    item: child.val().mItemName,
                    bought: child.val().mItemBought
                });
                /*listArray.push(listitem)*/
            });

        });
        this.setState({arraylist:listArray});

    }


    render(){


        return(
            <View style={styles.pagecontainer}>
                <View style = {styles.navbar}>
                    <NavigationBar
                        leftComponent={<Icon name="ios-arrow-back-outline" size={24} style={{marginLeft:10}} onPress={()=>{Actions.pop()}}/>}
                        centerComponent={
                            <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <Title style={{fontWeight:'bold'}}> {this.props.listname}</Title>
                                <Caption style={{width:'100%'}}>
                                    {this.props.listdate}
                                </Caption>
                            </View>}
                    />
                </View>
                <View style={{height:1, width:'100%', backgroundColor:'#919191'}}></View>

                <View style={{flex:1, width:'100%', marginTop:10}}>
                    <FlatList
                        data = {this.state.arraylist}
                        renderItem = {({item})=>
                            <View style={{margin:10}} >

                                <View style={{justifyContent:'space-between', flexDirection:'row', }}>

                                    <Text style={{fontWeight:'bold'}}>{item.item}</Text>
                                    <Switch

                                        value={item.bought}
                                        onValueChange={(value) =>{
                                            listLink.child(item.itemid).child("mItemBought").set(value);
                                            this.collectItems(this.props.listid);
                                        }}
                                    />
                                </View>
                                <Text style={{fontSize:12}}>{item.bought === true? "Item acquired":"Item not bought" }</Text>
                            </View>
                        }

                        ItemSeparatorComponent = {()=>{
                            return (
                                <View
                                    style={{
                                        height: 1,
                                        width: "100%",
                                        backgroundColor: "#bbb8b8",
                                        marginLeft: "1%",
                                        marginRight:'4%'
                                    }}/>
                            );}}
                    />

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
        borderBottomWidth:5
    },
    titleText:{

    }

    /*
     let key = itemsRef.push().key;
     itemsRef.child(key).set(arr);
     */

    //get the input text

    /* let items = [];
     let itemsRef = firebaseApp.database().ref().child("GroceryListHeader");
     itemsRef.on('value', (snap) => {

     // get children as an array

     snap.forEach((child) => {
     alert(child.val().mListTitle)
     /!* items.push({
     title: child.val().mListTitle
     alert(val.title)
     });*!/
     });
     });
     let val = items[0];

     //items.push(this.state.listitem);

     //reset the input text
     this.setState({listitem:''})
     */

});