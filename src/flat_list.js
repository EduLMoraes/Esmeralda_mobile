import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Linking, Alert } from 'react-native';

export default function App() {

  const Filmes = [
    {
      id: 1,
      nome: 'Transcendence: A Revolução',
      ano: 2014,
      genero: 'Ficção',
      imagem: require('./assets/1.jpg'),
      sinopse: "Dr. Will Caster, a maior autoridade do mundo em inteligência artificial, está conduzindo experimentos altamente controversos, na intenção de criar um robô com grande variedade de emoções humanas. Quando extremistas antitecnologia tentam matá-lo, Caster convence sua esposa, Evelyn, e seu melhor amigo, Max Waters, a testar seu novo invento nele mesmo. Só que a grande questão não é se eles podem fazer isto, mas se eles devem dar este passo.",
      url: "https://www.youtube.com/watch?v=EgG6LNxKT0U"
    },
    {
      id: 2,
      nome: 'Kung Fu Panda 4',
      ano: 2024,
      genero: 'Ação',
      imagem: require('./assets/2.jpg'),
      sinopse: "Uma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria. Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser encontrados nos lugares mais inesperados.",
      url: "https://www.youtube.com/watch?v=hI1jyNTMBFI"
    },
    {
      id: 3,
      nome: 'Matrix',
      ano: 1999,
      genero: 'Ação',
      imagem: require('./assets/3.jpg'),
      sinopse: "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.",
      url: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
    },
    {
      id: 4,
      nome: 'The Batman',
      ano: 2022,
      genero: 'Ação',
      imagem: require('./assets/4.jpg'),
      sinopse: "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.",
      url: "https://www.youtube.com/watch?v=mqqft2x_Aa4"
    },
    {
      id: 5,
      nome: 'A Substância',
      ano: 2024,
      genero: 'Terror',
      imagem: require('./assets/5.jpg'),
      sinopse: "Elisabeth Sparkle, renomada por um programa de aeróbica, enfrenta um golpe devastador quando seu chefe a demite. Em meio ao seu desespero, um laboratório lhe oferece uma substância que promete transformá-la em uma versão aprimorada.",
      url: 'https://www.youtube.com/watch?v=LNlrGhBpYjc'
    },
    {
      id: 6,
      nome: 'Minecraft',
      ano: 2025,
      genero: 'Aventura',
      imagem: require('./assets/6.jpg'),
      sinopse: "Um portal misterioso atrai quatro desajustados para o Overworld, uma terra das maravilhas bizarras e cúbicas que prospera com a imaginação. Para voltar para casa, eles têm que dominar o terreno enquanto embarcam em uma missão mágica com um construtor inesperado chamado Steve.",
      url: "https://www.youtube.com/watch?v=EVKYAAES6JQ"
    }
  ];

  const criaItem = ({item}) =>
    <TouchableOpacity 
      style={styles.listaItem} 
      onPress={() => 
        Alert.alert(
          'Sinopse',
          item.sinopse, 
          [
            {
              text: 'Assistir trailer',
              onPress: () => Linking.openURL(item.url),
            },
            {
              text: 'Fechar',
              onPress: () => null,
            }
          ]
        )}
    >
      <Image source={item.imagem} style={styles.listaImagem} />

      <View style={styles.listaDetalhes}>
        <Text>Cód: {item.id}</Text>
        <Text>Nome: {item.nome}</Text>
        <Text>Ano: {item.ano}</Text>
        <Text>Gênero: {item.genero}</Text>
      </View>
    </TouchableOpacity>


  return (
    <View style={styles.container}>
      <Text>Flatlist</Text>

      <FlatList 
        data={Filmes}
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
