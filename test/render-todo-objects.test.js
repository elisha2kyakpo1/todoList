import { renderToDoObjects } from '../src/render-todo-objects';

const todo1 = renderToDoObjects(1, 'title1', 'dsc1', '01-January-2005', 'high', 'project1');
const todo2 = renderToDoObjects(2, 'title2', 'dsc2', '01-February-2005', 'low', 'project2');
const todo3 = renderToDoObjects(3, 'title3', 'dsc3', '01-March-2005', 'low', 'project3');
const todo4 = renderToDoObjects(4, 'title4', 'dsc4', '01-April-2005', 'medium', 'project2');

renderToDoObjects.push(todo1);
renderToDoObjects.push(todo2);
renderToDoObjects.push(todo3);
renderToDoObjects.push(todo4);

const allProjectsN = Filter.allProjects(todos);
const byProject2 = Filter.byProject(todos, 'project2');
const byPriorityLow = Filter.byPriority(todos, 'low');

test('should return all the projects names', () => {
  expect(allProjectsN).toEqual(['project1', 'project2', 'project3', 'Home', 'Work', 'Exercise']);
});

test('should return todos by project2', () => {
  expect(byProject2).toEqual([todo2, todo4]);
});

test('should return todos by priorityLow', () => {
  expect(byPriorityLow).toEqual([todo2, todo3]);
});