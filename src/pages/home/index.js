import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal } from 'react-native';
import { ModalCar } from '../../components/modal';

const Separator = () => <View style={styles.separator} />;

export function Home() {

    const [modalVisible, setModalVisible] = useState(false);

    function createCar() {
        setModalVisible(true);
    }

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
                onPress={createCar}
                />
            </View>

            <Modal visible={modalVisible} animationType='fade'>
                <ModalCar handleClose={ () => setModalVisible(false) } />
            </Modal>

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
