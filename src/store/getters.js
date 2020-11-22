const getters = {
  displayList(state) {
    switch (state.filter_option) {
      case 0:
        return state._taskList;
      case 1:
        return state._taskList.filter((task) => !task.done);
      case 2:
        return state._taskList.filter((task) => task.done);
    }
  }
};

export {
  getters
}