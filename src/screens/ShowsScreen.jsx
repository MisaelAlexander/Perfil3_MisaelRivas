import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ShowCard } from '../components/ShowCard.jsx';
import { useShows } from '../hooks/useShows.jsx';

// PANTALLA 2: consume https://api.tvmaze.com/shows con el custom hook useShows
export function ShowsScreen() {
  const { shows, loading, error, refresh } = useShows();

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#E650AA" />
        <Text style={styles.info}>Cargando shows de TVMaze…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.error}>Ocurrió un error:{'\n'}{error}</Text>
        <Pressable style={styles.button} onPress={refresh}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <FlatList
        data={shows}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        refreshing={loading}
        onRefresh={refresh}
        ListHeaderComponent={<Text style={styles.header}>Shows — TVMaze (Pantalla 2)</Text>}
        renderItem={({ item }) => <ShowCard show={item} />}
      />
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
    backgroundColor: '#12061F',
    padding: 16,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  list: {
    padding: 16,
    gap: 4,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  info: {
    color: '#C9BFD9',
    fontSize: 15,
  },
  error: {
    color: '#FF8A8A',
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#E650AA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
