<template>
  <div @change="handleFilterTask">
    <input
      type="radio"
      name="TASK_STATUS"
      value="0"
      checked
    >ALL
    <input
      type="radio"
      name="TASK_STATUS"
      value="1"
    >Undone
    <input
      type="radio"
      name="TASK_STATUS"
      value="2"
    >Done
  </div>
</template>

<script>
export default {
  setup(props, { emit }) {
    const handleFilterTask = (e) => {
      emit('filterTask', e.target.value);
    };

    return {
      handleFilterTask,
    };
  },
};
</script>

<style scoped>
</style>
