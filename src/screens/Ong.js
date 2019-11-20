import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

      
export default class Ong extends Component{ 

    static navigationOptions = {
        tabBarIcon: (focused, tintColor) => (
          <Image style={{ width: 20, height: 20 }} 
                 source={require('../../images/doareditado.jpg')} />
        )
    }
        
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#E5DFEE'}}>
            <Text style={styles.texto}>Escolha sua ONG</Text>
            
                <View style={styles.quadrado}>
                <View style={styles.quadrado2}>
                <Image source={require('../../images/apae.jpg')} style={styles.foto}/>
                </View>
                <View style={{flex:3}}>
                <View style={styles.quadrado3}>
                <Text style={styles.sigla}>ASSOCIAÇÃO DE PAIS E AMIGOS DOS  EXCEPCIONAIS</Text>
                </View>
                <View style={styles.quadrado3}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Doacao');}}>
                    <Text style={styles.doar}> Doar </Text>
                </TouchableOpacity>
                </View>
                
                </View>
                </View>
                
               
                
                
                <View style={styles.quadrado}>
                <View style={styles.quadrado2}>
                <Image source={require('../../images/adau.jpg')} style={styles.foto}/>
                </View>
                <View style={{flex:3}}>
                <View style={styles.quadrado3}>
                <Text style={styles.sigla}>ASSOCIAÇÃO DOS DEFICIENTES FÍSICOS DO ALTO URUGUAI</Text>
                </View>
                <View style={styles.quadrado3}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Doacao');}}>
                    <Text style={styles.doar}> Doar </Text>
                </TouchableOpacity>
                </View>
                
                </View>
                </View>
                <View style={styles.quadrado}>
                <View style={styles.quadrado2}>
                <Image source={require('../../images/assami.jpg')} style={styles.foto}/>
                </View>
                <View style={{flex:3}}>
                <View style={styles.quadrado3}>
                <Text style={styles.sigla}>ASSOCIAÇÃO DE AMPARO À MATERNIDADE E INFÂNCIA - ASSAMI</Text>
                </View>
                <View style={styles.quadrado3}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Doacao');}}>
                    <Text style={styles.doar}> Doar </Text>
                </TouchableOpacity>
                </View>
                
                </View>
                </View>
                <View style={styles.quadrado}>
                <View style={styles.quadrado2}>
                <Image source={require('../../images/crianca.png')} style={styles.foto}/>
                </View>
                <View style={{flex:3}}>
                <View style={styles.quadrado3}>
                <Text style={styles.sigla}>ASSOCIACAO BENEFICENTE LAR DA CRIANCA</Text>
                </View>
                <View style={styles.quadrado3}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Doacao');}}>
                    <Text style={styles.doar}> Doar </Text>
                </TouchableOpacity>
                </View>
                
                </View>
                </View>

               
            </View>
        );
    }
}
    
 
const styles = StyleSheet.create({
    foto:{
        width:100,
        height:100,
        marginLeft:30,
        marginTop:12
    },
    quadrado:{
        flex:1, 
        flexDirection:'row',
        height:40, 
        width:360,
        backgroundColor:'#FFFFFF',
        borderRadius:50,
        alignItems:'center',
        marginTop:5,
        marginBottom:10 
    },
    sigla:{
        textAlign:'left',
        marginTop:7,
        fontWeight: 'bold'
    },
    quadrado2:{
        flex:2,
        height:115,
        backgroundColor:'#FFFFFF',
        borderRadius:30
    },
    quadrado3:{
        flex:5,
        flexDirection:'row',
        backgroundColor: '#FFFFFF',
        borderRadius:30

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2EEC47',
        borderRadius:25,
        width:100,
        height: 40,
        justifyContent: 'center',
        marginLeft: 30,
        marginBottom:30

      },
      doar:{
        color:'#E7F3F2',
        fontSize: 15,
        fontWeight: 'bold',
        

    },
    texto:{
        fontSize:20,
        textAlign:'center',
        marginBottom:10,
        marginTop:10
    }



});
    
  