import { Text, View } from 'react-native'
import styles from './home-style'
import Pulse from '@/components/Pulse'
import { subscribeToTopic } from '@/scripts/subscribeTopic'
import { useMQTT } from '@/hoc/MQTTContext'
import { useEffect, useState } from 'react'

export default function Home() {
  const { client, userNameMQTT, isConnected } = useMQTT()
  const [pulso, setPulso] = useState(0)

  if (client && isConnected == 'Conectado') {
    try {
      subscribeToTopic('pulso', client, userNameMQTT)
      client.onMessageArrived = (message: any) => {
        console.log(message.payloadString)
        setPulso(parseInt(message.payloadString))
      }
    } catch (err) {
      alert('Erro ao subscrever no tópico: ' + err)
    }
  }

  return (
    <View style={styles.home__main__section}>
      <Pulse pulse={pulso} />
    </View>
  )
}
