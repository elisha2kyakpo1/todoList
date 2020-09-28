import { storeProjects, projectList } from "./storage.js"


const projectFactory = (title) => {
    const projectTodoList = [];

    const projectTodoListTitles = [];

    //Used to add toDo objects to the project list
    function addToProjectTodoList(todoObject) {
        projectTodoList.push(todoObject);
    }

    function removeFromProjectList(todoObject) {
        projectTodoList.splice(projectTodoList.indexOf(todoObject), 1);
    }

    const removeProjectFromList = (project) => {
        projectList.splice(projectList.indexOf(project), 1);
    }

    function changeTitle(newTitle) {
        return this.title = newTitle;
    }



    return {
        title,
        changeTitle,
        projectTodoList, projectTodoListTitles,
        addToProjectTodoList, removeFromProjectList,
    }
}

let projectObjectList = [];

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

function removeProject(project) {
    if (projectObjectList.length > 1) {
        projectObjectList.splice(projectObjectList.indexOf(project), 1);
    }
    else if (projectObjectList.length == 1) {
        projectObjectList = []
        console.log(projectObjectList)
    };
}
//Why have to click twice!?
createProjects();


export { projectFactory, projectObjectList, createProjects, removeProject }