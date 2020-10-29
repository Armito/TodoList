<template>
  <div @change="handleFilterTask">
    <input
      type="radio"
      name="TASK_STATUS"
      value="0"
      checked
    >全部
    <input
      type="radio"
      name="TASK_STATUS"
      value="1"
    >未完成
    <input
      type="radio"
      name="TASK_STATUS"
      value="2"
    >已完成
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
