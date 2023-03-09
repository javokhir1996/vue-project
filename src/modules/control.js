import ArticleService from "../service/articles"

const state = {
    isLoading: false,
}

const mutations = {
    controlArticlesStart(state){
        state.isLoading = true
    },
    controlArticlesSuccess(state, payload){
        state.isLoading = false
    },
    controlArticlesFailure(state, payload){
        state.isLoading = false
    },
}
const actions = {
    createArticle(context, article){
        return new Promise((reject, resolve)=>{
            context.commit('controlArticlesStart')
            ArticleService.createArticle(article)
            .then(()=>{
               context.commit('controlArticlesSuccess' )
            })
            .catch(()=>{ 
                context.commit('controlArticlesFailure')
            })
        })
    },
    deleteArticle(context, slug){
        return new Promise((resolve)=>{
            context.commit('controlArticlesStart')
            ArticleService.deleteArticle(slug)
            .then(()=>{
                context.commit('controlArticlesSuccess' )
                resolve()
            })
            .catch(()=>{ 
                context.commit('controlArticlesFailure')
            })
        })
    },
    updateHandler(context, data){
        return new Promise((resolve)=>{
            context.commit('controlArticlesStart')
            ArticleService.aditArticle(data.article ,data.slug)
            .then(()=>{
                context.commit('controlArticlesSuccess' )
                resolve()
            })
            .catch(()=>{ 
                context.commit('controlArticlesFailure')
            })
        })
    }
}

export default {state, mutations, actions}
