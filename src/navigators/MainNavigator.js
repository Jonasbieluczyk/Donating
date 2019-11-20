import {createStackNavigator} from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';
import Inicio from '../screens/Inicio'
import Login from '../screens/Login'
import Cadastro from '../screens/Cadastro'
import Ong from '../screens/Ong'
import Doacao from '../screens/Doacao'
import Mapa from '../screens/Mapa'
import Chat from '../screens/Chat'
import Conversa from '../screens/Conversa'
import ListItem from '../screens/ListItem'



const MainNavigator = createStackNavigator({

    Inicio:{
        screen:Inicio,
        navigationOptions:{
            header:null

        }
    },

    Cadastro:{
        screen:Cadastro,
        navigationOptions:{
            title:'Cadastro'
               
        }  
    },

    Login:{
        screen:Login,
        navigationOptions:{
            title:'Login'
        }   
    },
    

    Ong:{
        screen:Ong,
        navigationOptions:{
            title:'Escolha Sua ONG'
        }
         
    },

    Chat:{
        screen:Chat
    },

    Doacao:{
        screen:Doacao,
        navigationOptions:{
            title:'Doação'
        }
    },

    Mapa:{
        screen:Mapa
    },


    Conversa:{
        screen:Conversa
    },
    ListItem:{
        screen:ListItem
    },
    
    
}, {
    defaultNavigationOptions:{
        
        
    }

        

})

export default Router = createAppContainer(MainNavigator);