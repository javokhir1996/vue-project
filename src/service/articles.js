import axios from './axios'

const ArcticleService = {
    articles(){
        return axios.get('/articles')
    }
}

export default ArcticleService