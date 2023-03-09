<template >
    <div class="w-50 mx-auto">
        <form action="" @submit.prevent>
            <Input type="text" label="Title" v-model="currentTitle"/> 
            <TextArea type="text" label="Description" v-model="currentDescription" />
            <TextArea type="text" label="Body" v-model="currentBody" />
            <Button @click="editArticle" :disabled="isLoading">{{ clickText }}</Button>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data(){
        return{
            currentTitle: this.initionalValue.title,
            currentDescription: this.initionalValue.description,
            currentBody: this.initionalValue.body,
        }
    },
    props: {
        initionalValue:{
            type: Object,
            required: true
        },
        onSubmitHandler:{
            type: Function,
            required: true
        },
        clickText:{
            type: String,
            required: true
        }
    },
    computed:{
        ...mapState({
            isLoading: state=> state.control.isLoading
        })
    },
    methods:{
        editArticle() {
            const article = {
                title: this.currentTitle,
                body: this.currentBody,
                description: this.currentDescription,
                tagList: []
            }
            this.onSubmitHandler(article)
        },

    }
}
</script>
<style>
    
</style>