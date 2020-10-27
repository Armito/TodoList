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
      {{ item.task }}
      <button @click="delTask(idx)">delete</button>
    </div>
  </div>
</template>

<script>
export default {
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

    return {
      handleToggleTask,
      delTask
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
