import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class MsgItem extends Component{
    constructor(props){
        super(props);
        this.estilo = styles.balaoesquerdo;
        if(props.data.m) {
            this.estilo = styles.balaodireito;
        }
    }

    render(){
        return(
           <View style={styles.balao}>
            <Text style={styles.nome}>{this.props.data.nome}</Text>
            <Text>{this.props.data.msg}</Text>
           </View>
        );
       
    }

}
const styles = StyleSheet.create({
        balao:{
            backgroundColor:'#FF0000',
            margin:10,
            padding:10
        },
        balaoesquerdo:{
            backgroundColor:'#FFFFFF',
            alignSelf:'flex-start',
            marginRight:50


        },
        balaodireito:{
            backgroundColor:'#00FF00',
            alignSelf:'flex-start',
            marginLeft:50

        },
        nome:{
            fontSize:15,
            fontWeight:'bold'
        }
});