<template>
    <h1>create article vue</h1>
    <div class="w-50 mx-auto">
        <form action="" @submit.prevent>
            <Input type="text" label="Title" v-model="title"/> 
            <TextArea type="text" label="Description" v-model="description" />
            <TextArea type="text" label="Body" v-model="body" />
            <Button @click="createArticleHandler" :disabled="isLoading">Create Article</Button>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data(){
        return {
            title: '',
            description: '',
            body: ''
        }
    },
    methods:{
        createArticleHandler(){
            const article = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: []
            }
            this.$store.dispatch('createArticle', article)
            this.$router.push('/')
        }
    },
    computed:{
        ...mapState({
            isLoading: state=> state.articles.isLoading
        })
    }
}
</script>
<style >
    
</style>