<template>
     <h1>edit article</h1>
    <div class="w-50 mx-auto">
        <Loader v-if="isLoading"/>
        <ArticleForm v-else-if="!isLoading && article"
        :initionalValue="initionalValue"
        :onSubmitHandler="editArticleHandler"
        :clickText = "'Edit article'"
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
        editArticleHandler(article){
           this.$store.dispatch('updateHandler',{article: article, slug:this.$route.params.slug})
           .then(()=> this.$router.push('/'))
        }
    },
    computed:{
        ...mapState({
            article: state=> state.articles.articleDetail,
            isLoading: state=> state.control.isLoading
        }),
        initionalValue(){
            return{
                title: this.article.title,
                description: this.article.description,
                body: this.article.body
            }
        }
    },
    mounted(){
        this.$store.dispatch('articleDetail', this.$route.params.slug)
        console.log(this.article);
    },
    
}
</script>
<style>
    
</style>