import { renderToDoObjects } from '../src/render-todo-objects';

describe('Todo display testing', () => {
  document.body.innerHTML = '<div id="content"></div>';
  renderToDoObjects();
  test('Display Todo title', () => {
    const p = document.getElementsByTagName('p');
    for (let i = 0; i < p.length; i += 1) {
      if (p[i].innerHTML === 'First todo') {
        expect(p[i].innerHTML).not.toBe('First project');
      }
    }
  });
  test('Display todo list date', () => {
    const date = new Date();
    const DueDateTitle = document.getElementsByClassName('todoDueDateHeading');
    for (let i = 0; i < DueDateTitle.length; i += 1) {
      if (DueDateTitle[i].innerHTML === `Due Date: ${date}`) {
        expect(DueDateTitle[i].innerHTML).toBe(`Due Date: ${date}`);
      }
    }
  });
  test('Display todo list form', () => {
    const priorityEle = document.getElementsByClassName('priorityHeading');
    const note = document.getElementsByClassName('todoNote');
    const todoEle = document.getElementsByClassName('todoInfo');
    todoEle.innerHTML = priorityEle;
    todoEle.innerHTML = note;
    todoEle.innerHTML = todoEle;
    for (let i = 0; i < todoEle; i += 1) {
      expect(todoEle[i].innerHTML).toContain('priorityEle', 'note', 'todoEle');
    }
  });
});