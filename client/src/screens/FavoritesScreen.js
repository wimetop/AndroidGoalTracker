import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

export default function FavoritesScreen() {

  const { goals } = useSelector(state => state.goals)

  const favGoals = goals.filter(g => g.isFavorite)

  if (favGoals.length === 0) {
    return <Text>No favorite goals</Text>
  }

  return (
    <FlatList
      data={favGoals}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Text>{item.title}</Text>
      )}
    />
  )
}