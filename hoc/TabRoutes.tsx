import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Connection from '../screens/Connection'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/constants/variables'

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  const heightTabBar = Platform.OS === 'ios' ? 100 : 55

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'hsl(228, 6%, 12%)',
          borderTopColor: 'hsl(228, 6%, 12%)',
          height: heightTabBar,
          position: 'sticky',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.red[100],
        tabBarInactiveTintColor: colors.white[100],
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Feather name="home" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="Connection"
        component={Connection}
        options={{
          tabBarIcon: ({ color }) => <Feather name="wifi" color={color} size={20} />,
        }}
      />
    </Tab.Navigator>
  )
}
