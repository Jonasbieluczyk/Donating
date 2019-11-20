import React, {Component}from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components/native';
import ListItem from './ListItem';


export default class Chat extends Component{ 

    static navigationOptions = {
        tabBarIcon: (focused, tintColor) => (
          <Image style={{ width: 20, height: 20 }} 
                 source={require('../../images/papo.jpg')} />
        )
        }

        constructor(props) {
            super(props);
            this.state = {
                list:[
                    {key:'1', img:'https://www.b7web.com.br/avatar1.png', nome:'Boniek Jonas', msg:'e ai blz1'},
                    {key:'2', img:'https://www.b7web.com.br/avatar2.png', nome:'Boniek Jonas', msg:'tudo certo'},
                    {key:'3', img:'https://www.b7web.com.br/avatar1.png', nome:'Boniek Jonas', msg:'sdfdfsr21'},
                    {key:'4', img:'https://www.b7web.com.br/avatar1.png', nome:'Boniek Jonas', msg:'até mais'},
                    {key:'5', img:'https://www.b7web.com.br/avatar1.png', nome:'Boniek Jonas', msg:'sdfdfsr21'},
                    {key:'6', img:'https://www.b7web.com.br/avatar1.png', nome:'Boniek Jonas', msg:'boa noite'}
                ]

            };
        }

    
           
     


render (){

return(
    <View style={{flex:1, backgroundColor:'#E5DFEE'}}>
    <View style={styles.quadrado1}>
    <Image source={require('../../images/pesquisar.png')} style={styles.ImageStyle}/>
        <TextInput style={styles.Digitar} placeholder="Pesquisar Nome"></TextInput>
        </View>  
        <FlatList
            data={this.state.list}
            renderItem={({item})=> <ListItem data={item}/>}
        />
    </View>

);

}

}

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        color: '#34495e',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },
    Digitar:{
        alignItems: 'center',
        height: 50,
        width:300,
        fontSize: 20,
        backgroundColor:'#FFFFFF'


    },
    ImageStyle: {
        padding: 10,
        height: 50,
        width: 40,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    quadrado1:{
        flex:1, 
        flexDirection:'row',
        height:60,
        width:40,
        marginTop:20,
        marginLeft:10
    },
})