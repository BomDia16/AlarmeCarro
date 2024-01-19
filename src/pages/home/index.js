import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"

const Separator = () => <View style={styles.separator} />;

export function Home() {
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <View style={styles.texto}>
        <Text>Alarme Carro!</Text>
        <Text>Um app que notifica o usuário de um eventual roubo.</Text>
      </View>

      <Separator/>
      <View style={styles.botoes}>
        <Button
          title='Adicionar carro'
          onPress={Alert.alert("carro adicionado")}
        />
      </View>
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

  texto: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  botoes: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
