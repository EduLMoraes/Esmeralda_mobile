import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';

export default function App() {
  const[posicao, setPosicao] = useState({
    latitude: -31.332821,
    longitude: -54.071872,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });

  const [pontos,setPontos] = useState([]);
  const [poligono, setPoligono] = useState([
    {latitude: -31.333390470873784, longitude: -54.07098412513733},
    {latitude: -31.333309425839534, longitude: -54.070734679698944},
    {latitude: -31.3334852619737, longitude: -54.06999506056309}
  ]);

  const [descricao, setDescricao] = useState('');
  const [titulo, setTitulo] = useState('');

  const criarPoligono = () => {
    setPoligono(pontos);
    setPontos([]);
  }

  return (
    <View style={styles.container}>
      <Text>Nosso projeto sobre Mapas</Text>

      <TextInput 
        placeholder="Título" 
        onChangeText={texto => setTitulo(texto)}
      />

      <TextInput 
        placeholder="Descrição" 
        onChangeText={texto => setDescricao(texto)}
      />
      
      <MapView
        style={styles.mapa}
        initialRegion={posicao}
        mapType='satellite'
        onPress={ ponto => { 
            setPosicao({
              ...posicao,
              latitude: ponto.nativeEvent.coordinate.latitude,
              longitude: ponto.nativeEvent.coordinate.longitude,
              latitudeDelta: ponto.nativeEvent.coordinate.latitudeDelta,
              longitudeDelta: ponto.nativeEvent.coordinate.longitudeDelta,
            });
            pontos.push({latitude:  ponto.nativeEvent.coordinate.latitude
                        ,longitude: ponto.nativeEvent.coordinate.longitude});
          }
        }
      >

        <Marker 
          coordinate={posicao}
          title={titulo}
          description={descricao}
          tappable={false}
          //image={require('./assets/favicon.png')}
        />

        <Polygon 
          coordinates={poligono}
          fillColor='#10CCE060'
          strokeColor='red'
          strokeWidth={3}
          tappable={true}
          onPress={() => alert(titulo)}

        />        

      </MapView>
      <Button title='Criar poligono' onPress={criarPoligono} />
            

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa: {
    marginTop: 20,
    width: "100%",
    height: "60%"
  },
  markerView: {
    width: 100,
    height: 50
  }
});
