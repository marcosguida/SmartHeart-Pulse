import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Connection from '../screens/Connection'
import { TabRoutes } from './TabRoutes'

const Stack = createStackNavigator()

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="TabRoutes">
      <Stack.Screen name="TabRoutes" component={TabRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Connection" component={Connection} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
