import { createContext, ReactNode, useContext, useState } from 'react'

// Define as interfaces para o contexto MQTT
interface MQTTContextProps {
  client: any // Ajuste o tipo para o cliente MQTT específico, se conhecido
  isConnected: string
  nome: string
  userNameMQTT: string
  senha: string
  host: string
  port: string
  setClient: (client: any) => void
  setConnected: (status: string) => void
  setNome: (nome: string) => void
  setUsernameMQTT: (username: string) => void
  setSenha: (senha: string) => void
  setHost: (host: string) => void
  setPort: (port: string) => void
}

interface MQTTProviderProps {
  children: ReactNode
}

// Criação do contexto com tipo ou valor inicial vazio
const MQTTContext = createContext<MQTTContextProps | undefined>(undefined)

export const MQTTProvider = ({ children }: MQTTProviderProps) => {
  const [client, setClient] = useState<any>(null) // Substitua `any` pelo tipo real do cliente MQTT
  const [isConnected, setConnected] = useState('Desconectado')
  const [nome, setNome] = useState('')
  const [userNameMQTT, setUsernameMQTT] = useState('')
  const [senha, setSenha] = useState('')
  const [host, setHost] = useState('')
  const [port, setPort] = useState('')

  return (
    <MQTTContext.Provider
      value={{
        client,
        isConnected,
        nome,
        userNameMQTT,
        senha,
        host,
        port,
        setClient,
        setConnected,
        setNome,
        setUsernameMQTT,
        setSenha,
        setHost,
        setPort,
      }}
    >
      {children}
    </MQTTContext.Provider>
  )
}

// Hook para acessar o contexto MQTT
export const useMQTT = (): MQTTContextProps => {
  const context = useContext(MQTTContext)

  if (!context) {
    throw new Error('useMQTT deve ser usado dentro de um MQTTProvider')
  }

  return context
}
