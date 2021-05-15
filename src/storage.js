const projectList = [];
const projectObjectList = [];

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
    if (localStorage.length === 0) {
      setProjectList();
    } else {
      const storedProjectList = localStorage.getItem('projectList').split(',');
      storedProjectList.forEach((project) => {
        if (!projectList.includes(project) || projectList.length === 0) {
          projectList.push(project);
        }
      });
    }
  };

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
    } else if (projectList.length === 1) {
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

const storeTodos = () => {
  const setTodoList = (project) => {
    const storedProjectTodoList = [];

    project.projectTodoList.forEach((todo) => {
      localStorage.setItem(
        `${project.title} ${todo.title} todo info`,
        todo.todoInfo,
      );
      storedProjectTodoList.push(todo.title);
    });
    localStorage.setItem(
      `${project.title} project todo list`,
      storedProjectTodoList,
    );
  };

  const getTodoList = () => {
    projectObjectList.forEach((project) => {
      if (
        localStorage.getItem(`${project.title} project todo list`) !== null
      ) {
        const storedProjectTodoListTitles = localStorage
          .getItem(`${project.title} project todo list`)
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
};

const projectFactory = (title) => {
  const projectTodoList = [];

  const projectTodoListTitles = [];

  const addToProjectTodoList = (todoObject) => {
    projectTodoList.push(todoObject);
  };

  const removeFromProjectList = (todoObject) => {
    projectTodoList.splice(projectTodoList.indexOf(todoObject), 1);
  };

  return {
    title,
    projectTodoList,
    projectTodoListTitles,
    addToProjectTodoList,
    removeFromProjectList,
  };
};

const createProjects = () => {
  storeProjects.getProjectList();
  const projectObjectListTitles = [];
  projectObjectList.forEach((projectObject) => {
    projectObjectListTitles.push(projectObject.title);
  });
  storeProjects.projectList.forEach((project) => {
    if (!projectObjectListTitles.includes(project)) {
      const newProject = projectFactory(project);
      return projectObjectList.push(newProject);
    }
    return projectObjectListTitles;
  });
};

const removeProject = (project) => {
  if (projectObjectList.length > 1) {
    projectObjectList.splice(projectObjectList.indexOf(project), 1);
  }
};

export {
  projectList,
  storeProjects,
  storeTodos,
  projectFactory,
  projectObjectList,
  createProjects,
  removeProject,
};
