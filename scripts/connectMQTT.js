import init from 'react_native_mqtt'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const connectMQTT = (userName, password, host, port, onConnectEvent, defineClient) => {
  init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {},
  })

  if (
    userName != undefined &&
    userName != '' &&
    password != undefined &&
    password != '' &&
    host != undefined &&
    host != '' &&
    port != undefined &&
    port != '' &&
    onConnectEvent &&
    defineClient
  ) {
    try {
      if (!userName.includes('@')) {
        return alert('Informe um usuário MQTT válido!')
      } else if (host != 'maqiatto.com') {
        return alert('Informe um host válido!')
      } else if (typeof Number(port) != 'number') {
        return alert('A porta deve possuir apenas números!')
      } else {
        const mqttClient = new Paho.MQTT.Client(host, parseInt(port), '')
        mqttClient.onConnectionLost = () => onConnectEvent('Desconectado')
        mqttClient.connect({ userName: userName, password: password, onSuccess: () => onConnectEvent('Conectado'), useSSL: false })
        defineClient(mqttClient)
      }
    } catch (err) {
      return alert(err)
    }
  } else {
    alert('Preencha todos os campos!')
  }
}
