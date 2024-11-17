import { Text, View } from 'react-native'
import styles from './connection-style'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import { useMQTT } from '@/hoc/MQTTContext'
import { connectMQTT } from '@/scripts/connectMQTT'

export default function Connection() {
  const { isConnected, userNameMQTT, host, port, senha, setUsernameMQTT, setHost, setPort, setSenha, setConnected, setClient } = useMQTT()

  const defineClient = (client: any) => {
    setClient(client)
  }

  const onConnectEvent = (text: any) => {
    setConnected(text)
  }

  return (
    <View style={styles.connection__main__section}>
      <View style={styles.connection__main__section__header}>
        <Text style={styles.connection__main__section__header__title}>Realizar Conexão</Text>
        <Text style={styles.connection__main__section__header__text}>Conecte-se ao Broker MQTT para verificar seus batimentos cardíacos</Text>
        <Text style={styles.connection__main__section__header__status}>{isConnected}</Text>
      </View>
      <View style={styles.connection__main__section__form}>
        <TextInput placeholder="Nome de usuário" value={userNameMQTT} onChange={setUsernameMQTT} />
        <TextInput placeholder="Endereço do Broker" value={host} onChange={setHost} />
        <TextInput placeholder="Porta" value={port} onChange={setPort} />
        <TextInput placeholder="Senha" value={senha} onChange={setSenha} />
        <Button text="Conectar" onPress={() => connectMQTT(userNameMQTT, senha, host, port, onConnectEvent, defineClient)} />
      </View>
    </View>
  )
}
