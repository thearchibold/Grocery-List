
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
   Button

} from 'react-native';

import {NavigationBar,Heading,Title,Image} from '@shoutem/ui'
import Icon from 'react-native-vector-icons/Ionicons';

import ImagePicker from 'react-native-image-picker';
import DashBoard from './Components/dashboarditem'
import CreateList  from './Components/CreateList'
import HomePage from './Components/HomePage'
import Account from './Components/Account'
import {} from 'react-navigation'
import TabNavigator from 'react-native-tab-navigator';

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={selectedTab:'home', iconcolor:'#525a55'};

  }

  render() {

    return(
    <TabNavigator tabBarStyle={{ height: 50, backgroundColor:'#fff' }}>
       <TabNavigator.Item
           title="List"
           selected={this.state.selectedTab === 'home'}
           renderIcon={() => <Icon name="ios-clipboard-outline" size={24} color ={this.state.iconcolor} />}
           onPress={() => {this.setState({ selectedTab: 'home' });

         }}>
           {<HomePage/>}
       </TabNavigator.Item>
        <TabNavigator.Item
            selected={this.state.selectedTab === 'createlist'}
            title="Create List"
            renderIcon={() =><Icon name="ios-add-circle-outline" size={24} color={this.state.iconcolor} />}
            onPress={() => {this.setState({ selectedTab: 'createlist' });

            }}>
            {<CreateList/>}
        </TabNavigator.Item>

         <TabNavigator.Item
             selected={this.state.selectedTab === 'profile'}
             title="Account"
             renderIcon={() =><Icon name="ios-contacts-outline" size={24} color={this.state.iconcolor} />}
             onPress={() => {this.setState({ selectedTab: 'profile' });

           }}>
             {<Account/>}
         </TabNavigator.Item>
     </TabNavigator>
        );
  }
}
