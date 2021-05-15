import { todoFactory, createTodos } from '../src/todo-object';
import { projectObjectList, projectFactory } from '../src/storage';

const todo = todoFactory('my title', '02/12/2021', 'Low', 'myProject', 'completed');
test('should have a title property', () => {
  expect(Object.prototype.hasOwnProperty.call(todo, 'title')).toBeTruthy();
});

test('should have a dueDate property', () => {
  expect(Object.prototype.hasOwnProperty.call(todo, 'DueDate')).toBeFalsy();
});

test('should have a priority property', () => {
  expect(Object.prototype.hasOwnProperty.call(todo, 'priority')).toBeTruthy();
});

test('should have a note property', () => {
  expect(Object.prototype.hasOwnProperty.call(todo, 'note')).toBeTruthy();
});

test('should have a doneStatus property', () => {
  expect(Object.prototype.hasOwnProperty.call(todo, 'doneStatus')).toBeTruthy();
});
test('Should create a todo', () => {
  const projectTodo = [];
  const todoObj = projectFactory().addToProjectTodoList(todo);
  projectTodo.push(todoObj);
  expect(createTodos()).not.toBe(todo);
});