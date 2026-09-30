import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StudentCard } from '../components/StudentCard.jsx';
import { STUDENT } from '../data/studentData.jsx';

// PANTALLA 1: información del estudiante + botón que navega a la Pantalla 2
export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <Text style={styles.header}>Práctica Móvil 2</Text>
        <Text style={styles.sub}>Pantalla 1 — Datos del estudiante</Text>

        <StudentCard
          nombre={STUDENT.nombre}
          cedula={STUDENT.cedula}
          seccion={STUDENT.seccion}
          grupo={STUDENT.grupo}
        />

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          onPress={() => navigation.navigate('Shows')}>
          <Text style={styles.buttonText}>Ir a Pantalla 2 (Shows TVMaze)</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#12061F',
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  sub: {
    fontSize: 15,
    color: '#C9BFD9',
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#E650AA',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
