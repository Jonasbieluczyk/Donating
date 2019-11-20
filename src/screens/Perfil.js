import React, {Component}from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components/native';


export default class Perfil extends Component{ 

    static navigationOptions = {
        tabBarIcon: (focused, tintColor) => (
          <Image style={{ width: 20, height: 20 }} 
                 source={require('../../images/perfil.png')} />
        )
    }

render (){

    const dados = [
        {key: '1', nome:'Nome', name:'Jonas'},
        {key: '2', nome:'E-mail', name:'jonas-august@hotmail.com'},
        {key: '3', nome:'Telefone', name:'(54) 99600-5544'}
    ]

return(
    <View style={{flex:1, backgroundColor:'#E5DFEE', alignItems:'center'}}>
        <Image source={require('../../images/jonas.jpeg')} style={styles.perfil}/>
        <Text style={styles.feito} >Doações Feitas : 2</Text>

        <FlatList 
        data={dados}
        renderItem={({item})=> <Text style={styles.textoitem}>{item.nome}: {item.name}</Text>}
        />
    </View>

);

}

}
const styles = StyleSheet.create({
    perfil:{
        width:150,
        height:150,
        borderRadius:80,
        marginTop:25,
        marginBottom:5
    },
    feito:{
        fontSize:25,
        color:'#0F27A1',
        fontWeight:'bold'
    },
    textoitem:{
        fontSize:20,
        padding:25,
        width:300,
        borderBottomWidth:1,
        borderBottomColor:'#CCC'
    }

});