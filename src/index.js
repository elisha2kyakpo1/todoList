import { renderPage } from "./page-load.js";
import { todoFactory } from "./todo-object.js";
import { projectFactory, createProjects } from "./project-object.js";
import { renderToDoObjects } from "./render-todo-objects.js";
import { storeProjects, storeTodos } from "./storage.js";
import { renderProjectList } from "./render-projects.js";


const createTestProjects = (() => {

    storeProjects.getProjectList();
    storeProjects.setProjectList();
    renderProjectList();

})();
