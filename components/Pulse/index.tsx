import { StyleSheet, Text, View } from 'react-native'
import styles from './pulse-style'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'

export default function Pulse(props: any) {
  return (
    <View style={[{ flex: 1 }, styles.center]}>
      <View style={[styles.pulse__main__section, styles.center]}>
        {[...Array(3)].map((_, index) => {
          return (
            <MotiView
              key={index}
              from={{
                opacity: 0.7,
                scale: 1,
              }}
              animate={{
                opacity: 0,
                scale: 2.5,
              }}
              transition={{
                type: 'timing',
                duration: 3000,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                repeatReverse: false,
                loop: true,
              }}
              style={[StyleSheet.absoluteFillObject, styles.pulse__main__section]}
            />
          )
        })}
        <Text style={styles.pulse__text}>{props.pulse}</Text>
      </View>
    </View>
  )
}
