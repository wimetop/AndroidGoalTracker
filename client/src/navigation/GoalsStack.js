import { createNativeStackNavigator } from '@react-navigation/native-stack'

import GoalsScreen from '../screens/GoalsScreen'
import GoalDetailsScreen from '../screens/GoalDetailsScreen'
import AddGoalScreen from '../screens/AddGoalScreen'

const Stack = createNativeStackNavigator()

export default function GoalsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GoalsList" component={GoalsScreen} />
      <Stack.Screen name="GoalDetails" component={GoalDetailsScreen} />
      <Stack.Screen name="AddGoal" component={AddGoalScreen} />
    </Stack.Navigator>
  )
}