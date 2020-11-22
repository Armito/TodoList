<template>
  <div class="com-list">
    <div
      class="list-item"
      v-for="item in taskList"
      :key="item.id"
    >
      <input
        type="checkbox"
        :checked="item.done"
        @click="handleToggleTask(item.id)"
      >
      <span
        v-if="!item.isEdit"
        :class="item.done ? 'del' : ''"
        @dblclick.prevent="handleEditTask(item.id, item.done)"
      >
        {{ item.task }}
      </span>
      <input
        v-else
        type="text"
        v-focus
        :value="item.task"
        @blur="handleChangeTask(item.id, $event)"
        @keyup.enter="handleChangeTask(item.id, $event)"
      >  
      <button @click="handleDelTask(item.id)">delete</button>
    </div>
    <div>共{{ taskList.length }}件</div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  props: {
    taskList: {
      type: Array,
      default: [],
    },
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
.list-item .del {
  text-decoration: line-through;
  opacity: 0.3;
}
</style>
