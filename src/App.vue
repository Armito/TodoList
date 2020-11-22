<template>
  <TodoList />
  <TodoListNew />
</template>

<script>
import TodoList from './components/TodoList/index.vue'
import TodoListNew from './components/TodoList_new/index.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoListNew
  }
}
</script>