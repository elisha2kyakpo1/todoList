import { renderPage } from './render-page';
import { todoFactory } from './todo-object';
import { renderToDoObjects } from './render-todo-objects';
import {
  storeProjects,
  storeTodos,
  projectFactory,
  createProjects,
} from './storage';
import { renderProjectList } from './render-projects';

// storeProjects.getProjectList();
storeProjects.setProjectList();
createProjects();
renderProjectList();
renderToDoObjects();
storeTodos();
renderPage();
todoFactory();
projectFactory();
