
<template>
<ElCard class="form-data">
    <ElForm :model="formData" :rules="rules">
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
            type: 'income',
            comments: '',
            value: 0
        },
        rules: {
            type:[
                {required: true, message: 'Please select type', trigger: 'change'}
            ]
        }
    }),
    methods:{
        onSubmit(){

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