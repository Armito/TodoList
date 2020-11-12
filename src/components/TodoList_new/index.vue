<template>
  <div class="todolist-new">
    <h3>Todolist New</h3>
    <TaskInput />
    <TaskFilter />
    <TaskList />
  </div>
</template>

<script>
import TaskInput from './components/TaskInput.vue';
import TaskFilter from './components/TaskFilter.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    TaskInput,
    TaskFilter,
    TaskList,
  },
};
</script>

<style scoped>
.todolist-new {
  width: 300px;
  margin: 20px auto;
}
</style>
