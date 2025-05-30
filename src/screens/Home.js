import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles'


export default function Home () {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao app Joga Aí</Text>
      <Text>Selecione uma opção no menu abaixo</Text>
    </View>
  )
}

  