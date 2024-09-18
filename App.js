import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function setItem() {
  try {
    await AsyncStorage.setItem('theme'. isDark);
    console.log('Dado foi salvo')
  } catch (error) {
    console.log()
  }

}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Treinamento de asyncStorage</Text>
      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
