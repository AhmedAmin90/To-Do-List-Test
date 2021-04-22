import Task from '../src/createTask';

describe('Create a new Task', () => {
  const task = new Task('Task', 'Description', '2021-04-21', '1');
  test('Check Project title', () => {
    expect(task.title).toEqual('Task');
    expect(task.description).toEqual('Description');
    expect(task.dueDate).toEqual('2021-04-21');
    expect(task.priority).toEqual('1');
  });
  test('Type of inputs is a string', () => {
    expect(typeof task.title).toEqual('string');
    expect(typeof task.description).toEqual('string');
    expect(typeof task.dueDate).toEqual('string');
    expect(typeof task.priority).toEqual('string');
  });
});
