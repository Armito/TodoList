<template>
  <div @change="handleFilterTask">
    <label
      v-for="option in options"
      :key="option.value"
    >
      <input
        type="radio"
        name="TASK_STATUS"
        :value="option.value"
        :checked="option.value === taskStatus"
      >
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    taskStatus: Number
  },
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
