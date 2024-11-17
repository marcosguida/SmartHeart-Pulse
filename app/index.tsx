import { SafeAreaView } from 'react-native-safe-area-context'
import { Routes } from '../hoc/Routes'
import { MQTTProvider } from '../hoc/MQTTContext'
import { useLoadFonts } from '../hooks/useLoadFonts'
import LoadingScreen from '@/screens/LoadingScreen'

export default function App() {
  const fontsLoaded = useLoadFonts()

  if (!fontsLoaded) {
    return <LoadingScreen />
  }

  return (
    <MQTTProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </MQTTProvider>
  )
}
