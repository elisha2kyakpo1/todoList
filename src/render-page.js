const renderPage = (() => {
  const content = document.querySelector('#content');

  const headingContainer = document.createElement('div');
  headingContainer.setAttribute('id', 'headingContainer');

  const heading = document.createElement('h1');
  heading.textContent = 'Todo List';

  headingContainer.append(heading);
  content.append(headingContainer);

  const projectAndTodoContainer = document.createElement('div');
  projectAndTodoContainer.setAttribute('id', 'projectAndTodoContainer');
  content.append(projectAndTodoContainer);

  const projects = document.createElement('div');
  projects.setAttribute('id', 'projects');

  projectAndTodoContainer.append(projects);

  const projectsListContainer = document.createElement('div');
  projectsListContainer.setAttribute('id', 'projectsListContainer');

  projects.append(projectsListContainer);
})();

export default { renderPage };
