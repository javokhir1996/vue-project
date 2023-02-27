<template>
      <div class="form-floating mb-3">
            <input :type="type" class="form-control" id="floatingInput"
            :placeholder="label"
            @input="updateInput"
			:value="modelValue"
            >
            <label for="floatingInput">{{label}}</label>
        </div>
</template>
<script>
export default {
    name: 'Input',
    props:{
        label: String,
        type: String,
        placeholder: String,
		modelValue: [String, Number],
    },
    methods:{
        updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
		},
    }
}
</script>
<style>
    
</style>