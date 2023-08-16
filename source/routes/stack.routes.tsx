import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home"
import { First } from "../screens/First"

const Stack = createNativeStackNavigator()

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='First'>
      <Stack.Screen
        name='First'
        component={First}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}