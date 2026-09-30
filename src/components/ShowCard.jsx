import { Image, StyleSheet, Text, View } from 'react-native';

// Componente reutilizable: tarjeta para cada show de TVMaze (Pantalla 2)
export function ShowCard({ show }) {
  const imageUrl = show?.image?.medium ?? show?.image?.original ?? null;
  const genres = Array.isArray(show?.genres) ? show.genres.join(' • ') : '';
  const rating = show?.rating?.average ?? 'N/A';

  return (
    <View style={styles.card}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.poster} resizeMode="cover" />
      ) : (
        <View style={[styles.poster, styles.noImage]}>
          <Text style={styles.noImageText}>Sin imagen</Text>
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {show?.name ?? 'Sin nombre'}
        </Text>
        {!!genres && (
          <Text style={styles.genres} numberOfLines={2}>
            {genres}
          </Text>
        )}
        <Text style={styles.meta}>
          ⭐ {rating}  |  {show?.language ?? ''}  |  {show?.status ?? ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#241040',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#6E1EA0',
  },
  poster: {
    width: 90,
    height: 130,
  },
  noImage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A1A5E',
  },
  noImageText: {
    color: '#fff',
    fontSize: 12,
  },
  info: {
    flex: 1,
    padding: 12,
    gap: 4,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  genres: {
    fontSize: 13,
    color: '#E650AA',
    fontWeight: '600',
  },
  meta: {
    fontSize: 12,
    color: '#C9BFD9',
    marginTop: 4,
  },
});
