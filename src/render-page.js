const projectAndTodoContainer = document.createElement('div');
projectAndTodoContainer.setAttribute('class', 'project-todo-container');
const projectsListContainer = document.createElement('div');
projectsListContainer.setAttribute('class', 'project-list');
const projects = document.createElement('div');
projects.setAttribute('class', 'project-div');

const renderPage = (() => {
  const headingContainer = document.createElement('div');
  const content = document.querySelector('#content');

  headingContainer.setAttribute('id', 'headingContainer');

  const heading = document.createElement('h2');
  heading.textContent = 'Todo List';

  headingContainer.append(heading);
  content.append(headingContainer);

  projectAndTodoContainer.setAttribute('id', 'projectAndTodoContainer');
  content.append(projectAndTodoContainer);

  projects.setAttribute('id', 'projects');

  projectAndTodoContainer.append(projects);

  projectsListContainer.setAttribute('id', 'projectsListContainer');

  projects.append(projectsListContainer);
})();

export default renderPage;
