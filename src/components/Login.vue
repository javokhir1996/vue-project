<template >
  <main class="form-signin w-25 m-auto">
            <form>
                <!-- <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
                <h1 class="h3 mb-3 fw-normal">Login</h1>
                <ValidationError v-if="validationErrors" :validationErrors="validationErrors"/>
                <Input :label="'Email address'" :type="'email'" v-model="email"/>
                <Input :label="'Password'" :type="'password'" v-model="password"/>

                <Button type="submit" :disabled="isLoading" @click="submitHandler">Login</Button>
                <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </main>
</template>
<script>
import {mapState} from 'vuex'
import ValidationError from './ValidationError.vue';

export default {
    data(){
    return{
        email: '',
        password: ''
    }
   },
   components:{
    ValidationError
   },
   computed:{
    ...mapState({
        isLoading: state => state.auth.isLoading,
		validationErrors: state => state.auth.errors,
    })
    // isLoading(){
    //     return this.$store.state.auth.isLoading
    // },
    // validationErrors(){
    //     return this.$store.state.auth.errors
    // }
   },
   methods:{
    submitHandler(e){
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password,
        }
        this.$store.dispatch('login', data)
        .then(user => {
            console.log('USER', user)
			this.$router.push({name: 'home'})
        })
        
        .catch(err => console.log('ERROR', err));
    }
   }
}
</script>
<style >
    
</style>