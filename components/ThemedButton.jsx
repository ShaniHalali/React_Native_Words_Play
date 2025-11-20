import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from "../constants/Color"


const ThemedButton = ({style,color, ...props}) => {
  
  const backgroundColor = color != null ? color : Colors.primary;

  return (
    <Pressable
    style={({ pressed }) => [styles.btn,{backgroundColor}, pressed && styles.pressed, style]}
    {...props}
    />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 6,
    marginVertical: 10
  },
  pressed: {
    opacity: 0.5
  },
})