import { Image, StyleSheet, Text, View } from 'react-native';

// Componente reutilizable: tarjeta con la información del estudiante (Pantalla 1)
export function StudentCard({ nombre, cedula, seccion, grupo }) {
  return (
    <View style={styles.card}>
      <Image source={require('../../assets/images/splash-icon.png')} style={styles.avatar} />
      <Text style={styles.title}>{nombre}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Cédula: </Text>
        <Text style={styles.value}>{cedula}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Sección: </Text>
        <Text style={styles.value}>{seccion}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Grupo: </Text>
        <Text style={styles.value}>{grupo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#241040',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: '#6E1EA0',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
    backgroundColor: '#200A3D',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E650AA',
  },
  value: {
    fontSize: 16,
    color: '#fff',
  },
});
