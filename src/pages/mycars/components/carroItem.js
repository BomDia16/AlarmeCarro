import React from "react";
import { View, Text, StyleSheet, Pressable, Alert, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TextInputMask } from "react-native-masked-text";
import { useState } from 'react';
import useStorage from "../../../hooks/useStorage";

export function CarroItem({ data, removeCarro, updateCarro }){
    return (
        <Pressable onPress={updateCarro} style={styles.container}>
            <Text style={styles.text}>{data.placa}</Text>
            <Text style={styles.text}>{data.marca}</Text>
            <Text style={styles.text}>{data.modelo}</Text>
            <Text style={styles.text}>{data.cor}</Text>
            <Ionicons name="close" size={24} color="red" onPress={removeCarro} />
        </Pressable>
    )
}

export function ModalCarro({handleClose, data}) {

    const { updateItem } = useStorage();

    const [placaCarro, updatePlacaCarro] = useState(data.placa)
    const [marcaCarro, updateMarcaCarro] = useState(data.marca)
    const [modeloCarro, updateModeloCarro] = useState(data.modelo)
    const [corCarro, updateCorCarro] = useState(data.cor)

    async function handleUpdateCar() {
        const carro = {
            placa: '',
            marca: '',
            modelo: '',
            cor: '',
        }

        if (placaCarro === "" || marcaCarro === "" || modeloCarro === "" || corCarro === "") {
            Alert.alert("Preencha todos os campos!")
        } else {
            carro.placa += placaCarro
            carro.marca += marcaCarro
            carro.modelo += modeloCarro
            carro.cor += corCarro

            //console.log(carro.placa,carro.cor,carro.marca,carro.modelo)

            await updateItem('@car', carro)

            alert('Carro salvo com sucesso!')
            handleClose();
        }
    }

    return (
        <View style={styles.containerModal}>
            <View style={styles.contentModal}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Editar Carro: {data.modelo}{data.cor}</Text>
                    <Ionicons size={30} color={'blue'} name='car' />
                </View>

                <View style={styles.formArea}>
                    <TextInputMask style={styles.input} 
                                placeholder='Placa' 
                                type={'custom'}
                                options={{ mask: 'AAA-9999' }}
                                placeholderTextColor="#161616" 
                                value={placaCarro}
                                onChangeText={ (value) => updatePlacaCarro(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Marca' 
                                placeholderTextColor="#161616"
                                value={marcaCarro}
                                onChangeText={ (value) => updateMarcaCarro(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Modelo' 
                                placeholderTextColor="#161616"
                                value={modeloCarro}
                                onChangeText={ (value) => updateModeloCarro(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Cor' 
                                placeholderTextColor="#161616"
                                value={corCarro}
                                onChangeText={ (value) => updateCorCarro(value) }/>
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleUpdateCar}>
                        <Ionicons style={styles.buttonSaveText} size={25} name='add' />
                    </TouchableOpacity>
                </View>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#474A51",
        padding:14,
        width:"100%",
        marginBottom:14,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    text:{
        color:'#FFF',
    },
    containerModal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      texto:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000',
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
      header:{
        backgroundColor: '#392de9',
        paddingTop:58,
        paddingBottom:14,
        paddingLeft:14,
        paddingRight:14,
      },
      title:{
          fontSize:18,
          color:'#FFF',
          fontWeight:'bold',
      },
      content:{
          flex:1,
          paddingLeft:14,
          paddingRight:14,
      },
      text:{
        color:'#FFF',
      },
      containerTabela: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width:"100%",
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 30,
      },
      containerModal:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    contentModal:{
        backgroundColor: '#FFF',
        width: '85%',
        paddingBottom: 24,
        paddingTop:24,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 8,
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
})