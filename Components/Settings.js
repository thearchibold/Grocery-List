/**
 * Created by user on 5/5/2018.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button

} from 'react-native';

import {NavigationBar,Icon,Heading,Title,Image} from '@shoutem/ui'

export default  class Setting extends  Component {
    render(){
        return(
            <View>
                <View>
                    <NavigationBar
                        centerComponent={<Title>Settings</Title>}
                        rightComponent={<Icon name="settings"/>}
                    />
                </View>
            </View>
        )
    }
}