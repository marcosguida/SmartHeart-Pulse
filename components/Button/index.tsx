import { Text, TouchableOpacity } from 'react-native'
import styles from './button-style'

export default function (props: any) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button__main}>
      <Text style={styles.button__text}>{props.text}</Text>
    </TouchableOpacity>
  )
}
