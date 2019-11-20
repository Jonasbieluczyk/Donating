import React, {Component}from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import firebase from 'react-native-firebase';


export default class Login extends Component{ 
    
    
        
    render() {

    return(
        <View style={{flex:1, backgroundColor:'#E5DFEE',padding:30, justifyContent:'center', alignItems:'center'}}>
        <TextInput style={styles.Digitar} placeholder="Login" />
        <TextInput style={styles.Digitar} placeholder="Senha" />
        


        <TouchableOpacity style={styles.button1} onPress={() => {
                    this.props.navigation.navigate('Inicio');}}>
            <Text style={styles.doar}> Entrar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Cadastro');}}>
            <Text style={styles.doar}> Cadastrar-se </Text>
        </TouchableOpacity>

        <Text style={styles.esqueceu}>Esqueceu sua senha ?</Text>

        </View>
    );
    }

}


const styles = StyleSheet.create({
    Digitar:{
        height: 60,
        width:300,
        fontSize: 20,
        backgroundColor:'#FFFFFF',
        marginBottom:20

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2EEC47',
        borderRadius:25,
        width:250,
        height: 60,
        justifyContent: 'center',
        marginBottom:30

      },
      doar:{
          color:'#E4E5EE',
          fontSize: 32,
          fontWeight: 'bold',
          
      },
      button1: {
        alignItems: 'center',
        backgroundColor: '#4A55F2',
        borderRadius:25,
        width:250,
        height: 60,
        justifyContent: 'center',
        marginBottom:30
      },
      esqueceu:{
          color:'#32C9B2'
      }


});

