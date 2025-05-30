import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.coluna}>
        <View style={styles.container1}>
          <Text>View 1</Text>
          <Button title={"Clique aqui"} />
        </View>
        <View style={styles.container2}>          
          <Text>View 2</Text>
          <Image source={require('./assets/favicon.png')} style={{ width: 50}} />
        </View>

        <View style={styles.container3}>
          <Pressable 
            style={({pressed}) => [{
                backgroundColor: pressed ? "#80e5ff" : "#4999ad",
              }, styles.pressable]} 
            onPress={() => alert("Pressionou")} 
            onLongPress={() => alert("Pressionou longo")}       
          >
            <Image source={require('./assets/queijo.png')} style={{ width: 80, height: 80}} />
            <Text>Queijo</Text>
          </Pressable>
          
        </View>

      </View>

      <View style={styles.coluna}>
        <View style={styles.container1}>
          <Text>View 1</Text>
        </View>
        <View style={styles.container2}>
          <Text>View 2</Text>
        </View>
        <View style={styles.container3}>
          <Text>View 3</Text>
        </View>      
      </View>

    </View>    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',   // alinhamento vertical
    alignItems: 'center',       // alinhamento horizontal
    //rowGap: 30,
    columnGap: 30,              
  
    backgroundColor: 'gray',       
    padding: 30
  },
  container1: {
    //flex: 3,
    backgroundColor: '#c79191',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 200
  },
  container2: {
    //flex: 2,
    backgroundColor: '#91b9c7',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 200
  },
  container3: {
    //flex: 1,
    //backgroundColor: '#91c7a0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 200
  },
  coluna: {
    rowGap: 30
  },
  pressable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 100,
    height: 200,
  },
});
