import { colors } from '@/constants/variables'
import { ActivityIndicator, View } from 'react-native'

export default function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.dark[100] }}>
      <ActivityIndicator size="large" color={colors.white[100]} />
    </View>
  )
}
