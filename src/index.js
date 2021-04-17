import { renderPage } from './render-page';
import { todoFactory } from './todo-object';
import { projectFactory, createProjects } from './project-object';
import { storeProjects } from './storage';
import { renderProjectList } from './render-projects';

storeProjects.getProjectList();
storeProjects.setProjectList();
createProjects();
renderProjectList();
renderPage();
todoFactory();
projectFactory();
