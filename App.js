
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
   Button

} from 'react-native';

import {NavigationBar,Heading,Title,Image} from '@shoutem/ui'

import ImagePicker from 'react-native-image-picker';

import {Router , Scene, Stack} from 'react-native-router-flux'
import Settings from './Components/Settings'
import GroceryListDetails from './Components/GroceryListDetails'
import GroceryListHeader from './Components/GroceryListHeader'
import Tab from './Components/Tab'
import Login from './Components/Login'


export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={selectedTab:'home', iconcolor:'#525a55'};

  }
  componentWillMount(){

  }

  render() {
       return(
        <Router

        >
            <Stack
                hideNavBar={true}
                key="root">
                <Scene initial={true} key="login" component={Login} />

                <Scene  key="home" component={Tab} />
                <Scene  key="settings" component={GroceryListDetails} />
                <Scene  key="details" component={GroceryListHeader} />
            </Stack>
        </Router>
        );
  }
}
