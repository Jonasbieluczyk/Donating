import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet,} from 'react-native';

export default class ListItem extends Component{

    constructor(props){
        super(props);
        
    }

        

        render(){
            return (
             <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Conversa');}}>
        <View style={styles.abc}>
            <Image source={{uri:this.props.data.img}} style={styles.imagem}/>
            <View style={styles.info}>
                <Text style={styles.nome}>{this.props.data.nome}</Text>
                <Text style={styles.msg}>{this.props.data.msg}</Text>
            </View>
            
        </View>
                
        </TouchableOpacity>

        );
        }
    }

const styles = StyleSheet.create({
    abc:{
        height:60,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderColor:'#CCCCCC',
        flex:1,
        flexDirection:'row'
    },
    imagem:{
        width:40,
        height:40,
        marginTop:10,
        borderRadius:20
    },
    info:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:10

    },
    nome:{
        fontSize:15,
        fontWeight:'bold'
    },
    button:{
        backgroundColor: '#EEE8E8'
    }

});

