<template>
    <div id="app">
        <FormInput @submitForm="onFormSubmit"/>
        <TotalBalance :total="totalBalance"/>
        <BudgetList :list="list" @deleteItem="onDeleteItem"/>
    </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalans";
import FormInput from "@/components/FormInput";

export default {
  name: 'App',
  components: {
      TotalBalance,
      BudgetList,
      FormInput,
  },
  data: () => ({
          list: {
              1: {
                  type: 'income',
                  value: 100,
                  comments: 'Some comment',
                  id: 1,
              },
              2: {
                  type: 'outcome',
                  value: -50,
                  comments: 'Some outcome comment',
                  id: 2,
              },
          }
      }),
    computed: {
      totalBalance () {
          return Object.values(this.list).reduce((acc, item) => acc + item.value,0)
      }
    },
    methods:{
      onDeleteItem(id){
          this.$delete(this.list,id)
      },
        onFormSubmit(data){
          const newObj = {
              ...data,
              id: String(Math.random())
          };
          this.$set(this.list, newObj.id, newObj);
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
