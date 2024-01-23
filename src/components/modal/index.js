import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Pressable, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import useStorage from "../../hooks/useStorage";
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'

const Separator = () => <View style={styles.separator} />;

export function ModalCar({handleClose}) {

    const { saveItem } = useStorage();
    const [placaCarro, setPlacaCarro] = useState("")
    const [marcaCarro, setMarcaCarro] = useState("")
    const [modeloCarro, setModeloCarro] = useState("")
    const [corCarro, setCorCarro] = useState("")
    
    async function handleSaveCar(){

        // precisa salvar os atributos do carro

        const carro = {
            placa: "",
            marca: "",
            modelo: "",
            cor: "",
        }

        if (placaCarro === "" || marcaCarro === "" || modeloCarro === "" || corCarro === "") {
            Alert.alert("Preencha todos os campos!")
        } else {
            carro.placa += placaCarro
            carro.marca += marcaCarro
            carro.modelo += modeloCarro
            carro.cor += corCarro

            //console.log(carro.placa,carro.cor,carro.marca,carro.modelo)

            await saveItem('@carro', carro)

            alert('Carro salvo com sucesso!')
            handleClose();
        }

        

        //await Clipboard.setStringAsync(password)
        //await saveItem('@pass', password)
            
        //alert('Senha salva com sucesso!')
        //handleClose();
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Adicionar Carro</Text>
                    <Ionicons size={30} color={'blue'} name='car' />
                </View>

                <View style={styles.formArea}>
                    <TextInputMask style={styles.input} 
                                placeholder='Placa' 
                                type={'custom'}
                                options={{ mask: 'AAA-9999' }}
                                placeholderTextColor="#161616" 
                                value={placaCarro}
                                onChangeText={ (value) => setPlacaCarro(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Marca' 
                                placeholderTextColor="#161616"
                                value={marcaCarro}
                                onChangeText={ (value) => setMarcaCarro(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Modelo' 
                                placeholderTextColor="#161616"
                                value={modeloCarro}
                                onChangeText={ (value) => setModeloCarro(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Cor' 
                                placeholderTextColor="#161616"
                                value={corCarro}
                                onChangeText={ (value) => setCorCarro(value) }/>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleSaveCar}>
                        <Ionicons style={styles.buttonSaveText} size={25} color={'white'} name='add' />
                    </TouchableOpacity>
                </View>
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    content:{
        backgroundColor: '#FFF',
        width: '85%',
        paddingBottom: 24,
        paddingTop:24,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 8,
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000',
        marginBottom:24,
    },
    input:{
        backgroundColor: 'gray',
        width: '90%',
        padding:14,
        borderRadius: 8,
        borderColor: 'black',
        marginBottom: 10
    },
    text:{
        color:'#FFF',
        textAlign:'center',
    },
    buttonArea:{
        flexDirection:'row',
        width:'90%',
        marginTop:8,
        alignItems:'center',
        justifyContent:'space-between'
    },
    button:{
        flex:1,
        alignItems:'center',
        marginBottom:14,
        marginTop:14,
        padding:8,
    },
    buttonSave:{
        backgroundColor: '#392DE9',
        borderRadius:8,
    },
    buttonSaveText:{
        color:'#FFF',
        fontWeight:'bold',
    },
    titleArea:{
        flexDirection:'row',
    },
    formArea:{
        width:'90%',
        marginTop:8,
        alignItems:'center',
        justifyContent:'space-between'
    },
});
