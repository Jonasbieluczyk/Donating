import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native';


export default class Doacao extends Component{ 
        
    render() {
        return(
            <View style={{flex:1, backgroundColor:'#E5DFEE'}}>
            <Text style={styles.Texto}>Descreva sua Doação:</Text>
            <TextInput style={styles.Digitar} placeholder="Descreva Aqui"/>
            <Text style={styles.Texto2}>Você consegue levar a Doação até o local ?</Text>
            
            
            
            <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Mapa');}}>
                    <Text style={styles.doar}> Confirmar </Text>
                </TouchableOpacity>


                
            </View>




        );

    }
}

const styles = StyleSheet.create({
    Digitar:{
        height: 200,
        width:330,
        fontSize: 20,
        backgroundColor:'#FFFFFF',
        marginBottom:20,
        marginLeft:15,
        borderRadius:15

    },
    Texto:{
        fontSize:20,
        marginTop:10,
        marginBottom:10,
        marginLeft:15,
        
    },
    Texto2:{
        marginLeft:15,
        marginBottom:100,
        fontSize:20

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2EEC47',
        borderRadius:25,
        width:170,
        height: 50,
        justifyContent: 'center',
        marginLeft: 90,
        marginBottom:30

      },
      doar:{
        color:'#E7F3F2',
        fontSize: 25,
        fontWeight: 'bold',
        

    }


});