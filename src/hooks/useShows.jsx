import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://api.tvmaze.com/shows';

// Hook personalizado: separa la lógica de consumo de la API de la UI.
// Expone { shows, loading, error, refresh }.
export function useShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchShows = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error('Error HTTP: ' + res.status);
      }
      const data = await res.json();
      // Limitamos a 30 para que la lista sea fluida en el móvil
      setShows(Array.isArray(data) ? data.slice(0, 30) : []);
    } catch (e) {
      setError(e?.message ?? 'Error desconocido al cargar los shows');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  return { shows, loading, error, refresh: fetchShows };
}
