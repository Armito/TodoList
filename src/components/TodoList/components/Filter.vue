<template>
  <div @change="handleFilterTask">
    <template
      v-for="option in options"
      :key="option.value"
    >
      <input
        type="radio"
        name="TASK_STATUS"
        :value="option.value"
        :checked="option.value == 0"
      >
      {{ option.label }}
    </template>
  </div>
</template>

<script>
export default {
  props: {
    options: Array
  },
  setup({ options }, { emit }) {
    const handleFilterTask = (e) => {
      emit('filterTask', e.target.value);
    };

    return {
      options,
      handleFilterTask,
    };
  },
};
</script>

<style scoped>
</style>
