<template>
  <div class="todolist">
    <Input
      v-model:task="task"
      @addTask="addTask"
    />
    <Filter
      :options="options"
      :taskStatus="taskStatus"
      @filterTask="filterTask"
    />
    <List
      :taskList="taskListDisplay"
      :taskStatus="taskStatus"
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

import { ref, computed } from 'vue';
import { createRandomId } from '../../assets/js/util'
import { filterOptions } from './js/todoList';

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
        taskList.value.push({
          id: createRandomId(),
          task: task.value,
          done: false,
          isEdit: false,
        });
      }
      task.value = '';
    };
    // 改：done
    const toggleTask = (id) => {
      taskList.value = taskList.value.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });
    };
    // 改：isEdit
    const editTask = (id) => {
      taskList.value = taskList.value.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isEdit: !task.isEdit,
          };
        }
        return task;
      });
    };
    // 改：task
    const changeTask = ([id, newTask]) => {
      taskList.value = taskList.value.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            task: newTask,
            isEdit: !task.isEdit,
          };
        }
        return task;
      });
    };
    // 删
    const delTask = (id) => {
      taskList.value = taskList.value.filter((task) => task.id !== id);
    };

    const options = filterOptions;
    const taskStatus = ref(0);
    const taskListDisplay = computed(() => {
      switch (taskStatus.value) {
        case 1:
          return taskList.value.filter((task) => !task.done);
        case 2:
          return taskList.value.filter((task) => task.done);
        default:
          return taskList.value;
      }
    });
    // 查
    const filterTask = (status) => {
      taskStatus.value = Number(status);
    };

    return {
      task,
      addTask,
      delTask,
      toggleTask,
      editTask,
      changeTask,

      options,
      taskStatus,
      taskListDisplay,
      filterTask,
    };
  },
};
</script>

<style scoped>
.todolist {
  width: 300px;
  margin: 20px auto;
}
</style>
