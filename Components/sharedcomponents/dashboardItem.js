/**
 * Created by archibold on 13/06/2018.
 */
import React,{Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'



export default  class DashBoardItem extends Component<props>{
    constructor(props) {
        super(props);

    }

    render (){
        const {imagelink} = this.props;
        return(
        <View style={css.dashboardItem}>
           <Image source={imagelink} style={{height:30, width:30}}/>
            <Text style={css.commandStyle}>{this.props.command}</Text>
        </View>
        )
    }
}
const css = StyleSheet.create({
    dashboardItem:{
        flex:1,
        height:'100%',
        borderColor:'#7e7c7e',
        borderWidth:1,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    commandStyle:{
        fontWeight:'bold',
        marginTop:5
    }

});