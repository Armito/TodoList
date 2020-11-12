<template>
  <div class="todolist-filter">
    <label
      v-for="option in options"
      :key="option.value"
    >
      <input
        type="radio"
        :name="option.name"
        :value="option.value"
        :checked="option.checked"
        @change="handleFilterTask(option.value)"
      > {{ option.label }}
    </label>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { filter_options } from "../js/todolist";

export default {
  setup() {
    const store = useStore();
    const options = filter_options;
    const handleFilterTask = (value) => {
      store.commit('filterTask', value);
    };

    return {
      options,
      handleFilterTask
    }
  }
}
</script>

<style lang="scss" scoped>
.todolist-filter {
  margin-bottom: 20px;;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  label {
    cursor: pointer;
  }
}
</style>
