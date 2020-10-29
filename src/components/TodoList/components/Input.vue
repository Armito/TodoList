<template>
  <div class="com-input">
    <input
      type="text"
      :value="task"
      @change="handleInputChange"
      @keyup.enter="handleAddTask"
    >
    <button @click="handleAddTask">新建</button>
  </div>
</template>

<script>
export default {
  props: {
    task: String,
  },
  setup({ task }, { emit }) {
    const handleInputChange = (e) => {
      emit('update:task', e.target.value);
    };
    const handleAddTask = () => {
      emit('addTask');
    };

    return {
      task,
      handleInputChange,
      handleAddTask,
    };
  },
};
</script>

<style scoped>
</style>
