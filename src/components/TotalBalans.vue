<template>
    <div class="total-value">
        <h2>{{title}}: {{total}}</h2>
    </div>
</template>


<script>

 export default {
     name: 'TotalBalance',
     component: {},
     props: {
        total:{
        type: Number,
        default: 0
}
     },
     data: () => ({
         title: 'Balance'
     }),
     computed: {

     }



 }

</script>

<style scoped>
    .total-value{
        font-size: 26px;
        text-transform: uppercase;
        padding: 20px;
        text-align: center;
    }

</style>