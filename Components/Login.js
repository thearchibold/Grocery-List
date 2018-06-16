/**
 * Created by archibold on 16/06/2018.
 */
import React,{Component} from 'react'
import {View, Text, StyleSheet, TextInput,TouchableOpacity,Image} from 'react-native'
import {NavigationBar,Heading,Title,Caption} from '@shoutem/ui'
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux'




export  default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            email:'',
            password:'',
            username:'',
            loginback: css.optionclick,
            registerback:css.notclicked,
            login:login()
        };

    }
    componentWillMount(){
        this.setState({
            title:'Login'
        })

    }


    render(){

        function displayitem(item) {
            return(
                <item/>
            )
        }
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{flex:2, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                    <Image source={require('./images/list.png')} style={{height:50, width:50, marginBottom:20}}/>
                    <Caption style = {{fontWeight: 'bold'}}>Grocery List App</Caption>
                    <Caption style = {{fontSize: 10, marginTop:5}}>powered By Webforge Technologies</Caption>
                </View>
                <View style={{flex:3, backgroundColor:'white'}}>
                    <View style={{height:23, width:'80%', flexDirection:'row',justifyContent:'center', alignItems:'center', borderWidth:0.7,borderColor:'#c0c0c0',borderRadius:6, alignSelf:'center', margin:10}}>

                        <Text style = {this.state.loginback} onPress = {()=>{
                            this.setState({
                                loginback:css.optionclick,
                                registerback:css.notclicked,
                                title:'Login',
                                login:login()
                            })}} >
                          Login
                        </Text>

                        <Text style = {this.state.registerback}  onPress = {()=>{this.setState({
                            registerback:css.rightOption,
                            loginback:css.notclicked,
                            title:'Register',
                            login:register()
                        })}}>
                            Register
                        </Text>
                    </View>

                    <View>
                        {this.state.login}
                    </View>

                </View>

            </View>
        )
    }
}
//views
const register = ()=>{
    return(
        <View style={{height:'100%',width:'80%',alignSelf:'center' ,marginTop:30}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name='ios-contact-outline' size={24} />
                <TextInput
                    underlineColorAndroid='#fff'
                    keyboardType='password'
                    style={{width:'100%', marginLeft:10}}
                    placeholder="Username"/>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name='ios-mail-outline' size={24} />
            <TextInput
                keyboardType='email-address'
                underlineColorAndroid='#fff'
                onChangeText={(value)=> this.setState({email:value})}
                style={{width:'100%',marginLeft:10}}
                       placeholder="Enter email address"/>
            </View>

            <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='ios-lock-outline' size={24} />

                <TextInput
                    keyboardType='visible-password'
                    underlineColorAndroid='#fff'
                    style={{width:'100%', marginLeft:10}}
                       placeholder="Password"/>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress = {()=> {Actions.home()}}>
                <View style={{width:'100%', height:30, borderRadius:30, backgroundColor:'#6b6b6b', marginTop:50, justifyContent:'center'}}>
                    <Caption style = {{fontWeight:'bold', alignSelf:'center',color:'white'}}>Sign Up</Caption>
                </View>
            </TouchableOpacity>
        </View>
    )
};


const login = ()=>{
    return(
        <View style={{height:'100%',width:'80%', alignSelf:'center', marginTop:30}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name='ios-contact-outline' size={24} />
                <TextInput
                    underlineColorAndroid='#fff'
                    keyboardType='password'
                    style={{width:'100%', marginLeft:10}}
                    placeholder="Username"/>
            </View>

            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name='ios-lock-outline' size={24} />

                <TextInput
                    keyboardType='visible-password'
                    underlineColorAndroid='#fff'
                    style={{width:'100%', marginLeft:10}}
                    placeholder="Password"/>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress = {()=> {Actions.home()}}>
            <View style={{width:'100%', height:30, borderRadius:30, backgroundColor:'#6b6b6b', marginTop:50, justifyContent:'center'}}>
                <Caption style = {{fontWeight:'bold', alignSelf:'center',color:'white'}}>Login</Caption>
            </View>
            </TouchableOpacity>
        </View>
    )
};


const css = StyleSheet.create({
    logincontainer:{

    },
    optionclick:{
        height:'100%',
        flex:1,
        backgroundColor:'#6b6b6b',
        color:'#fff',
        alignSelf:'center',
        textAlign:'center',
        borderTopLeftRadius:6,
        borderBottomLeftRadius:6
    },
    rightOption:{
        height:'100%',
        flex:1,
        backgroundColor:'#6b6b6b',
        color:'#fff',
        alignSelf:'center',
        textAlign:'center',
        borderTopRightRadius:6,
        borderBottomRightRadius:6,
    },
    notclicked:{
        height:'100%',
        flex:1,
        backgroundColor:'#ffffff',
        color:'#6b6b6b',
        alignSelf:'center',
        textAlign:'center',
        borderTopRightRadius:6,
        borderBottomRightRadius:6,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0
    }
});

