import { renderPage } from './render-page';
import { todoFactory } from './todo-object';
import { projectFactory, createProjects } from './project-object';
import { renderToDoObjects } from './render-todo-objects';
import { storeProjects, storeTodos } from './storage';
import { renderProjectList } from './render-projects';

storeProjects.getProjectList();
storeProjects.setProjectList();
createProjects();
renderProjectList();
renderToDoObjects();
storeTodos();
renderPage();
todoFactory();
projectFactory();
