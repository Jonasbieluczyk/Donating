import React, {Component}from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';


export default class Mapa extends Component{ 
    static navigationOptions = {
        tabBarIcon: (focused, tintColor) => (
          <Image style={{ width: 20, height: 20 }} 
                 source={require('../../images/tcc.png')} />
        )
    }

render (){

return(
    <View style={{flex:1, backgroundColor:'#E5DFEE'}}>
        <TextInput>sdfdfs</TextInput>
    </View>

);


}


}