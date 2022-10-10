<template>
  <div class="budget-list-wrap">
 <ElCard :header="header">
<div class="list-item" v-for="(item,prop) in list" :key="prop">
    <span class="budget-comment">{{item.comment}}</span>
    <span class="budget-value">{{item.value}}</span>
    <ElButton type="danger" size = 'mini'>Delete</ElButton>
</div>
 </ElCard>
  </div>
</template>

<script>

export default {
  name: 'BudgetList',
  props: {
    list:{
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
          header: 'Budget List',
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
