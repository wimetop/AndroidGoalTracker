import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import GoalsStack from './GoalsStack'
import FavoritesScreen from '../screens/FavoritesScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator>

      <Tab.Screen name="Goals" component={GoalsStack} />

      <Tab.Screen name="Favorites" component={FavoritesScreen} />

      <Tab.Screen name="Settings" component={SettingsScreen} />

    </Tab.Navigator>
  )
}