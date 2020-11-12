<template>
  <div>
    <input
      type="text"
      :value="task_new"
      @change="handleChangeTask"
      @keyup.enter="handleAddTask"
    >
    <button @click="handleAddTask">新建</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const task_new = ref('');
    const handleChangeTask = (e) => {
      task_new.value = e.target.value;
    };
    const handleAddTask = () => {
      store.commit('addTask', task_new.value);
      task_new.value = '';
    };

    return {
      task_new,
      handleChangeTask,
      handleAddTask,
    };
  },
};
</script>

<style>
</style>
