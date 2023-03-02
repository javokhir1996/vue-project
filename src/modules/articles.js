import ArticleService from "../service/articles"

const state = {
    data: null,
    isLoading: false,
    error: null,
    articleDetail: null
}

const mutations = {
    getArticlesStart(state){
        state.isLoading = true
        state.data = null
        state.error = null
        state.articleDetail = null
    },
    getArticlesSeccess(state, payload){
        state.isLoading = false
        state.data = payload
    },
    getArticlesFailure(state){
        state.isLoading = false
    },
    getArticleDetailStart(state){
        state.isLoading = true
        state.articleDetail = null
        state.data = null
        state.error = null
    },
    getArticleDetailSeccess(state, payload){
        state.isLoading = false
        state.articleDetail = payload
    },
    getArticleDetailFailure(state){
        state.isLoading = false
    }
}

const actions = {
    articles(context){
        return new Promise((resolve, reject)=>{
            context.commit('getArticlesStart')
            ArticleService.articles()
                .then(response =>{
                    context.commit('getArticlesSeccess', response.data.articles)
                    console.log(response);
                    resolve(response.data.articles)
                })
                .catch(() =>{
                    context.commit('getArticlesFailure')
                })
        })
    },
    articleDetail(context, slug){
        return new Promise(resolve=>{
            context.commit('getArticleDetailStart')
            ArticleService.articleDetail(slug)
            .then(response=>{
                context.commit('getArticleDetailSeccess', response.data.article)
                resolve(response.data.article)
            })
            .catch(()=>{ 
                context.commit('getArticleDetailFailure')
            })
        })
    }
}

export default {state, mutations, actions}