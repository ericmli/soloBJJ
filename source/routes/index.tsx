import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './stack.routes'

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}