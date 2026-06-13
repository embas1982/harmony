import { useState, useCallback } from 'react';
import { getRecommendations } from '../api/mockApi';

export function useRecommendations() {
  const [songs, setSongs]       = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);
  const [perfil, setPerfil]     = useState(null);
  const [explicacion, setExplicacion] = useState(null);

  const fetchRecommendations = useCallback(async (condition) => {
    if (!condition) return;
    setLoading(true);
    setError(null);
    setSongs(null);
    setPerfil(null);
    setExplicacion(null);

    try {
      const result = await getRecommendations(condition);
      setSongs(result.songs);
      setPerfil(result.perfil);
      setExplicacion(result.explicacion);
    } catch (err) {
      setError('No se pudo conectar con HarmonyAI. Verifica que el servidor esté corriendo.');
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setSongs(null);
    setError(null);
    setLoading(false);
    setPerfil(null);
    setExplicacion(null);
  }, []);

  return { songs, loading, error, perfil, explicacion, fetchRecommendations, reset };
}