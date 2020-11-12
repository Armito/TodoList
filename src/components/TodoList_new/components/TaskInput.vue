<template>
  <div class="todolist-input">
    <van-field
      type="text"
      v-model="task_new"
      @keyup.enter="handleAddTask"
    >
      <template #button>
        <van-button
          type="primary"
          size="small"
          @click="handleAddTask"
        >
          新建
        </van-button>
      </template>
    </van-field>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const task_new = ref('');
    const handleAddTask = () => {
      store.commit('addTask', task_new.value);
      task_new.value = '';
    };

    return {
      task_new,
      handleAddTask,
    };
  },
};
</script>

<style scoped>
.todolist-input {
  margin: 0px auto 20px;
}
</style>