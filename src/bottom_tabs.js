import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Buscar from './screens/Buscar';
import Estatisticas from './screens/Estatisticas';
import MeuPerfil from './screens/MeuPerfil';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#1a5c47",
            tabBarActiveBackgroundColor: "#a5d1c3",
            //tabBarShowLabel: false,     
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 900,
            }
          }}>

        <Tab.Screen name="Tela Inicial" component={Home} 
          options={{
            tabBarIcon: () => <Icon name='home' size={20} />             
          }}
        />

        <Tab.Screen name="Buscar Jogos" component={Buscar}
          options={{
            tabBarIcon: () => <Icon name='search' size={20} />
          }}
        />

        <Tab.Screen name="Estatísticas" component={Estatisticas}
          options={{
            tabBarIcon: () => <Icon name='analytics' size={20} />
          }}
        />

        <Tab.Screen name="Meu Perfil"   component={MeuPerfil} 
          options={{
            tabBarIcon: () => <Icon name='person' size={20} /> ,
            tabBarBadge: 10,
            tabBarBadgeStyle: {
              backgroundColor: "green",
            },
          }}
        />        
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
