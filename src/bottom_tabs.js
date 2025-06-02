import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import GetMapView from './map';
import GetFlatList from './flat_list';
import GetCalculator from './calculator';
import * as Speech from 'expo-speech';

const Tab = createBottomTabNavigator();

export default function GetBottomTabs() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#1a5c47",
            tabBarActiveBackgroundColor: "#a5d1c3",
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: 900,
            }
          }}>

        <Tab.Screen name="Mapa" component={GetMapView} 
          options={{
            tabBarIcon: () => <Icon name='map' size={20} />             
          }}
          listeners={{
            tabPress: (e) =>{
              Speech.speak("Mapa de mercados")
            }
          }}
        />

        <Tab.Screen name="Lista de Compras" component={GetFlatList}
          options={{
            tabBarIcon: () => <Icon name='list' size={20} />
          }}
          listeners={{
            tabPress: (e) =>{
              Speech.speak("Lista de Compras")
            }
          }}
        />

        <Tab.Screen name="Calculadora" component={GetCalculator}
          options={{
            tabBarIcon: () => <Icon name='analytics' size={20} />
          }}
          listeners={{
            tabPress: (e) =>{
              Speech.speak("Calculadora")
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
