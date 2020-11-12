<template>
  <div class="todolist-list">
    <div
      class="todolist-list-item"
      v-for="task in taskList"
      :key="task.id"
    >
      <div class="todolist-list-item-left">
        <input
          type="checkbox"
          :checked="task.done"
          @click="handleToggleTask(task.id)"
        >
        <span
          v-if="!task.isEdit"
          :class="task.done ? 'done' : ''"
          @dblclick="handleEditTask(task.id)"
        >
          {{ task.task }}
        </span>
        <van-field
          v-else
          type="text"
          v-model="task.task"
          :autofocus="true"
          @blur="handleBlur(task.id, $event)"
          @keyup.enter="handleBlur(task.id, $event)"
        />
      </div>
      <van-button
        type="primary"
        size="small"
        plain
        @click="handleDeleteTask(task.id)"
      >
        删除
      </van-button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
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

<style lang="scss" scoped>
.todolist-list {

  &-item {
    height: 32px;
    margin-bottom: 10px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    &-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      user-select: none;

      input:nth-child(1) {
        margin-right: 10px;
      }
    }

    .done {
      text-decoration: line-through;
      opacity: 0.3;
    }
  }
}
</style>
