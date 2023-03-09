import axios from './axios'

const ArticleService = {
    articles(){
        return axios.get('/articles')
    },
    articleDetail(slug){
        return axios.get(`/articles/${slug}`)
    },
    createArticle(article){
        return axios.post('/articles', {article: article})
    },
    deleteArticle(slug){
        return axios.delete(`/articles/${slug}`)
    },
    aditArticle(article, slug){
        return axios.put(`/articles/${slug}`, {article})
    },
}

export default ArticleService