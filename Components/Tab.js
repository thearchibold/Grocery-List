/**
 * Created by archibold on 16/06/2018.
 */
import TabNavigator from 'react-native-tab-navigator';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import CreateList  from './CreateList'
import HomePage from './HomePage'
import Account from './Account'

export  default class Tab extends Component{
    constructor(props){
        super(props);
        super(props);
        this.state={selectedTab:'home', iconcolor:'#525a55'};
    }

    render(){
        return( <TabNavigator tabBarStyle={{ height: 50, backgroundColor:'#fff' }}>
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
        </TabNavigator>)
    }
}