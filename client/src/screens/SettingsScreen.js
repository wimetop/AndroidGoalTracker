import { View, Text, Switch } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../store/goalsSlice'

export default function SettingsScreen() {

  const dispatch = useDispatch()

const darkMode = useSelector(state => state.goals.darkMode ?? false)
  const handleToggle = () => {
    dispatch(toggleDarkMode())
  }

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Dark Mode
      </Text>

      <Switch
        value={Boolean(darkMode)}
        onValueChange={handleToggle}
      />

    </View>
  )
}