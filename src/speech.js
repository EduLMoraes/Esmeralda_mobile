import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from 'react-native';
import * as Speech from 'expo-speech';

export default function Speech() {
  const [total, setTotal] = useState(0);

  const pedir = (valor, produto) => {    
    Speech.speak(" Coloque o pastel de " + produto + " na sacola.", {language: "PT-BR"});
    setTotal(parseFloat(total) + parseFloat(valor));    
  }

  const finalizar = () => {
    alert('Total do Pedido : ' + total.toFixed(2));
    Speech.speak(
      " O total do pedido é " + total + 
      " reais. Retire seu produto e obrigado pela preferência" , 
      {language: "PT-BR"}
    );
    setTotal(0);
  }

  return (
    <View style={styles.container}>
      
      <Image source={require('./assets/logo.png')} style={{ width: 270, height: 270 }}/>

      <View style={styles.lanches}>
        <View style={styles.coluna}>
          <TouchableOpacity style={styles.viewPastel} onPress={() => pedir(12, "queijo")}>
            <Image source={require('./assets/queijo.png')} style={styles.imagem}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.viewPastel} onPress={() => pedir(15, "carne")}>
            <Image source={require('./assets/carne.png')} style={styles.imagem}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.viewPastel} onPress={() => pedir(10, "calabresa")}>
            <Image source={require('./assets/calabresa.png')} style={styles.imagem}/>
          </TouchableOpacity>
        </View>
      
        <View style={styles.coluna}>
          <TouchableOpacity style={styles.viewPastel} onPress={() => pedir(8, "vento")}>
            <Image source={require('./assets/vento.png')} style={styles.imagem}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.viewPastel} onPress={() => pedir(7, "feijão")}>
            <Image source={require('./assets/feijao.png')} style={styles.imagem}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.viewPastel} onPress={() => pedir(8, "gato")}>
            <Image source={require('./assets/gato.png')} style={styles.imagem}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.botao}>
        <Text style={styles.textTotal}>Total : {total.toFixed(2)}</Text>
        <Pressable 
          style={
            ({pressed}) => [{
              backgroundColor: pressed ? "#ffc300" : "#d08b02" 
            },
            styles.thPressable]} 
          onPress={finalizar}
        >
          <Text style={styles.thText}>Finalizar Pedido</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffe18b',
    alignItems: 'center',    
    justifyContent: 'center',
    padding: 20,
    columnGap: 20
  },
  lanches: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'center',
    padding: 20,
    columnGap: 30
  },
  coluna: {
    flexDirection: 'column',
    width: "50%",
    rowGap: 10,    
  },
  botao: {
    alignItems: 'center',    
    justifyContent: 'center',
  },
  imagem: {
    width: 170,
    height: 170
  },
  viewPastel: {
  
    width: '100%',
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',    
  },  
  thText: {
    fontSize: 20,
    color: "white",
    fontWeight: 700
  },
  thPressable: {
    borderWidth: 1,
    borderColor: "#d08b02",
    padding: 10,
    borderRadius: 10,
    marginTop: 5
  },
  textTotal: {
    fontSize: 20,
    color: "#a51211",
    fontWeight: 700
  },
});
