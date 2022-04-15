export enum TaskAction {
  Edit,
  Camera
}

export interface ITask {
  id: string;
  title: string;
  action: string;
  actionType: TaskAction;
}

const tasks: ITask[] = [
  { id: '1', title: 'Industriestrasse 6, Langendorf ', action: 'update phone number', actionType: TaskAction.Edit },
  { id: '2', title: 'Quai de l\'Ile 13, Geneva ', action: 'clean camera', actionType: TaskAction.Camera },
  { id: '3', title: 'Test 3', action: 'Test 1', actionType: TaskAction.Edit },
  { id: '4', title: 'Test 4', action: 'Test 2', actionType: TaskAction.Edit }
];

export default tasks;