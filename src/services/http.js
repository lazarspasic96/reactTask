import axios from 'axios'


const http = (page) => {

      return axios.get(`https://api.github.com/gists/public?page=${page}`)
}


export default http