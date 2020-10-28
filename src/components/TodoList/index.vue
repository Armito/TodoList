<template>
  <div class="todolist">
    <Input
      v-model:task="task"
      @addTask="addTask"
    />
    <List
      :taskList="taskList"
      @toggleTask="toggleTask"
      @delTask="delTask"
      @editTask="editTask"
      @changeTask="changeTask"
    />
  </div>
</template>

<script>
import Input from './components/Input.vue'
import List from './components/List.vue'

import { ref } from 'vue'

export default {
  components: {
    Input,
    List
  },
  setup() {
    const task = ref('')
    const taskList = ref([])
    const addTask = (newTask) => {
      taskList.value.push({
        task: newTask,
        done: false,
        isEdit: false
      })
    }
    const toggleTask = (idx) => {
      taskList.value = taskList.value.map((task, index) => {
        if (idx == index) {
          return {
            ...task,
            done: !task.done
          }
        }
        return task
      })
    }
    const delTask = (idx) => {
      taskList.value.splice(idx, 1)
    }
    const editTask = (idx) => {
      taskList.value = taskList.value.map((task, index) => {
        if (idx == index) {
          return {
            ...task,
            isEdit: !task.isEdit
          }
        }
        return task
      })
    }
    const changeTask = ([idx, newTask]) => {
      taskList.value = taskList.value.map((task, index) => {
        if (idx == index) {
          return {
            ...task,
            task: newTask,
            isEdit: !task.isEdit
          }
        }
        return task
      })
    }

    return {
      task,
      taskList,
      addTask,
      toggleTask,
      delTask,
      editTask,
      changeTask
    }
  }
}
</script>

<style scoped>
.todolist {
  width: 300px;
  margin: 20px auto;
}
</style>
