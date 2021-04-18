import { projectObjectList } from './project-object.js';

// Keep a list of projects, added to localStorage
const projectList = [];

// Create the default project if no others are present
if (localStorage.length === 0) {
  projectList.push('Default Project');
}

const storeProjects = (() => {
  const setProjectList = () => {
    projectList.forEach((project) => {
      if (project !== '') {
        localStorage.setItem('projectList', projectList);
      }
    });
  };

  const getProjectList = () => {
    if (localStorage.length == 0) {
      setProjectList();
    } else {
      const storedProjectList = localStorage['projectList'].split(',');
      storedProjectList.forEach((project) => {
        if (!projectList.includes(project) || projectList.length == 0) {
          projectList.push(project);
        }
      });
    }
  };

  // Add and remove projects to the project list so they can be saved in localStorage
  const addProjectToList = (project) => {
    getProjectList();
    projectList.push(project);
    setProjectList();
  };

  const removeProjectFromList = (project) => {
    getProjectList();
    if (projectList.length > 1) {
      projectList.splice(projectList.indexOf(project.title), 1);
      setProjectList();
    } else if (projectList.length == 1) {
      projectList.pop();
      localStorage.removeItem('projectList');
    }
  };

  return {
    projectList,
    setProjectList,
    getProjectList,
    addProjectToList,
    removeProjectFromList,
  };
})();

const storeTodos = (() => {
  const setTodoList = (project) => {
    const storedProjectTodoList = [];

    project.projectTodoList.forEach((todo) => {
      localStorage.setItem(
        project.title + ' ' + todo.title + ' todo info',
        todo.todoInfo,
      );
      storedProjectTodoList.push(todo.title);
    });
    localStorage.setItem(
      project.title + ' project todo list',
      storedProjectTodoList,
    );
  };

  const getTodoList = () => {
    projectObjectList.forEach((project) => {
      if (
        localStorage.getItem(project.title + ' project todo list') !=
                null
      ) {
        const storedProjectTodoListTitles = localStorage
          .getItem(project.title + ' project todo list')
          .split(',');

        storedProjectTodoListTitles.forEach((todoTitle) => {
          if (!project.projectTodoListTitles.includes(todoTitle)) {
            project.projectTodoListTitles.push(todoTitle);
          }
        });
      }
    });
  };

  return { setTodoList, getTodoList };
})();

export { projectList, storeProjects, storeTodos };
