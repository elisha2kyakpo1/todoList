import { storeProjects, projectList } from "./storage.js";

const projectFactory = (title) => {
    const projectTodoList = [];

    const projectTodoListTitles = [];

    const addToProjectTodoList = (todoObject) => {
        projectTodoList.push(todoObject);
    }

    const removeFromProjectList = (todoObject) => {
        projectTodoList.splice(projectTodoList.indexOf(todoObject), 1);
    }

    const removeProjectFromList = (project) => {
        projectList.splice(projectList.indexOf(project), 1);
    };

    return {
        title,
        projectTodoList,
        projectTodoListTitles,
        addToProjectTodoList,
        removeFromProjectList,
    };
};

//Project objects stored in a list
let projectObjectList = [];

//Create the project
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
    });
}

// Remove projects 
const removeProject = (project) => {
    if (projectObjectList.length > 1) {
        projectObjectList.splice(projectObjectList.indexOf(project), 1);
    } else if (projectObjectList.length == 1) {
        projectObjectList = [];
    }
}

export { projectFactory, projectObjectList, createProjects, removeProject };
