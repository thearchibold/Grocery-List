/**
 * Created by archibold on 08/06/2018.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ListView} from  'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebaseApp from './firebaseConnector';
import {NavigationBar,Heading,Title,Image,Caption,Button} from '@shoutem/ui'
import CustomButton from './sharedcomponents/Button'
import ListItem from './sharedcomponents/create_list_item'
import Swipeout from 'react-native-swipeout';



let itemsRef = firebaseApp.database().ref().child("GroceryList");
let arr = [];
let count = 0;


export default  class CreateList extends Component{
    constructor(props){
        super(props);
        // working on the list
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            listitem:'',
            listname:null,
            listdate:'',
            itemCount:0,
            mItemBought:'true',
            dataSource  : ds.cloneWithRows(arr)
        }
    }

    componentWillMount(){
        let daysString = ["Sunday","Monday","Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
        let monthStrnig = ["January", "February","March", "April", "May","June", "July","August", "September", "October", "November", "December"]
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        var day = new Date().getDay();
        let today = daysString[day]+", "+date+" "+monthStrnig[month]+" "+year;
        this.setState({listdate:today})
    }


    render(){
        var items = [];

        const swipeSetting = {
            rwId: this.props.mid,
            arr: this.props.itemarray,
            autoClose:true,
            onClose:(rowId, direction)=>{

            },
            onOpen:(rowId, direction)=>{

            },
            right:[{
                onPress: (arr, rwId) => {
                    delete arr[rwId]
                },
                text:'Remove', type:'delete'
            }
            ]
        };


        return(
            <View style={css.container}>
                <View style={css.navHeader}>
                    <View style={{flex:8.5}}>
                        <TextInput
                            value={this.state.listitem}
                            underlineColorAndroid='#fff'
                            keyboardType='default'
                            blurOnSubmit={true}
                            placeholder="Add item"
                            onChangeText={(value)=>this.setState({listitem:value})}
                        />
                    </View>
                    <View style={{flex:1.5, padding:10}}>
                        <TouchableOpacity activeOpacity={0.5}
                                          onPress={()=>{
                                              if(this.state.listitem) {
                                                  let index = arr.length;

                                                  let postitem = ({
                                                      mId:index,
                                                      mItemName: this.state.listitem,
                                                      mItemBought: false
                                                  });
                                                  arr.push(postitem);

                                                  this.setState(
                                                      {dataSource: this.state.dataSource.cloneWithRows(arr)}
                                                  );
                                                  this.setState({listitem: ''});
                                                  count+=1;
                                              }

                        }}>

                                <CustomButton buttontext = "ADD"/>

                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View style={{
                        height:50, width:'100%',
                        flexDirection:'row',
                        justifyContent:'center',
                        marginLeft:10,marginRight:5,
                        borderBottomWidth:1,
                        borderBottomColor:'#dce0df'}}>
                        <TextInput
                            style={{flex:9, maginLeft:6}}
                                underlineColorAndroid='#fff'
                               placeholder='Name of the list'
                               value={this.state.listname}
                               onChangeText={(value)=>{this.setState({listname:value})}}
                        />
                        <Icon name='ios-folder-outline'
                              size={25}
                              style={{flex:1,
                                  justifyContent:'center',
                                  position:'relative',
                                  alignSelf:'center'}}/>
                    </View>
                </View>


                <View style={{
                    flexDirection:'column',
                    height:40, width:'100%',
                    marginLeft:10,
                    marginTop:5,
                    marginRight:5}}>

                    <Text  style={{color:'#7a0005',fontSize:10}}>When will you shop with this list? <Text style={{color:'#a6a6a6'}}>Click  <Icon name="md-calendar" size={10}/>  to change date</Text></Text>

                        <View style={{height:50, width:'100%',flexDirection:'row', justifyContent:'space-between',marginTop:-10}}>
                            <Text style={{alignSelf:'center' , flex:9}}>{this.state.listdate}</Text>
                            <Icon name='md-calendar' size={25}   style={{ flex:1,alignSelf:'center'}}/>
                         </View>
                </View>
                <View style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#939695',
                    marginTop: 10}}>
                </View>


                {/*listview items*/}
                <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', margin:10}}>
                    <Caption>ITEMS IN LIST</Caption>

                    <TouchableOpacity activeOpacity={0.4}  onPress={()=> {

                           if(this.state.listname === null){
                         alert('Please give your list a name')
                         }else if(arr.length === 0){
                         alert('Cannot submit empty list')
                         }else{

                             let headerlink = firebaseApp.database().ref().child("GroceryListHeader");
                             const key = headerlink.push().key;
                             let listHeader = {
                                 mListTitle:this.state.listname,
                                 mListDate:"This is the list date",
                                 listId:key
                             };
                               headerlink.child(key).set(listHeader);
                               itemsRef.child(key).set(arr);


                         }
                    }
                    }>
                   <CustomButton buttontext="SUBMIT"/>
                    </TouchableOpacity>
                </View>
                <View   style={{paddingLeft:10}}>

                    <ListView

                        dataSource={this.state.dataSource}
                        renderRow={(rowData, sectionId)=>

                        <Swipeout {...{
                            autoClose:true,
                            onClose:(rowId, direction)=>{

                            },
                            onOpen:(rowId, direction)=>{

                            },
                            right:[{
                                onPress: () => {
                                    delete arr[rowData.mId];
                                    this.setState(
                                        {dataSource: this.state.dataSource.cloneWithRows(arr)}

                                    );                                },
                                text:'Remove', type:'delete'
                            }
                            ]
                        }
                        }

                        >
                            <View style={{margin:10}}>
                                <Text>{rowData.mItemName}</Text>
                            </View>
                        </Swipeout>


                        }
                    />
                </View>

            </View>

        )
    }


}

function addToList(value) {

}
function refreshText() {
    this.setState({listitem:''})
}

const css = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },
   navHeader:{
       height:'10%',
       borderBottomColor:'#b1b1b1',
       borderBottomWidth:0.5,
       flexDirection:'row',

   },
    textInput:{
        flex:9,
        height:'100%',
        backgroundColor:'red'
    },
    addButton:{
        height:'100%',
        width:'100%',
        borderWidth:1,
        borderColor:'#7f7f7f',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    listContainer:{

    },
    submitButton:{
        height:25,
        padding:5,
        borderWidth:1,
        borderColor:'#7f7f7f',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#7f7f7f'
    }
});