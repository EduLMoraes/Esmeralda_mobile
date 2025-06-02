import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome, setNome]   = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone]   = useState("");
  const [senha, setsenha] = useState("");
  const [site, setSite]   = useState("");

  const mostrar = () => {
    alert(
      "Dados do usuário: " + 
      "\nNome: " + nome +
      "\nE-mail: " + email +
      "\nFone: " + fone
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/celular.png')} 
        style={styles.imagem}
      />
      <Text style={styles.titulo}>Primeiro projeto do 5º INFO!</Text>
      <Text style={styles.subtitulo}>Vamos começar...</Text>
      
      <TextInput 
        placeholder="Nome do usuário" 
        style={styles.input} 
        autoCapitalize="words"
        onChangeText={nome => setNome(nome)}
      />
      <TextInput placeholder="E-mail" 
        inputMode="email" 
        style={styles.input}
        onChangeText={email => setEmail(email)}
      />
      <TextInput placeholder="Senha" 
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={senha => setSenha(senha)}
      />
      <TextInput 
        placeholder="Telefone" inputMode="numeric" 
        style={styles.input}
        maxLength={11}
        onChangeText={fone => setFone(fone)}
      />
      <TextInput 
        placeholder="Site" 
        inputMode="url" 
        style={styles.input}
        onChangeText={site => setSite(site)}
      />

      <Button title="Salvar" 
        onPress={() => alert("Salvo com sucesso! " + nome)}
      />

      <Button title="Mostrar" 
        onPress={mostrar}
      />  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7d5d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  subtitulo: {
    fontSize: 18,
    color: "blue",
    fontWeight: 300,
    marginBottom: 20
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 40
  },
  input: {
    backgroundColor: "#cff9fa",
    width: "80%",
    marginBottom: 10,
    borderRadius: 10,
    padding: 15

  }
});
