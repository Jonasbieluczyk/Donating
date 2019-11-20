import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
      
    export default class Inicio extends Component{ 
    
        static navigationOptions = {
            tabBarIcon: (focused, tintColor) => (
              <Image style={{ width: 20, height: 20 }} 
                     source={require('../../images/inicio.png')} />
            )
        }
        
        render() {

            

        return (
            <View style={{flex:1, backgroundColor:'#E5DFEE'}}>
                <Image source={require('../../images/mao1.jpg')} style={styles.mao}/>
                <Text style={styles.Frase}>Simplificando suas doações</Text>

                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Login');}}>
                    <Text style={styles.doar}> Fazer Doação </Text>
                </TouchableOpacity>
                 
                

            </View>
        );
    }

   

}

    
  const styles = StyleSheet.create({
      Frase:{
        fontSize:25,
        paddingTop:25,
        paddingBottom:50,
        color:'#025C6E',
        textAlign:'center'
      },
      mao:{
        width:null,
        height:300
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#7AAEE9',
        borderRadius:25,
        width:300,
        height: 60,
        justifyContent: 'center',
        marginLeft: 30,
        marginBottom:30

      },
      doar:{
          color:'#E7F3F2',
          fontSize: 32,
          fontWeight: 'bold',   
      }, 
      icon:{
          width:15,
          height:15
      }
  
  });