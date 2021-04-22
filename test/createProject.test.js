import {
  Builder, projectsArray, saveProject, addNewProject, addTask, setProjects,
} from '../src/createProject';

test('Check Array', () => {
  expect(projectsArray).toBeTruthy();
  expect(projectsArray).toEqual([]);
});

describe('create a new Project', () => {
  const project = new Builder('Test');
  test('Check Project title', () => {
    expect(project.title).toBe('Test');
  });
  test('Check Type of task array inside the project', () => {
    expect(typeof project.taskArray).toBe('object');
  });
  test('Check the length of task array without tasks', () => {
    expect(project.taskArray).toEqual([]);
  });
  test('Check The length of project array before saving the project and after saving it', () => {
    expect(projectsArray.length).toEqual(0);
    addNewProject(project);
    expect(projectsArray.length).toEqual(1);
  });
  test('Check Saving the project array inside the local storage', () => {
    saveProject();
    expect(localStorage.getItem('array')).toEqual(JSON.stringify(projectsArray));
  });
  test('Adding new project to The projact array and save it in the local storage', () => {
    addNewProject('Test Two');
    expect(projectsArray.length).toEqual(2);
    expect(projectsArray[1].title).toEqual('Test Two');
    expect(localStorage.getItem('array')).toEqual(JSON.stringify(projectsArray));
  });
  test('Adding new task to the project and save it in the local storage ', () => {
    const task = {
      title: 'Task', description: 'Description', dueDate: '2021-04-21', priority: '3',
    };
    addTask(project, task);
    expect(project.title).toEqual('Test');
    expect(project.taskArray).toEqual([task]);
    expect(localStorage.getItem('array')).toEqual(JSON.stringify(projectsArray));
  });
  test('Load the projects to the projects array from the local storage', () => {
    setProjects();
    expect(projectsArray.length).toEqual(2);
  });
});