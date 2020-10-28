<template>
  <div class="com-list">
    <div
      class="list-item"
      :class="item.done ? 'del' : ''"
      v-for="(item, idx) in taskList"
      :key="idx"
    >
      <input
        type="checkbox"
        :checked="item.done"
        @click="handleToggleTask(idx)"
      >
      <input
        type="text"
        v-if="item.isEdit"
        v-focus
        :value="item.task"
        @blur="handleChangeTask(idx, $event)"
      >
      <span
        v-else
        @dblclick="handleEditTask(idx)"
      >
        {{ item.task }}
      </span>
      <button @click="delTask(idx)">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  props: {
    taskList: Array
  },
  setup(props, {emit}) {
    const handleToggleTask = (idx) => {
      emit('toggleTask', idx)
    }
    const delTask = (idx) => {
      emit('delTask', idx)
    }
    const handleEditTask = (idx) => {
      emit('editTask', idx)
    }
    const handleChangeTask = (idx, e) => {
      emit('changeTask', [idx, e.target.value])
    }

    return {
      handleToggleTask,
      delTask,
      handleEditTask,
      handleChangeTask
    }
  }
}
</script>

<style socped>
.list-item.del {
  color: #ccc;
  text-decoration: line-through;
}
</style>
