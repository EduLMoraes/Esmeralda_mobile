import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';

export default function GetMapView() {
  const[posicao, setPosicao] = useState({
    latitude: -31.321017439654167,
    longitude: -54.09379733488888,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });

  const [pontos,setPontos] = useState([]);
  const [poligono, setPoligono] = useState([
     
    {latitude: -31.321017439654167, longitude: -54.09379733488888},
    {latitude: -31.330695054137465, longitude: -54.076905890207236},
    {latitude: -31.331623462402113, longitude: -54.07748002044038}
  ]);

  const [descricao, setDescricao] = useState('');
  const [titulo, setTitulo] = useState('');

  return (
    <View style={styles.container}>
      <Text>Mercados</Text>
      <MapView
        style={styles.mapa}
        initialRegion={posicao}
        mapType='satellite'
      >
        <Marker 
          coordinate={posicao}
          title={titulo}
          description={descricao}
          tappable={false}
        />
      </MapView>
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
