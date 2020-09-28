import { storeProjects, projectList } from "./storage.js"


const projectFactory = (title) => {
    const projectTodoList = [];

    const projectTodoListTitles = [];

    function addToProjectTodoList(todoObject) {
        projectTodoList.push(todoObject);
    }

    function removeFromProjectList(todoObject) {
        projectTodoList.splice(projectTodoList.indexOf(todoObject), 1);
    }

    const removeProjectFromList = (project) => {
        projectList.splice(projectList.indexOf(project), 1);
    }

    return {
        title,
        projectTodoList, projectTodoListTitles,
        addToProjectTodoList, removeFromProjectList,
    }
}

//Project objects stored in a list
let projectObjectList = [];

//Create the project objects and push them to the above list
function createProjects() {
    storeProjects.getProjectList();
    const projectObjectListTitles = [];
    projectObjectList.forEach(projectObject => {
        projectObjectListTitles.push(projectObject.title);
    });
    storeProjects.projectList.forEach(project => {
        if (!projectObjectListTitles.includes(project)) {
            const newProject = projectFactory(project);
            return projectObjectList.push(newProject);
        }
    });
}

//Remove projects from the list above
function removeProject(project) {
    if (projectObjectList.length > 1) {
        projectObjectList.splice(projectObjectList.indexOf(project), 1);
    }
    else if (projectObjectList.length == 1) {
        projectObjectList = [];
    };
}



export { projectFactory, projectObjectList, createProjects, removeProject }
