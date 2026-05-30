import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const apiClient = axios.create({ baseURL: '/api' });

const mock = new MockAdapter(apiClient, { delayResponse: 500 });

/* ──────────────────────────────────────────────────────────
   Helper: build YouTube search URL
   ────────────────────────────────────────────────────────── */
const yt = (artist, song) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(artist + ' ' + song)}`;

/* ──────────────────────────────────────────────────────────
   Mock dataset
   ────────────────────────────────────────────────────────── */
const RECOMMENDATIONS = {
  'Ansiedad Generalizada': [
    {
      nombre_cancion: 'Somebody to Love',
      Nombre_Artista: 'Frank Ocean',
      ritmo: 74,
      energia: 0.215,
      acustica: 0.712,
      intensidad_sonora: -18.4,
      genero: 'R&B / Soul',
      url_youtube: yt('Frank Ocean', 'Somebody to Love'),
    },
    {
      nombre_cancion: 'The Night We Met',
      Nombre_Artista: 'Lord Huron',
      ritmo: 64,
      energia: 0.198,
      acustica: 0.832,
      intensidad_sonora: -20.1,
      genero: 'Indie Folk',
      url_youtube: yt('Lord Huron', 'The Night We Met'),
    },
    {
      nombre_cancion: 'Gravity',
      Nombre_Artista: 'Sara Bareilles',
      ritmo: 71,
      energia: 0.242,
      acustica: 0.789,
      intensidad_sonora: -17.8,
      genero: 'Pop / Soft Rock',
      url_youtube: yt('Sara Bareilles', 'Gravity'),
    },
    {
      nombre_cancion: 'Holocene',
      Nombre_Artista: 'Bon Iver',
      ritmo: 68,
      energia: 0.189,
      acustica: 0.901,
      intensidad_sonora: -21.3,
      genero: 'Indie Folk',
      url_youtube: yt('Bon Iver', 'Holocene'),
    },
    {
      nombre_cancion: 'Breathe (2 AM)',
      Nombre_Artista: 'Anna Nalick',
      ritmo: 72,
      energia: 0.223,
      acustica: 0.856,
      intensidad_sonora: -19.5,
      genero: 'Pop / Folk',
      url_youtube: yt('Anna Nalick', 'Breathe 2 AM'),
    },
  ],

  'TDAH (Concentración)': [
    {
      nombre_cancion: 'Clocks',
      Nombre_Artista: 'Coldplay',
      ritmo: 131,
      energia: 0.672,
      acustica: 0.043,
      intensidad_sonora: -6.8,
      genero: 'Alternative Rock',
      url_youtube: yt('Coldplay', 'Clocks'),
    },
    {
      nombre_cancion: 'Experience',
      Nombre_Artista: 'Ludovico Einaudi',
      ritmo: 82,
      energia: 0.318,
      acustica: 0.874,
      intensidad_sonora: -14.2,
      genero: 'Neoclásica',
      url_youtube: yt('Ludovico Einaudi', 'Experience'),
    },
    {
      nombre_cancion: 'Divenire',
      Nombre_Artista: 'Ludovico Einaudi',
      ritmo: 86,
      energia: 0.412,
      acustica: 0.822,
      intensidad_sonora: -12.7,
      genero: 'Neoclásica',
      url_youtube: yt('Ludovico Einaudi', 'Divenire'),
    },
    {
      nombre_cancion: 'Comptine d\'un autre été',
      Nombre_Artista: 'Yann Tiersen',
      ritmo: 76,
      energia: 0.195,
      acustica: 0.953,
      intensidad_sonora: -16.4,
      genero: 'Neoclásica / Soundtrack',
      url_youtube: yt('Yann Tiersen', "Comptine d'un autre été"),
    },
    {
      nombre_cancion: 'Time',
      Nombre_Artista: 'Hans Zimmer',
      ritmo: 54,
      energia: 0.334,
      acustica: 0.441,
      intensidad_sonora: -13.9,
      genero: 'Soundtrack / Orquestal',
      url_youtube: yt('Hans Zimmer', 'Time Inception'),
    },
  ],

  'Ataques de Pánico / Estrés Agudo': [
    {
      nombre_cancion: 'Weightless',
      Nombre_Artista: 'Marconi Union',
      ritmo: 60,
      energia: 0.094,
      acustica: 0.511,
      intensidad_sonora: -24.1,
      genero: 'Ambient',
      url_youtube: yt('Marconi Union', 'Weightless'),
    },
    {
      nombre_cancion: 'Clair de Lune',
      Nombre_Artista: 'Claude Debussy',
      ritmo: 58,
      energia: 0.112,
      acustica: 0.978,
      intensidad_sonora: -22.4,
      genero: 'Clásica',
      url_youtube: yt('Debussy', 'Clair de Lune'),
    },
    {
      nombre_cancion: 'River Flows in You',
      Nombre_Artista: 'Yiruma',
      ritmo: 62,
      energia: 0.135,
      acustica: 0.962,
      intensidad_sonora: -21.8,
      genero: 'Neoclásica',
      url_youtube: yt('Yiruma', 'River Flows in You'),
    },
    {
      nombre_cancion: 'The Sound of Silence',
      Nombre_Artista: 'Simon & Garfunkel',
      ritmo: 67,
      energia: 0.176,
      acustica: 0.881,
      intensidad_sonora: -19.2,
      genero: 'Folk',
      url_youtube: yt('Simon Garfunkel', 'The Sound of Silence'),
    },
    {
      nombre_cancion: 'Gymnopédie No.1',
      Nombre_Artista: 'Erik Satie',
      ritmo: 56,
      energia: 0.089,
      acustica: 0.991,
      intensidad_sonora: -25.3,
      genero: 'Clásica',
      url_youtube: yt('Erik Satie', 'Gymnopédie No 1'),
    },
  ],

  'Insomnio': [
    {
      nombre_cancion: 'Sleep',
      Nombre_Artista: 'Max Richter',
      ritmo: 52,
      energia: 0.072,
      acustica: 0.623,
      intensidad_sonora: -26.7,
      genero: 'Ambient / Neoclásica',
      url_youtube: yt('Max Richter', 'Sleep'),
    },
    {
      nombre_cancion: 'Nuvole Bianche',
      Nombre_Artista: 'Ludovico Einaudi',
      ritmo: 58,
      energia: 0.148,
      acustica: 0.944,
      intensidad_sonora: -20.8,
      genero: 'Neoclásica',
      url_youtube: yt('Ludovico Einaudi', 'Nuvole Bianche'),
    },
    {
      nombre_cancion: 'Stars',
      Nombre_Artista: 'Moby',
      ritmo: 55,
      energia: 0.095,
      acustica: 0.512,
      intensidad_sonora: -23.4,
      genero: 'Ambient Electronic',
      url_youtube: yt('Moby', 'Stars'),
    },
    {
      nombre_cancion: 'The Night',
      Nombre_Artista: 'Zack Hemsey',
      ritmo: 60,
      energia: 0.162,
      acustica: 0.387,
      intensidad_sonora: -21.1,
      genero: 'Ambient',
      url_youtube: yt('Zack Hemsey', 'The Night'),
    },
    {
      nombre_cancion: 'Dream a Little Dream of Me',
      Nombre_Artista: 'Doris Day',
      ritmo: 68,
      energia: 0.201,
      acustica: 0.774,
      intensidad_sonora: -17.6,
      genero: 'Jazz / Vocal',
      url_youtube: yt('Doris Day', 'Dream a Little Dream of Me'),
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Generic fallback data generator
   ────────────────────────────────────────────────────────── */
function buildFallback(condition) {
  const profiles = {
    relajacion: {
      songs: [
        { song: 'Gymnopédie No.1', artist: 'Erik Satie', bpm: 56, energy: 0.089, acoustic: 0.991, loud: -25.3, genre: 'Clásica' },
        { song: 'Clair de Lune', artist: 'Debussy', bpm: 58, energy: 0.112, acoustic: 0.978, loud: -22.4, genre: 'Clásica' },
        { song: 'River Flows in You', artist: 'Yiruma', bpm: 62, energy: 0.135, acoustic: 0.962, loud: -21.8, genre: 'Neoclásica' },
        { song: 'Weightless', artist: 'Marconi Union', bpm: 60, energy: 0.094, acoustic: 0.511, loud: -24.1, genre: 'Ambient' },
        { song: 'Nuvole Bianche', artist: 'Ludovico Einaudi', bpm: 58, energy: 0.148, acoustic: 0.944, loud: -20.8, genre: 'Neoclásica' },
      ],
    },
    calma: {
      songs: [
        { song: 'The Scientist', artist: 'Coldplay', bpm: 75, energy: 0.298, acoustic: 0.702, loud: -15.2, genre: 'Alternative Rock' },
        { song: 'Skinny Love', artist: 'Bon Iver', bpm: 79, energy: 0.267, acoustic: 0.834, loud: -16.8, genre: 'Indie Folk' },
        { song: 'Mad World', artist: 'Gary Jules', bpm: 84, energy: 0.241, acoustic: 0.778, loud: -17.4, genre: 'Pop' },
        { song: 'Fix You', artist: 'Coldplay', bpm: 69, energy: 0.282, acoustic: 0.621, loud: -14.9, genre: 'Alternative Rock' },
        { song: 'Yellow', artist: 'Coldplay', bpm: 89, energy: 0.373, acoustic: 0.558, loud: -13.1, genre: 'Alternative Rock' },
      ],
    },
    activacion: {
      songs: [
        { song: 'Viva la Vida', artist: 'Coldplay', bpm: 138, energy: 0.622, acoustic: 0.089, loud: -7.3, genre: 'Alternative Rock' },
        { song: 'Mr. Brightside', artist: 'The Killers', bpm: 148, energy: 0.688, acoustic: 0.034, loud: -5.8, genre: 'Indie Rock' },
        { song: 'Uprising', artist: 'Muse', bpm: 128, energy: 0.741, acoustic: 0.021, loud: -4.6, genre: 'Alternative Rock' },
        { song: 'Seven Nation Army', artist: 'The White Stripes', bpm: 124, energy: 0.594, acoustic: 0.112, loud: -8.2, genre: 'Garage Rock' },
        { song: 'Bohemian Rhapsody', artist: 'Queen', bpm: 72, energy: 0.401, acoustic: 0.294, loud: -9.4, genre: 'Rock Clásico' },
      ],
    },
    energia: {
      songs: [
        { song: 'Eye of the Tiger', artist: 'Survivor', bpm: 109, energy: 0.834, acoustic: 0.012, loud: -3.8, genre: 'Rock' },
        { song: 'Don\'t Stop Me Now', artist: 'Queen', bpm: 156, energy: 0.921, acoustic: 0.019, loud: -2.4, genre: 'Rock Clásico' },
        { song: 'Thunderstruck', artist: 'AC/DC', bpm: 133, energy: 0.911, acoustic: 0.008, loud: -3.1, genre: 'Hard Rock' },
        { song: 'Lose Yourself', artist: 'Eminem', bpm: 171, energy: 0.873, acoustic: 0.023, loud: -4.2, genre: 'Hip-Hop / Rap' },
        { song: 'Stronger', artist: 'Kanye West', bpm: 104, energy: 0.762, acoustic: 0.015, loud: -5.6, genre: 'Hip-Hop / Electronic' },
      ],
    },
  };

  const relajacionConditions = ['Fibromialgia', 'TEA (Autismo)', 'TEPT', 'Migraña', 'Tinnitus'];
  const energiaConditions = ['Cardiopatía / Rehabilitación Cardíaca(Ejercicio)', 'Parkinson', 'TDAH (Energía/Estimulación)', 'Obesidad', 'Epilepsia'];
  const activacionConditions = ['Depresión Leve-Moderada', 'Rehabilitación de Ictus', 'Esclerosis Múltiple', 'Asma / EPOC', 'TDAH (Concentración)', 'TEA – Intervención Conductual', 'TEA – Estimulación Social'];

  let profile = 'calma';
  if (relajacionConditions.some(c => condition.includes(c.split(' ')[0]))) profile = 'relajacion';
  else if (energiaConditions.some(c => condition.includes(c.split(' ')[0]))) profile = 'energia';
  else if (activacionConditions.some(c => condition.includes(c.split(' ')[0]))) profile = 'activacion';

  return profiles[profile].songs.map(s => ({
    nombre_cancion: s.song,
    Nombre_Artista: s.artist,
    ritmo: s.bpm,
    energia: s.energy,
    acustica: s.acoustic,
    intensidad_sonora: s.loud,
    genero: s.genre,
    url_youtube: yt(s.artist, s.song),
  }));
}

/* ──────────────────────────────────────────────────────────
   Register mock endpoint
   ────────────────────────────────────────────────────────── */
mock.onGet('/recommendations').reply(config => {
  const condition = config.params?.condition ?? '';

  const songs = RECOMMENDATIONS[condition] ?? buildFallback(condition);

  return [
    200,
    {
      condition,
      total: songs.length,
      songs,
    },
  ];
});

export default apiClient;
