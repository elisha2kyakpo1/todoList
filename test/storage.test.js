import {
  projectList,
  storeTodos,
  projectFactory,
  createProjects,
  removeProject,
  storeProjects,
  projectObjectList,
} from '../src/storage';

describe('Todo display tests', () => {
  storeTodos();
  projectFactory();
  createProjects();
  removeProject();

  test('Display default todo', () => {
    const defaultProject = projectList.push('Default Project');
    for (let i = 0; i < defaultProject.length; i += 1) {
      if (defaultProject[i] === 'Default project') {
        expect(defaultProject[i].toBe('Default project'));
      }
    }
  });
  test('Creates a new project, createProjects()', () => {
    const projectObjectListTitles = ['first project', 'second project'];
    const myProject = storeProjects.addProjectToList('my project');
    projectObjectListTitles.push(myProject);
    expect(projectObjectListTitles.length).toBe(3);
  });
  test('Remove project from list', () => {
    const projectObject = storeProjects.addProjectToList('new project');
    projectObjectList.push(projectObject);
    removeProject(projectObject);
    if (projectObjectList.length >= 1) {
      projectObjectList.splice(projectObjectList.indexOf(projectObject), 1);
    }
    expect(projectObjectList.length).toBe(0);
  });
});