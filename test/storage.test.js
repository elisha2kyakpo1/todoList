import {
  projectList,
  storeTodos,
  projectFactory,
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
  test('Creates a new project, createProjects()', () => {
    const projectObjectListTitles = ['first project', 'second project'];
    for (let i = 0; i < projectObjectListTitles.length; i += 1) {
      if (projectObjectListTitles[i].innerHTML === 'Morning Mommy') {
        expect(createProjects).toContain('second project');
      }
    }
  });
  test('Remove project from list', () => {
    const project = ['first project', 'second project'];
    removeProject('second project');
    expect(project[1]).toBe('second project');
  });
});