import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import * as Speech from 'expo-speech';

export default function GetFlatList() {

  const ListaDeCompras = [
    {
      id: 1,
      nome: 'Maçã Gala Nacional (Kg)',
      preco: 7.98,
      mercado: 'Supermercado Preço Bom',
      genero: 'Hortifruti',
    },
    {
      id: 2,
      nome: 'Leite Integral Longa Vida UHT 1L',
      preco: 4.29,
      mercado: 'Mercadão Popular',
      genero: 'Laticínios',
    },
    {
      id: 3,
      nome: 'Pão de Forma Tradicional 500g',
      preco: 6.50,
      mercado: 'Padaria Sonho Doce',
      genero: 'Padaria',
    },
    {
      id: 4,
      nome: 'Refrigerante Cola 2L',
      preco: 8.99,
      mercado: 'Supermercado Preço Bom',
      genero: 'Bebida',
    },
    {
      id: 5,
      nome: 'Sabão em Pó Multiação 1Kg',
      preco: 15.75,
      mercado: 'Atacado Econômico',
      genero: 'Limpeza',
    },
    {
      id: 6,
      nome: 'Arroz Agulhinha Tipo 1 (5Kg)',
      preco: 28.50,
      mercado: 'Mercadão Popular',
      genero: 'Mercearia',
    },
    {
      id: 7,
      nome: 'Shampoo Hidratação Profunda 350ml',
      preco: 12.90,
      mercado: 'Farmácia Bem Estar',
      genero: 'Higiene Pessoal',
    },
    {
      id: 8,
      nome: 'Queijo Mussarela Fatiado (200g)',
      preco: 10.20,
      mercado: 'Supermercado Preço Bom',
      genero: 'Frios e Laticínios',
    },
    {
      id: 9,
      nome: 'Café Torrado e Moído Tradicional 500g',
      preco: 18.99,
      mercado: 'Mercadão Popular',
      genero: 'Mercearia',
    },
    {
      id: 10,
      nome: 'Água Sanitária Perfumada 2L',
      preco: 5.80,
      mercado: 'Atacado Econômico',
      genero: 'Limpeza',
    },
    {
      id: 11,
      nome: 'Banana Prata (Dúzia)',
      preco: 9.50,
      mercado: 'Feira do Produtor',
      genero: 'Hortifruti',
    },
    {
      id: 12,
      nome: 'Detergente Líquido Neutro 500ml',
      preco: 3.25,
      mercado: 'Supermercado Preço Bom',
      genero: 'Limpeza',
    }
  ];
  

  const criaItem = ({item}) =>
    <TouchableOpacity 
      style={styles.listaItem} 
      onPress={() => 
        Speech.speak(item.nome + "." + item.preco + "reais" + ". No estabelecimento " + item.mercado)
      }
    >

      <View style={styles.listaDetalhes}>
        <Text>Nome: {item.nome}</Text>
        <Text>R$: {item.preco}</Text>
        <Text>Mercado: {item.mercado}</Text>
        <Text>Gênero: {item.genero}</Text>
      </View>
    </TouchableOpacity>


  return (
    <View style={styles.container}>
      <FlatList 
        data={ListaDeCompras}
        renderItem={criaItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  listaItem: {
    backgroundColor: '#d8e4ed',
    margin: 10,
    padding: 10,
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row'
  },
  listaImagem: {
    width: 50,
    height: 80,
    borderRadius: 5
  },
  listaDetalhes: {
    marginLeft: 10
  }
});
