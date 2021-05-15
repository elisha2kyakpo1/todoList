import { renderProject } from '../src/render-projects';

describe('Todo display testing', () => {
  document.body.innerHTML = '<div id="content"></div>';

  test('Display auto default todo', () => {
    const h3 = document.getElementsByTagName('h3');
    for (let i = 0; i < h3.length; i += 1) {
      if (h3[i].innerHTML === 'Morning mommy') {
        expect(h3[i].innerHTML).toBe('Morning mommy');
      }
    }
  });
  test('Check if the project is displayed', () => {
    const myProject = renderProject('default project');

    const projectTitle = document.getElementsByClassName('projectTitle');
    for (let i = 0; i < projectTitle.length; i += 1) {
      if (projectTitle[i].innerHTML === 'Morning Mommy') {
        expect(projectTitle[i].innerHTML).toBe('Morning Mommy');
        expect(myProject()).toBe('default project');
      }
    }
  });
});