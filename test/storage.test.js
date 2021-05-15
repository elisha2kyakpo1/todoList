import {
  projectList,
  // storeProjects,
  storeTodos,
  projectFactory,
  projectObjectList,
  createProjects,
  removeProject,
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
  test('Creates a new project, creatProjects()', () => {
    const projectObjectListTitles = ['first project', 'second project'];
    for (let i = 0; i < projectObjectListTitles.length; i += 1) {
      if (projectObjectListTitles[i].innerHTML === 'Morning Mommy') {
        expect(createProjects).toContain('second project');
      }
    }
  });
});