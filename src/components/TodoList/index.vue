<template>
  <div class="todolist">
    <Input
      v-model:task="task"
      @addTask="addTask"
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
    // 增
    const addTask = () => {
      if (task.value.trim().length) {
        taskList.value.push({
          task: task.value,
          done: false,
          isEdit: false
        })
      }
      task.value = ''
    }
    // 删
    const delTask = (idx) => {
      taskList.value.splice(idx, 1)
    }
    // 改：done
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
    // 改：isEdit
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
    // 改：task
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
      delTask,
      toggleTask,
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

  -moz-user-select:none; /*火狐*/
  -webkit-user-select:none; /*webkit浏览器*/
  -ms-user-select:none; /*IE10*/
  user-select:none;

}
</style>
