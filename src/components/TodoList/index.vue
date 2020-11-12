<template>
  <div class="todolist">
    <Input
      v-model:task="task"
      @addTask="addTask"
    />
    <Filter
      :options="options"
      @filterTask="filterTask"
    />
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

import { ref, onMounted, nextTick } from 'vue';
import { filterOptions } from './js/todoList';

export default {
  components: {
    Input,
    Filter,
    List,
  },
  setup() {
    const taskId = ref(0);
    const task = ref('');
    const taskList = ref([]);
    const taskStatus = ref(0);
    const options = ref([]);

    options.value = filterOptions;

    onMounted(() => {
      sessionStorage.setItem('TaskList', JSON.stringify([]));
    });

    // 增
    const addTask = () => {
      if (task.value.trim().length) {
        taskList.value = JSON.parse(sessionStorage.getItem('TaskList')) || taskList.value;
        taskList.value.push({
          id: taskId.value++,
          task: task.value,
          done: false,
          isEdit: false,
        });
        sessionStorage.setItem('TaskList', JSON.stringify(taskList.value));
        nextTick(() => {
          filterTask(taskStatus.value);
        });
      }
      task.value = '';
    };
    // 删
    const delTask = (id) => {
      taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
      taskList.value = taskList.value.filter((task) => {
        return task.id !== id;
      });
      sessionStorage.setItem('TaskList', JSON.stringify(taskList.value));
      nextTick(() => {
        filterTask(taskStatus.value);
      });
    };
    // 改：done
    const toggleTask = (id) => {
      taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
      taskList.value = taskList.value.map((task) => {
        if (id == task.id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });
      sessionStorage.setItem('TaskList', JSON.stringify(taskList.value));
      nextTick(() => {
        filterTask(taskStatus.value);
      });
    };
    // 改：isEdit
    const editTask = (id) => {
      taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
      taskList.value = taskList.value.map((task) => {
        if (id == task.id) {
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
    const changeTask = ([id, newTask]) => {
      taskList.value = JSON.parse(sessionStorage.getItem('TaskList'));
      taskList.value = taskList.value.map((task) => {
        if (id == task.id) {
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
      taskStatus.value = status;
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
      options,
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
}
</style>
