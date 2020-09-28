import { projectFactory, createProjects, projectObjectList, projectObjectListTitles } from "./project-object.js";
import { todoFactory, createTodos } from "./todo-object.js"

const projectList = [];

// See if I can make this deletable
// Create projects on load
if (localStorage.length == 0) {
    projectList.push("Default");
}


const storeProjects = (() => {


    function setProjectList() {
        projectList.forEach(project => {
            if (project != "") {
                localStorage.setItem("projectList", projectList);
            }
        });
    }

    function getProjectList() {
        if (localStorage.length == 0) {
            setProjectList();
        }
        else {
            const storedProjectList = localStorage["projectList"].split(",");
            storedProjectList.forEach(project => {
                if (!projectList.includes(project) || projectList.length == 0) {
                    projectList.push(project);
                }
            });
        }
    }

    const addProjectToList = (project) => {
        getProjectList();
        projectList.push(project);
        setProjectList();
    }

    const removeProjectFromList = (project) => {
        getProjectList();
        if (projectList.length > 1) {
            projectList.splice(projectList.indexOf(project.title), 1);
            console.log(projectList)
            setProjectList();
        }
        else if (projectList.length == 1) {
            projectList.pop();
            localStorage.removeItem("projectList")
        };
    }


    return { projectList, setProjectList, getProjectList, addProjectToList, removeProjectFromList }
})();

const storeTodos = (() => {

    // function setTodoList() {
    //     const storedProjectTodoList = [];
    //     projectObjectList.forEach(project => {
    //         project.projectTodoList.forEach(todo => {
    //             localStorage.setItem(project.title + " " + todo.title + " todo info", todo.todoInfo);
    //             storedProjectTodoList.push(todo.title)
    //         })
    //         localStorage.setItem(project.title + " project todo list", storedProjectTodoList);
    //     });
    // }


    function setTodoList(project) {
        const storedProjectTodoList = [];

        project.projectTodoList.forEach(todo => {
            localStorage.setItem(project.title + " " + todo.title + " todo info", todo.todoInfo);
            storedProjectTodoList.push(todo.title)
        })
        localStorage.setItem(project.title + " project todo list", storedProjectTodoList);
    }


    function getTodoList() {
        projectObjectList.forEach(project => {
            if (localStorage.getItem(project.title + " project todo list") != null) {
                const storedProjectTodoListTitles = localStorage.getItem(project.title + " project todo list").split(",");

                storedProjectTodoListTitles.forEach(todoTitle => {
                    if (!project.projectTodoListTitles.includes(todoTitle)) {
                        project.projectTodoListTitles.push(todoTitle);
                    }
                });
            }
        });

    }

    return { setTodoList, getTodoList }
})();



export { projectList, storeProjects, storeTodos }