import React ,{Component} from 'react'
import {View, Text, StyleSheet, ListView} from 'react-native'
import {NavigationBar,Heading,Title,Image,Caption} from '@shoutem/ui'
import GroceryMainItem from './grocery_main_item'
import Icon from 'react-native-vector-icons/Ionicons';



export default class HomePage extends Component<Props> {
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
                                    {this.state.currentlist}
                                </Caption>
                    </View>
                    <View style= {{height:'100%', flexDirection:'column' , alignItems:'center', marginTop:100}}>
                        <Icon name="ios-cart-outline" size={60}/>
                        <Caption>
                            NO LIST AVAILABLE NOW
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

});
