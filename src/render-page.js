const projectAndTodoContainer = document.createElement('div');
const projectsListContainer = document.createElement('div');
const projects = document.createElement('div');

const content = document.querySelector('#content');
const renderPage = (() => {
  const headingContainer = document.createElement('div');
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

export {
  renderPage,
  projectAndTodoContainer,
  projectsListContainer,
  projects,
};
