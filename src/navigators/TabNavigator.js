import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Inicio from '../screens/Inicio';
import Ong from '../screens/Ong';
import Mapa from '../screens/Mapa';
import Chat from '../screens/Chat';
import Perfil from '../screens/Perfil';
import MainNavigator from './MainNavigator';



const TabNavigator = createBottomTabNavigator({
    Inicio:{
        screen:Inicio
    },
    Doar:{
        screen:Ong
    },
    Mapa:{
        screen:Mapa
    },
    Chat:{
        screen:Chat
    },
    Perfil:{
        screen:Perfil
    },
    MainNavigator:{
        screen:MainNavigator,
        
    },
 }, { tabBarOptions:{
        tabStyle:{
            backgroundColor:'#BDB4CB',
        }
 }

    

})

export default Routers = createAppContainer(TabNavigator);