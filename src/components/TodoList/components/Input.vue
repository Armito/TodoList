<template>
  <div class="com-input">
    <input
      type="text"
      :value="task"
      @change="handleInputChange"
    >
    <button @click="addTask">新建</button>
  </div>
</template>

<script>
export default {
  props: {
    task: String
  },
  setup({task}, {emit}) {
    let newTask = ''
    const handleInputChange = (e) => {
      newTask = e.target.value
      e.target.value = ''
      emit('update', newTask)
    }
    const addTask = () => {
      emit('addTask', newTask)
    }

    return {
      task,
      handleInputChange,
      addTask
    }
  }
}
</script>

<style scoped>

</style>
