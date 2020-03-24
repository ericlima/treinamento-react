import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID chrTkn0VYehpSo0Ivih8yK6ppHlfBuNnQo0vZrD0ZqU'
      }
})