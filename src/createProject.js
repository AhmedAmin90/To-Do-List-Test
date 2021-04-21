import newTask from './createTask';

export let projectsArray = [];

function setProjects(){
  if (localStorage.length != 0)
  {
    projectsArray = JSON.parse(localStorage.getItem("array"));
  }
}

class Builder{
  constructor(title){
    this.title = title
    this.taskArray = [];
  }
}

function saveProject(){
  localStorage.clear();
  localStorage.setItem('array', JSON.stringify(projectsArray));
}

export function addNewProject(){
  const title = document.querySelector('#project-title').value;
  const newProject = new Builder(title);
  projectsArray.push(newProject);
  saveProject();
}

export function addTask(project, task){
  project.taskArray.push(task);
  saveProject();
}

export function printProject() {
  const title = document.querySelector('#project-title').value;
  let projectList = document.querySelector('.project-list');
  let projectName = document.createElement('h5');
  projectName.innerText = title;
  projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';
  projectList.appendChild(projectName);
}

export function loadProjects(){
  setProjects();
  const box = document.querySelector('#project-container');
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  for (let i = 0 ; i < projectsArray.length ; i++)
  {
    let projectList = document.querySelector('.project-list');
    let projectName = document.createElement('h5');
    projectName.innerText = projectsArray[i].title;
    projectName.classList = 'text-center text-dark bg-warning border border-light rounded m-1 p-1 project-name-card';
    projectList.appendChild(projectName);
  }
}

<<<<<<< HEAD
// Create New Task  inside the project:
 export function taskList(title , description , dueDate , priority){
  const projectName = document.querySelector('#new-project-task').innerText;
  const project = projectsArray.find(name => name.title == projectName);
  const taskMainDiv = document.createElement('div');
  const taskCardHeader = document.createElement('div');
  const taskCardDiv = document.createElement('div');
  const taskCardTitle = document.createElement('h1');
  const taskCardDescription = document.createElement('p');
  const taskCardDate =  document.createElement('p');
  const taskCardPriority = document.createElement('div')
 
  // Style
  taskMainDiv.classList = 'card m-1 task-card hide-if-not mainDiv';
  taskCardHeader.classList = 'card-header bg-primary cardHeader';
  taskCardDiv.classList = 'card-body cardDiv';
  taskCardTitle.classList = 'card-title cardTitle';
  taskCardDescription.classList = 'card-text cardDesc';
  taskCardDate.classList = 'card-text cardDate';
  taskCardPriority.classList = 'card-body cardPriority'

=======
loadProjects();
>>>>>>> 3b11dc7e91865f5a9b07b4f51be05816f10a9b36

export function loadTasks(index){
<<<<<<< HEAD
  console.log(projectsArray[index]);
  let task = projectsArray[index].taskArray
  for (let i = 0 ; i < task ; i++)
    { 
  // Create elemetns:
      const taskMainDiv = document.querySelector('.mainDiv');
      const taskCardHeader = document.querySelector('.cardHeader');
      const taskCardDiv = document.querySelector('.cardDiv');
      const taskCardTitle = document.querySelector('.cardTitle');
      const taskCardDescription = document.querySelector('.cardDesc');
      const taskCardDate = document.querySelector('.cardDate');
      const taskCardPriority = document.querySelector('.cardPriority');
=======
  let x = document.querySelector('.task-box');
  while(x != null)
  {
    x.remove(x.selectedIndex);
    x = document.querySelector('.task-box');
  }
  for (let task of projectsArray[index].taskArray)
  { 
    // Create elemetns:
    const taskMainDiv = document.createElement('div');
    const taskCardHeader = document.createElement('div');
    const taskCardDiv = document.createElement('div');
    const taskCardTitle = document.createElement('h1');
    const taskCardDescription = document.createElement('p');
    const taskCardDate =  document.createElement('p');
    const taskCardPriority = document.createElement('div');

    // Style
    taskMainDiv.classList = 'card m-1 task-card task-box';
    taskCardHeader.classList = 'card-header bg-primary';
    taskCardDiv.classList = 'card-body';
    taskCardTitle.classList = 'card-title';
    taskCardDescription.classList = 'card-text';
    taskCardDate.classList = 'card-text';
    taskCardPriority.classList = 'card-body';

    // Structure:
    document.querySelector('.col-6').appendChild(taskMainDiv);
    taskMainDiv.appendChild(taskCardHeader);
    taskMainDiv.appendChild(taskCardDiv);
    taskCardDiv.appendChild(taskCardTitle);
    taskCardDiv.appendChild(taskCardDescription);
    taskCardDiv.appendChild(taskCardDate);
    taskCardDiv.appendChild(taskCardPriority);

>>>>>>> 3b11dc7e91865f5a9b07b4f51be05816f10a9b36
    // Fill the data
    taskCardHeader.innerText = `Task Title : ${task[i].title}`;
    taskCardDescription.innerText = `Task Details: ${task[i].description}`;
    taskCardDate.innerText = `Due date : ${task[i].dueDate}` ;
    if (task[i].priority === "1")
     {
      taskCardPriority.innerText = "Not That Important";
      taskCardPriority.classList.add('bg-light');
      taskCardPriority.classList.remove('bg-danger', 'bg-warning')
    }
     else if (task[i].priority === "2") 
     {
      taskCardPriority.innerText = "Important";
      taskCardPriority.classList.add('bg-warning');
      taskCardPriority.classList.remove('bg-danger', 'bg-light')
    } 
    else   {
      taskCardPriority.innerText = "Very Important";
      taskCardPriority.classList.add('bg-danger');
      taskCardPriority.classList.remove('bg-warning', 'bg-light')
    }
<<<<<<< HEAD
    
   }
   }



// Here i am trying to make a function to eliminate all other tasks
export function hideTaks(index){
  let otherProjectsArray = projectsArray.splice(projectsArray[index] , 1)
  console.log(otherProjectsArray)
=======
  }
>>>>>>> 3b11dc7e91865f5a9b07b4f51be05816f10a9b36
}

export default projectsArray;