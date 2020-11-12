<template>
  <div>
    <div
      v-for="task in taskList"
      :key="task.id"
    >
      <input
        type="checkbox"
        :checked="task.done"
        @click="handleToggleTask(task.id)"
      >
      <span
        :class="task.done ? 'done' : ''"
        v-if="!task.isEdit"
        @dblclick="handleEditTask(task.id)"
      >
        {{ task.task }}
      </span>
      <input
        type="text"
        v-else
        v-focus
        @blur="handleBlur(task.id, $event)"
        @keyup.enter="handleBlur(task.id, $event)"
      >
      <button @click="handleDeleteTask(task.id)">删除</button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  setup() {
    const store = useStore();
    const taskList = computed(() => store.getters.displayList);
    const handleToggleTask = (id) => {
      store.commit('toggleTask', id);
    };
    const handleEditTask = (id) => {
      store.commit('editTask', id);
    };
    const handleBlur = (id, e) => {
      store.commit('changeTask', [id, e.target.value]);
    };
    const handleDeleteTask = (id) => {
      store.commit('deleteTask', id);
    };

    return {
      taskList,
      handleToggleTask,
      handleEditTask,
      handleBlur,
      handleDeleteTask,
    };
  },
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
  opacity: 0.3;
}
</style>
