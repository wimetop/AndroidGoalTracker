import { useState } from 'react'
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGoal, toggleFavorite, updateGoal } from '../store/goalsSlice'

export default function GoalDetailsScreen({ route, navigation }) {
  const dispatch = useDispatch()
  const { id } = route.params
  const goals = useSelector(state => state.goals.goals)

  const goal = goals.find(g => g._id === id)

  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState(goal?.title || '')
  const [description, setDescription] = useState(goal?.description || '')
  // const [isFavorite, setIsFavorite] = useState(goal?.isFavorite || false)

  if (!goal) {
    return <Text>Goal not found</Text>
  }

  const handleSave = () => {
    dispatch(updateGoal({
      id: goal._id,
      updatedData: { title, description, isFavorite }
    }))
    setShowForm(false)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{goal.title}</Text>
      <Text style={styles.description}>{goal.description}</Text>

      <Button
        title={goal.isFavorite ? "Unfavorite" : "Favorite"}
        onPress={() => dispatch(toggleFavorite(id))}
      />

      <Button
        title={showForm ? "Hide Update Form" : "Update Goal"}
        onPress={() => setShowForm(prev => !prev)}
      />

      {showForm && (
        <View style={styles.form}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            value={description}
            onChangeText={setDescription}
            multiline
          />

          {/* <View style={styles.favoriteRow}>
            <Text style={styles.label}>Favorite:</Text>
            <Switch
              value={isFavorite}
              onValueChange={setIsFavorite}
            />
          </View> */}

          <Button title="Save" onPress={handleSave} />
        </View>
      )}

      <Button
        title="Delete Goal"
        onPress={() => {
          dispatch(deleteGoal(id))
          navigation.goBack()
        }}
        color="red"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 15
  },
  form: {
    marginTop: 20,
    marginBottom: 20
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 15,
    borderRadius: 5
  },
  favoriteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  }
})