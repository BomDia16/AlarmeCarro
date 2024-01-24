import React from "react";
import { View, Text, StyleSheet, Pressable, Alert, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TextInputMask } from "react-native-masked-text";

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
    return (
        <View style={styles.containerModal}>
            <View style={styles.content}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Editar Carro {data.id}</Text>
                    <Ionicons size={30} color={'blue'} name='car' />
                </View>

                <View style={styles.formArea}>
                    <TextInputMask style={styles.input} 
                                placeholder='Placa' 
                                type={'custom'}
                                options={{ mask: 'AAA-9999' }}
                                placeholderTextColor="#161616" 
                                value={data.placa}
                                onChangeText={ (value) => setPlacaCarro(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Marca' 
                                placeholderTextColor="#161616"
                                value={data.marca}
                                onChangeText={ (value) => setMarcaCarro(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Modelo' 
                                placeholderTextColor="#161616"
                                value={data.modelo}
                                onChangeText={ (value) => setModeloCarro(value) }/>

                    <TextInput style={styles.input} 
                                placeholder='Cor' 
                                placeholderTextColor="#161616"
                                value={data.cor}
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
      }
})