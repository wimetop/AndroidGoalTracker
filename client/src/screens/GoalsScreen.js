import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchGoals } from '../store/goalsSlice'

export default function GoalsScreen({ navigation }) {

  const goals = useSelector(state => state.goals.goals)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGoals())
  }, [])

  return (
    <View>

      <Button
        title="Add Goal"
        onPress={() => navigation.navigate("AddGoal")}
      />

      <FlatList
        data={goals}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("GoalDetails", { id: item._id })
            }
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>

        )}
      />

    </View>
  )
}