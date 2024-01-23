import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export function CarroItem({ data, removeCarro }){
    return (
        <Pressable onLongPress={removeCarro} style={styles.container}>
            <Text style={styles.text}>{data.placa}</Text>
            <Text style={styles.text}>{data.marca}</Text>
            <Text style={styles.text}>{data.modelo}</Text>
            <Text style={styles.text}>{data.cor}</Text>
        </Pressable>
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
    }
})