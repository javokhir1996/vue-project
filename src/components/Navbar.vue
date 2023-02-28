<template>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
          <img :src="logo" alt="" @click="toHomeHandler">
          <span @click="toHomeHandler">Javohir</span>
      </a>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <template  v-if="isLoggedIn">
            <RouterLink  class="me-3 py-2 text-dark text-decoration-none" :to="{name: 'home'}">
                {{user.username}}
            </RouterLink>
        </template>
        <template  v-if="isAnonymous">
            <RouterLink  class="me-3 py-2 text-dark text-decoration-none" :to="{name: 'login'}">
                Login
            </RouterLink>
            <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{name: 'register'}">
                Register
            </RouterLink>
        </template>
      </nav>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import {logo} from '../constants'
import {gettersTypes} from '@/modules/types'
export default {
    data() {
        return {
            logo
        }
    },
    computed:{
        // ...mapState({
        //     user: state => state.auth.user,
        //     isLoggedIn: state => state.auth.isLoggedIn,
        // }),
        ...mapGetters({
            user: gettersTypes.currentUser,
            isLoggedIn: gettersTypes.isLoggedIn,
            isAnonymous: gettersTypes.isAnonymous
        }),
        // user(){
        //     return this.$store.getters[gettersTypes.currentUser]
        // },
        // isLoggedIn(){
        //     return this.$store.getters[gettersTypes.isLoggedIn]
        // },
        // isAnonymous(){
        //     return this.$store.getters[gettersTypes.isAnonymous]
        // }
    },
    methods:{
        toHomeHandler(){
            return this.$router.push('/')
        }
    },
    
}
</script>
<style>
    
</style>