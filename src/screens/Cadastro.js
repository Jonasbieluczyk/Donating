import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity, TextInput,} from 'react-native';
import styled from 'styled-components/native';
      
export default class Cadastro extends Component{ 
        
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#E5DFEE',padding:30, justifyContent:'center', alignItems:'center'}}>
               <TextInput style={styles.Digitar} placeholder="Digite Seu Nome"/>
               <TextInput style={styles.Digitar} placeholder="Digite Seu Email"/>
               <TextInput style={styles.Digitar} placeholder="Digite Seu Numero de Celular"/>
               <TextInput style={styles.Digitar} placeholder="Digite Sua Senha"/>
               <TextInput style={styles.Digitar} placeholder="Confirme Sua Senha"/>

               <TouchableOpacity style={styles.button1} onPress={() => {
                    this.props.navigation.navigate('Ong');}}>
            <Text style={styles.doar}> Confirmar </Text>
        </TouchableOpacity>

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
      
    button1: {
        alignItems: 'center',
        backgroundColor: '#4A55F2',
        borderRadius:25,
        width:250,
        height: 60,
        justifyContent: 'center',

      },
      doar:{
        color:'#E4E5EE',
        fontSize: 32,
        fontWeight: 'bold',
      }
  
  });