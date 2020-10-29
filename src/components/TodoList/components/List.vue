<template>
  <div class="com-list">
    <div
      class="list-item"
      :class="item.done ? 'del' : ''"
      v-for="item in taskList"
      :key="item.id"
    >
      <input
        type="checkbox"
        :checked="item.done"
        @click="handleToggleTask(item.id)"
      >
      <input
        type="text"
        v-if="item.isEdit"
        v-focus
        :value="item.task"
        @blur="handleChangeTask(item.id, $event)"
        @keyup.enter="handleChangeTask(item.id, $event)"
      >
      <span
        v-else
        @dblclick.prevent="handleEditTask(item.id, item.done)"
      >
        {{ item.task }}
      </span>
      <button @click="handleDelTask(item.id)">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  props: {
    taskList: Array,
  },
  setup(props, { emit }) {
    const handleToggleTask = (id) => {
      emit('toggleTask', id);
    };
    const handleEditTask = (id, done) => {
      if (!done) {
        emit('editTask', id);
      }
    };
    const handleChangeTask = (id, e) => {
      emit('changeTask', [id, e.target.value]);
    };
    const handleDelTask = (id) => {
      emit('delTask', id);
    };

    return {
      handleToggleTask,
      handleEditTask,
      handleChangeTask,
      handleDelTask,
    };
  },
};
</script>

<style socped>
.list-item.del {
  color: #ccc;
  text-decoration: line-through;
}
</style>
