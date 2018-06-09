
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button

} from 'react-native';

import {NavigationBar,Icon,Heading,Title,Image} from '@shoutem/ui'
import ImagePicker from 'react-native-image-picker';
let options = {
    title: 'Select Avatar',
    customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};


export default class DashBoard extends Component<Props> {

    constructor(Props){
        super(Props);
        this.state ={imageUri:""}
    }

    chooseImage(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    imageUri:response.uri
                })
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <NavigationBar
                        rightComponent={<Icon name="take-a-photo"
                                              onPress={()=>{
                                                  this.chooseImage()}
                                              }

                        />}
                        centerComponent={<Heading>Add Image</Heading>}
                        leftComponent={<Icon name="left-arrow"/>}
                        hasHistory={true}
                    />
                </View>
                <View style={styles.homebody}>
                    <View>
                        <Image
                            style={styles.imageItem}
                            styleName="medium-square"
                            source={{ uri: this.state.imageUri === "" ? 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png': this.state.imageUri}}
                        />
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7fffc',
    },
    homeheader:{
        height:'10%',
        backgroundColor:'#f7fffc'
    },
    homebody:{
        height:'90%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    imageItem:{
        borderWidth:1,
        borderColor:'#ffb290',
        borderRadius:32
    }
});
