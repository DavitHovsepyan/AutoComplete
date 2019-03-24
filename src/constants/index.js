const development = process.env.NODE_ENV === 'development';

export const baseURL = development 
        ? 'http://localhost:5000/api'
        : 'https://autocomplete-backend.herokuapp.com/api';