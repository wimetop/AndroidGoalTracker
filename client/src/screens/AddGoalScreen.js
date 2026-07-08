import { View, TextInput, Button } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGoal } from '../store/goalsSlice'

export default function AddGoalScreen({ navigation }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const dispatch = useDispatch()

  const saveGoal = () => {

    dispatch(addGoal({
      title,
      description
    }))

    navigation.goBack()
  }

  return (
    <View>

      <TextInput
        placeholder="Goal title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <Button
        title="Save"
        onPress={saveGoal}
      />

    </View>
  )
}