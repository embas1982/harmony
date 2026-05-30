import { useState, useCallback } from 'react';
import apiClient from '../api/mockApi';

export function useRecommendations() {
  const [songs, setSongs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = useCallback(async (condition) => {
    if (!condition) return;
    setLoading(true);
    setError(null);
    setSongs(null);

    try {
      const { data } = await apiClient.get('/recommendations', {
        params: { condition },
      });
      setSongs(data.songs);
    } catch (err) {
      setError(err.message ?? 'Error al obtener las recomendaciones. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setSongs(null);
    setError(null);
    setLoading(false);
  }, []);

  return { songs, loading, error, fetchRecommendations, reset };
}
