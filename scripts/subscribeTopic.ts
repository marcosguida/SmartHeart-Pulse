import { useMQTT } from '@/hoc/MQTTContext'

export const subscribeToTopic = (topic: any, client: any, userNameMQTT: any) => {
  try {
    console.log('Subscrevendo no tópico...')
    client.subscribe(`${userNameMQTT}/${topic}`, { qos: 0 })
  } catch (err) {
    console.log('Erro ao subscrever no tópico: ', err)
  }
}
