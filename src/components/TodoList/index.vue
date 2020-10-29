<template>
  <div class="todolist">
    <Input
      v-model:task="task"
      @addTask="addTask"
    />
    <Filter @filterTask="filterTask" />
    <List
      :taskList="taskList"
      @delTask="delTask"
      @toggleTask="toggleTask"
      @editTask="editTask"
      @changeTask="changeTask"
    />
  </div>
</template>

<script>
import Input from './components/Input.vue';
import Filter from './components/Filter.vue';
import List from './components/List.vue';

import { ref } from 'vue';

export default {
  components: {
    Input,
    Filter,
    List,
  },
  setup() {
    const task = ref('');
    const taskList = ref([]);

    // 增
    const addTask = () => {
      if (task.value.trim().length) {
        taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
        taskList.value.push({
          task: task.value,
          done: false,
          isEdit: false,
        });
        sessionStorage.setItem('TaskList', JSON.stringify(taskList.value));
      }
      task.value = '';
    };
    // 删
    const delTask = (idx) => {
      taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
      taskList.value.splice(idx, 1);
      sessionStorage.setItem('TaskList', JSON.stringify(taskList.value));
    };
    // 改：done
    const toggleTask = (idx) => {
      taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
      taskList.value = taskList.value.map((task, index) => {
        if (idx == index) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });
      sessionStorage.setItem('TaskList', JSON.stringify(taskList.value));
    };
    // 改：isEdit
    const editTask = (idx) => {
      taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
      taskList.value = taskList.value.map((task, index) => {
        if (idx == index) {
          return {
            ...task,
            isEdit: !task.isEdit,
          };
        }
        return task;
      });
      sessionStorage.setItem('TaskList', JSON.stringify(taskList.value));
    };
    // 改：task
    const changeTask = ([idx, newTask]) => {
      taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
      taskList.value = taskList.value.map((task, index) => {
        if (idx == index) {
          return {
            ...task,
            task: newTask,
            isEdit: !task.isEdit,
          };
        }
        return task;
      });
      sessionStorage.setItem('TaskList', JSON.stringify(taskList.value));
    };
    // 查
    const filterTask = (status) => {
      taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
      taskList.value = taskList.value.filter((task) => {
        if (status == 0) {
          return true;
        }
        if (status == 1) {
          return !task.done;
        }
        if (status == 2) {
          return task.done;
        }
      });
    };

    return {
      task,
      taskList,

      addTask,
      delTask,
      toggleTask,
      editTask,
      changeTask,
      filterTask,
    };
  },
};
</script>

<style scoped>
.todolist {
  width: 300px;
  margin: 20px auto;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
