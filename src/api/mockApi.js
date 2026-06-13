import axios from 'axios';

const API_URL = 'https://zap-attractor-payphone.ngrok-free.dev';

export const apiClient = axios.create({ 
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true'
  }
});

const yt = (artist, song) =>
  https://www.youtube.com/results?search_query=${encodeURIComponent(artist + ' ' + song)};

export async function getRecommendations(condition) {
  const response = await apiClient.post('/recomendar', {
    consulta   : condition,
    n_canciones: 5
  });

  const data = response.data;

  const songs = data.canciones.map(cancion => ({
    nombre_cancion   : cancion['Canción'],
    Nombre_Artista   : cancion['Artista'],
    ritmo            : cancion['BPM'],
    energia          : cancion['Energía'],
    acustica         : cancion['Acousticness'] ?? 0,
    intensidad_sonora: cancion['Loudness'] ?? 0,
    genero           : cancion['Género'],
    url_youtube      : yt(cancion['Artista'], cancion['Canción']),
    metodo           : cancion['Método']
  }));

  return {
    condition,
    perfil      : data.perfil,
    explicacion : data.explicacion,
    total       : songs.length,
    songs
  };
}

export default apiClient;