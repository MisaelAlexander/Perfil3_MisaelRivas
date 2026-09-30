import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen.jsx';
import { ShowsScreen } from '../screens/ShowsScreen.jsx';

const Stack = createNativeStackNavigator();

// Navegación entre pantallas con React Navigation (Stack)
export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#241040' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#12061F' },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Pantalla 1 — Estudiante' }}
        />
        <Stack.Screen
          name="Shows"
          component={ShowsScreen}
          options={{ title: 'Pantalla 2 — TVMaze' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
