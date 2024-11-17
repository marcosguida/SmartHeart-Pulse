import { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import styles from './textInput-style'

export default function (props: any) {
  return <TextInput placeholder={props.placeholder} value={props.value} onChangeText={props.onChange} style={styles.input__main} />
}
