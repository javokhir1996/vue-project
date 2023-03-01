import ArcticleService from "../service/articles"

const state = {
    data: null,
    isLoading: false,
    error: null
}

const mutations = {
    getArticlesStart(state){
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getArticlesSeccess(state, payload){
        state.isLoading = true
        state.data = payload
    },
    getArticlesFailure(state){
        state.isLoading = true
    }
}

const actions = {
    articles(context){
        return new Promise((resolve, reject)=>{
            context.commit('getArticlesStart')
            ArcticleService.articles()
                .then(response =>{
                    context.commit('getArticlesSeccess', response.data.articles)
                    console.log(response);
                    resolve(response.data.articles)
                })
                .catch(() =>{
                    context.commit('getArticlesFailure')
                })
        })
    }
}

export default {state, mutations, actions}