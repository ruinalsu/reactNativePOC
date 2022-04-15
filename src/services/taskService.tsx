import tasks, { ITask } from "../mockdata/tasks";

class TaskService {
  static getTasks(limit?: number): ITask[] {
    if (limit) {
      return tasks.slice(0, limit);
    }
    return [...tasks];
  }
}

export default TaskService;