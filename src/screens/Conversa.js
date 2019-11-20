import React, {Component}from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import MsgItem from './MsgItem';

export default class Conversa extends Component{ 

constructor(props) {
    super(props);
    this.state = {
        chat:[
            {key:'1', nome:'Boniek,', msg:'Oi', m:true},
            {key:'1', nome:'Lucas,', msg:'oi, tudo bem', m:false},
            {key:'1', nome:'Boniek,', msg:'Oi', m:true},
            {key:'1', nome:'Lucas,', msg:'Oi', m:false},
            {key:'1', nome:'Boniek,', msg:'Oi', m:true},
            {key:'1', nome:'Lucas,', msg:'Oi', m:false},
            {key:'1', nome:'Boniek,', msg:'Oi', m:true},
        ]
    };
}

    render() {
        return(
            <View style={{flex:1, backgroundColor:'#E5DFEE'}}>
            <ImageBackground source={require('../../images/fundo.jpg')} style={styles.fundo}>
            <FlatList 
            data={this.state.chat}
            renderItem={({item})=> <MsgItem data={item}/>}
            />
            </ImageBackground>


             </View>
        );
    }

}

const styles = StyleSheet.create({
    fundo:{
        flex:1
    }


});