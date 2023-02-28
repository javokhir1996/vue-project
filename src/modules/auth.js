import { removeItem, setItem } from "../helpers/persintanceStorage"
import AuthServices from "../service/auth"
import { gettersTypes } from "./types"

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggedIn: null,
}
const getters = {
    [gettersTypes.currentUser]: state =>{
        return state.user
    },
    [gettersTypes.isLoggedIn]: state =>{
        return Boolean(state.isLoggedIn)
    },
    [gettersTypes.isAnonymous]: state =>{
        return state.isLoggedIn === false
    }
}

const mutations = {
    registerStart(state){
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null
    },
    registerSucces(state, payload){
        state.isLoading = false
        state.user = payload
    },
    registerFailure(state, payload){
        state.isLoading = false
        state.errors = payload.errors
    },
    loginStart(state){
        state.isLoading = true,
        state.user = null,
        state.errors = null
        state.isLoggedIn = null
    },
    loginSucces(state, payload){
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    loginFalure(state, payload){
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggedIn = false
    },
    currentUserStart(state){
        state.isLoading = true
    },
    currentUserSuccess(state, payload){
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    currentUserFailure(state){
        state.isLoading = false
        state.user = null
        state.isLoggedIn = false
    },
    logout(state){
        state.user = null
        state.isLoggedIn = false
    }
}
const actions = {
    register(context,user){
        return new Promise((resolve, reject) =>{
            context.commit('registerStart')
            AuthServices.register(user).then(response => {
                context.commit('registerSucces', response.data.user)
                setItem('token', response.data.user.token)
                resolve(response.data.user)
            }).catch(error=>{
                context.commit('registerFailure', error.response.data)
                reject(error.response.data)
            })
       })
    },
    login(context,user){
        return new Promise((resolve, reject)=>{
            context.commit('loginStart')
            AuthServices.login(user)
            .then(response=>{
                context.commit('loginSucces', response.data.user)
                setItem('token', response.data.user.token)
                resolve(response.data.user)
            })
            .catch(error=>{
                context.commit('loginFalure', error.response.data)
                reject(error.response.data)
            })
        })
    },
    getUser(context){
        return new Promise(resolve=>{
            context.commit('currentUserStart')
            AuthServices.currentUser()
            .then(response=>{
                context.commit('currentUserSuccess', response.data.user)
                resolve(response.data.user)
            })
            .catch(()=> context.commit('currentUserFailure'))
        })
    },
    logout(context){
        context.commit('logout')
        removeItem('token')
    }
}
export default {state, mutations, actions, getters}
