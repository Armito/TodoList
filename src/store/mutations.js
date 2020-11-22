import { createRandomId } from '../assets/js/util'

const mutations = {
  // 新增任务
  addTask(state, task_new) {
    if (task_new.trim().length) {
      state._taskList.push({
        id: createRandomId(),
        task: task_new.trim(),
        isEdit: false,
        done: false
      });
    }
  },
  // 筛选/陈列任务
  filterTask(state, filter_option) {
    state.filter_option = Number(filter_option);
  },
  // 删除任务
  deleteTask(state, id) {
    state._taskList = state._taskList.filter((task) => task.id != id);
  },
  // 切换任务完成状态
  toggleTask(state, id) {
    state._taskList = state._taskList.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task;
    });
  },
  // 开始编辑任务
  editTask(state, id) {
    if (state._taskList.find((task) => task.id == id).done) {
      return
    };
    state._taskList = state._taskList.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          isEdit: true
        }
      }
      return task;
    });
  },
  // 确认编辑任务
  changeTask(state, [id, task_new]) {
    state._taskList = state._taskList.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          task: task_new.trim() || task.task,
          isEdit: false
        }
      }
      return task;
    });
  }
};

export {
  mutations
}