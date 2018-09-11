import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://react-burger-builder-b676f.firebaseio.com/'
});

export default instance;