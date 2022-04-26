import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from './theme'

const Button = ({name, onClickHandle,backgroundColor}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:backgroundColor}]} onPress={()=>onClickHandle()}>
        <Text style={styles.tt18SB}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor:color.primary,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        paddingHorizontal:20
    },
    tt18SB: {
        color: color.white,
        fontFamily: "Biennale-SemiBold",
        fontSize: 18,
      },
})