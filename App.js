import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetMapView from './src/map';
import GetFlatList from './src/flat_list';
import GetBottomTabs from './src/bottom_tabs';

export default function App() {
  return (
    <View style={styles.container}>
      <GetBottomTabs style={styles.bottom_tabs}></GetBottomTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottom_tabs: {
    flex: 1,
    height: 20,
    width: 100,
  }
});
