<template>
    <h1>create article</h1>
    <div class="w-50 mx-auto">
        <ArticleForm
        :initionalValue="initionalValue"
        :onSubmitHandler="createArticleHandler"
        :clickText = "'Create article'"
        />
    </div>
</template>
<script>
import { mapState } from 'vuex';
import ArticleForm from '../components/ArticleForm.vue'
export default {
    components:{
        ArticleForm
    },
    methods:{
        createArticleHandler(article){
            this.$store.dispatch('createArticle', article)
            this.$router.push('/')
        }
    },
    computed:{
        ...mapState({
            isLoading: state=> state.articles.isLoading
        }),
        initionalValue(){
            return{
                title: '',
                description: '',
                body: ''
            }
        }
    }
}
</script>
<style >
    
</style>