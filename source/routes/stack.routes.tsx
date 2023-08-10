import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home"
import { Timer } from "../screens/Timer"

const Stack = createNativeStackNavigator()

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Timer'
        component={Timer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}