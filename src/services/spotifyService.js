const ACCESS_TOKEN = 'BQC9tGyZaYfNEjTyAwSUz8BAIOhqTOHP-GRNxBVGxpKBp7DW3WU2M3_nE0FQyTdriATZv8-wehyz1pQD0L6t-mYoX1_yZvi1bmyADQnYYLqaviL7Vh5_CJ5ZBQBfNioDHwOH92S47o3v6xFnZo-hu5qd1iKXt1s44FC-3BPLGhEjEYZqoF9Uu5FTfZlJaeC45MjA3nYPPZ30RCvkexbHjHHECj1TJ1JqQAl-V7s4y6JSWOQPy7IfZgJugnM6CNrRs_q3PKQi_VghsGHZ7A';
const API_URL = 'https://api.spotify.com/v1';

export default {
  fetchAlbums: query => fetch(`${API_URL}/search?q=${query}&type=album&limit=5`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    },
  }).then(res => res.json())
};
