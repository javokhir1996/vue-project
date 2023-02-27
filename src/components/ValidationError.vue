<template >
    <ul class="list-group">
        <li class="list-group-item list-group-item-danger" v-for="errorMessage in errorMessages" :key="errorMessage">
            {{ errorMessage }}
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        validationErrors:{
            type: Object,
            required: true
        }
    },
    updated(){
        console.log(this.validationErrors);
    },
    computed:{
        errorMessages(){
            return Object.keys(this.validationErrors).map(name =>{
                const msg = this.validationErrors[name].join(', ')
                return `${name} ${msg}`
            })
        }
    }
}
</script>
<style >
    
</style>