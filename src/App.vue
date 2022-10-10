<template>
    <div id="app">
        <TotalBalance :total="totalBalance"/>
        <BudgetList :list="list"/>
    </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalans";

export default {
  name: 'App',
  components: {
      TotalBalance,
      BudgetList,
  },
  data: () => ({
          list: {
              1: {
                  type: 'income',
                  value: 100,
                  comment: 'Some comment',
                  id: 1,
              },
              2: {
                  type: 'outcome',
                  value: -50,
                  comment: 'Some outcome comment',
                  id: 2,
              },
          }
      }),
    computed: {
      totalBalance () {
          return Object.values(this.list).reduce((acc, item) => acc + item.value,0)
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
