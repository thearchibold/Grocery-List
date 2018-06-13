/**
 * Created by archibold on 12/06/2018.
 */
import React ,{Component} from 'react'
import {View, Text, StyleSheet, ListView} from 'react-native'
import {NavigationBar,Heading,Title,Image,Caption} from '@shoutem/ui'
import GroceryMainItem from './grocery_main_item'
import Icon from 'react-native-vector-icons/Ionicons';


export  default class GroceryListHeader extends Component{
    constructor(Props) {
        super();
        this.state={name:"", currentlist:"CURRENT LIST"}
    }
    componentWillMount(){
        this.setState({name:"GROCERY LIST"});

    }

    render(){
        return(
            <View style={styles.pagecontainer}>
                <View style = {styles.navbar}>
                    <NavigationBar
                        centerComponent={  <Title style={{fontWeight:'bold', marginBottom:10}}>{this.state.name}</Title>}
                    />
                </View>
                <View style={{height:1, width:'100%', backgroundColor:'#919191'}}></View>

                <View style={{flex:1, width:'100%'}}>
                    <View style= {{height:20, flexDirection:'row', margin:10, alignItems:'center'}}>
                        <Icon name="ios-alarm-outline" size={20}/>
                        <Caption style={{marginLeft:2}}>
                            {this.props.listid}
                        </Caption>
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