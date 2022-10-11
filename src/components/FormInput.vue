
<template>
<ElCard class="form-data">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="left">
        <ElFormItem label="Type" prop="type">
            <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
                <ElOption label="Income" value="income"/>
                <ElOption label="Outcome" value="outcome"/>
            </ElSelect>
        </ElFormItem>
        <ElFormItem label="Comments" prop="comments">
            <ElInput v-model="formData.comments"/>
        </ElFormItem>
        <ElFormItem label="Value" prop="value">
            <ElInput v-model.number="formData.value"/>
        </ElFormItem>
        <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
</ElCard>
</template>


<script>

export default {
    name: 'FormInput',
    data: () => ({
        formData: {
            type: '',
            comments: '',
            value: 0
        },
        rules: {
            type:[{required: true, message: 'Please select type', trigger: 'blur'}],
            comments: [{required: true, message: 'Please write comment', trigger: 'blur' }],
            value: [
                {required: true, message: 'Please input value', trigger: 'change'},
                {type: 'number', message: 'Value must be a number', trigger: 'change'}
                ]
        }
    }),
    methods:{
        onSubmit(){
        this.$refs.addItemForm.validate(valid => {
            if(valid) {
                this.$emit('submitForm', {...this.formData});
                this.$refs.addItemForm.resetFields();
            }
        })
        }
    }
}

</script>
<style scoped>
.form-data {
    max-width: 500px;
    margin: auto;
}
    .type-select{
        width: 100%;
    }
</style>