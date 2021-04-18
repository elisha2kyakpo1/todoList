import { todoFactory, createTodos } from './todo-object';
import { storeTodos } from './storage';

const content = document.querySelector('#content');

// Render all todos for a project
const renderToDoObjects = (project) => {
  const todoContainer = document.createElement('div');
  todoContainer.setAttribute('id', 'todoContainer');

  if (project.projectTodoList.length > 0) {
    project.projectTodoList.forEach((i) => {
      const todo = document.createElement('div');
      if (i.doneStatus === 'Complete') {
        todo.setAttribute('class', 'todoCompleted');
      } else if (i.doneStatus === 'Incomplete' && i.priority === 'High') {
        todo.setAttribute('class', 'todoHighPriority');
      } else if (i.doneStatus === 'Incomplete' && i.priority === 'Medium') {
        todo.setAttribute('class', 'todoMediumPriority');
      } else if (i.doneStatus === 'Incomplete' && i.priority === 'Low') {
        todo.setAttribute('class', 'todoLowPriority');
      }

      const todoInfo = document.createElement('div');
      todoInfo.setAttribute('class', 'todoInfo');

      const todoTitle = document.createElement('p');
      todoTitle.setAttribute('class', 'todoTitle');
      todoTitle.append(i.title);

      const dueDateContainer = document.createElement('div');
      dueDateContainer.setAttribute('class', 'dueDateContainer');

      const todoDueDateHeading = document.createElement('p');
      todoDueDateHeading.setAttribute('class', 'todoDueDateHeading');
      if (i.dueDate !== undefined && i.dueDate !== '') {
        todoDueDateHeading.textContent = `Due Date: ${i.dueDate}`;
      }

      const todoPriorityContainer = document.createElement('div');
      todoPriorityContainer.setAttribute(
        'class',
        'todoPriorityContainer'
      );

      const priorityHeading = document.createElement('p');
      priorityHeading.setAttribute('class', 'priorityHeading');
      priorityHeading.textContent = `Priority: ${i.priority}`;

      const todoNote = document.createElement('p');
      todoNote.setAttribute('class', 'todoNote');
      if (i.note !== undefined && todo.note !== '') {
        todoNote.textContent = `Note: \n + ${i.note}`;
      }

      dueDateContainer.append(todoDueDateHeading);
      todoPriorityContainer.append(priorityHeading);
      todoInfo.append(
        todoTitle,
        dueDateContainer,
        todoPriorityContainer,
        todoNote
      );
      todo.append(todoInfo);

      // Todo remove functionality
      const todoRemoveBtn = document.createElement('button');
      todoRemoveBtn.setAttribute('class', 'todoRemoveBtn');
      todoRemoveBtn.textContent = 'X';
      todoRemoveBtn.addEventListener('click', (e) => {
        project.removeFromProjectList(i);
        storeTodos.setTodoList(project);
        localStorage.removeItem(
          project.title` ${i.title} todo info`,
          todo.todoInfo,
        );
        if (
          localStorage[project.title` project todo list`].length === 0
        ) {
          localStorage.removeItem(
            project.title` project todo list`,
          );
        }
        todo.remove();
      });

      todo.append(todoRemoveBtn);

      const todoEditButton = document.createElement('button');
      todoEditButton.setAttribute('class', 'btn');
      todoEditButton.textContent = 'Edit';

      todoEditButton.addEventListener('click', () => {
        todoEditButton.remove();
        const editTodoPopup = document.createElement('div');
        editTodoPopup.setAttribute('id', 'editTodoPopup');

        todo.append(editTodoPopup);

        const todoTitleText = document.createElement('p');
        todoTitleText.setAttribute('class', 'todoTitleText');
        todoTitleText.textContent = 'Title:';
        editTodoPopup.append(todoTitleText);

        const todoTitleInput = document.createElement('input');
        todoTitleInput.setAttribute('class', 'todoTitleInput');
        todoTitleInput.value = i.title;
        editTodoPopup.append(todoTitleInput);

        const todoDueText = document.createElement('p');
        todoDueText.setAttribute('id', 'todoDueText');
        todoDueText.textContent = 'Due:';
        editTodoPopup.append(todoDueText);

        const todoDueDateInput = document.createElement('input');
        todoDueDateInput.setAttribute('class', 'todoDueDateInput');
        todoDueDateInput.setAttribute('type', 'date');
        todoDueDateInput.value = i.dueDate;
        editTodoPopup.append(todoDueDateInput);

        const todoPriorityLabel = document.createElement('label');
        todoPriorityLabel.setAttribute('for', 'todoPriorityInput');
        todoPriorityLabel.textContent = 'Priority: ';

        const todoPriorityInput = document.createElement('select');
        todoPriorityInput.setAttribute('name', 'todoPriorityInput');
        todoPriorityInput.setAttribute('class', 'todoPriorityInput');

        const todoPriorityLow = document.createElement('option');
        todoPriorityLow.setAttribute('value', 'Low');
        todoPriorityLow.textContent = 'Low';

        const todoPriorityMed = document.createElement('option');
        todoPriorityMed.setAttribute('value', 'Medium');
        todoPriorityMed.textContent = 'Medium';

        const todoPriorityHigh = document.createElement('option');
        todoPriorityHigh.setAttribute('value', 'High');
        todoPriorityHigh.textContent = 'High';

        todoPriorityInput.append(
          todoPriorityHigh,
          todoPriorityMed,
          todoPriorityLow,
        );

        editTodoPopup.append(todoPriorityLabel, todoPriorityInput);

        const todoNoteInputLabel = document.createElement('label');
        todoNoteInputLabel.setAttribute('class', 'todoNoteInputLabel');
        todoNoteInputLabel.setAttribute('for', 'todoNoteInput');
        todoNoteInputLabel.textContent = 'Note:';

        const todoNoteInput = document.createElement('input');
        todoNoteInput.setAttribute('class', 'todoNoteInput');

        editTodoPopup.append(todoNoteInputLabel, todoNoteInput);

        const noNameError = document.createElement('p');
        noNameError.setAttribute('class', 'noNameError');
        noNameError.textContent = 'Enter a name!';

        const todoSubmitBtn = document.createElement('button');
        todoSubmitBtn.setAttribute('class', 'btn');
        todoSubmitBtn.textContent = 'Save';
        todoSubmitBtn.addEventListener('click', () => {
          if (todoTitleInput.value === '') {
            if (!editTodoPopup.contains(noNameError)) {
              editTodoPopup.append(noNameError);
            }
          } else {
            const todoTitleInput = document.querySelector(
              '.todoTitleInput'
            );

            const editedTodo = todoFactory(
              todoTitleInput.value,
              todoDueDateInput.value,
              todoPriorityInput.value,
              todoNoteInput.value,
            );
            project.projectTodoList.splice(
              project.projectTodoList.indexOf(i),
              1,
              editedTodo,
            );
            project.projectTodoListTitles.splice(
              project.projectTodoListTitles.indexOf(i),
              1,
              editedTodo.title,
            );
            localStorage.removeItem(
              project.title` ${i.title} todo info`,
            );

            if (content.contains(todoContainer)) {
              todoContainer.remove();
            }

            storeTodos.setTodoList(project);
            createTodos();
            renderToDoObjects(project);
            todoCompleteBtn.insertAdjacentElement(
              'beforebegin',
              todoEditButton,
            );
          }
        });
        editTodoPopup.append(todoSubmitBtn);
      });

      todo.append(todoEditButton);

      // Todo complete button

      const todoCompleteBtn = document.createElement('button');
      todoCompleteBtn.setAttribute('class', 'btn');
      todoCompleteBtn.textContent = 'Complete';

      todoCompleteBtn.addEventListener('click', () => {
        switch (i.doneStatus) {
          case 'Incomplete': {
            const completeTodo = todoFactory(
              i.title,
              i.dueDate,
              i.priority,
              i.note,
              'Complete',
            );
            todo.setAttribute('class', 'todoCompleted');
            project.projectTodoList.splice(
              project.projectTodoList.indexOf(i),
              1,
              completeTodo,
            );
            project.projectTodoListTitles.splice(
              project.projectTodoListTitles.indexOf(i),
              1,
              completeTodo.title,
            );
          }
            break;

          case 'Complete': {
            const incompleteTodo = todoFactory(
              i.title,
              i.dueDate,
              i.priority,
              i.note,
              'Incomplete',
            );
            todo.setAttribute('class', 'todo');
            project.projectTodoList.splice(
              project.projectTodoList.indexOf(i),
              1,
              incompleteTodo,
            );
            project.projectTodoListTitles.splice(
              project.projectTodoListTitles.indexOf(i),
              1,
              incompleteTodo.title,
            );
          }
            break;
          default:
        }
        if (content.contains(todoContainer)) {
          todoContainer.remove();
        }

        localStorage.removeItem(
          project.title` ${i.title}todo info`,
        );
        storeTodos.setTodoList(project);
        createTodos();
        renderToDoObjects(project);
      });

      todo.append(todoCompleteBtn);

      todoContainer.insertAdjacentElement('afterbegin', todo);
    });
  }

  // Todo create functionality
  const todoCreateBtnContainer = document.createElement('div');
  todoCreateBtnContainer.setAttribute('class', 'todoCreateBtnContainer');

  const todoCreateBtn = document.createElement('button');
  todoCreateBtn.setAttribute('class', 'todoCreateBtn');
  todoCreateBtn.textContent = 'New Todo';

  todoCreateBtn.addEventListener('click', () => {
    todoCreateBtn.remove();

    const createTodoPopup = document.createElement('div');
    createTodoPopup.setAttribute('id', 'createTodoPopup');
    todoContainer.insertAdjacentElement('afterbegin', createTodoPopup);

    const todoTitleText = document.createElement('p');
    todoTitleText.setAttribute('id', 'todoTitleText');
    todoTitleText.textContent = 'Title:';
    createTodoPopup.append(todoTitleText);

    const todoTitleInput = document.createElement('input');
    todoTitleInput.setAttribute('class', 'todoTitleInput');
    createTodoPopup.append(todoTitleInput);

    const todoDueText = document.createElement('p');
    todoDueText.setAttribute('id', 'todoDueText');
    todoDueText.textContent = 'Due:';
    createTodoPopup.append(todoDueText);

    const todoDueDateInput = document.createElement('input');
    todoDueDateInput.setAttribute('class', 'todoDueDateInput');
    todoDueDateInput.setAttribute('type', 'date');
    createTodoPopup.append(todoDueDateInput);

    const todoPriorityLabel = document.createElement('label');
    todoPriorityLabel.setAttribute('for', 'todoPriorityInput');
    todoPriorityLabel.textContent = 'Priority:';

    const todoPriorityInput = document.createElement('select');
    todoPriorityInput.setAttribute('name', 'todoPriorityInput');
    todoPriorityInput.setAttribute('class', 'todoPriorityInput');

    const todoPriorityLow = document.createElement('option');
    todoPriorityLow.setAttribute('value', 'Low');
    todoPriorityLow.textContent = 'Low';

    const todoPriorityMed = document.createElement('option');
    todoPriorityMed.setAttribute('value', 'Medium');
    todoPriorityMed.textContent = 'Medium';

    const todoPriorityHigh = document.createElement('option');
    todoPriorityHigh.setAttribute('value', 'High');
    todoPriorityHigh.textContent = 'High';

    todoPriorityInput.append(
      todoPriorityHigh,
      todoPriorityMed,
      todoPriorityLow,
    );

    createTodoPopup.append(todoPriorityLabel, todoPriorityInput);

    const todoNoteInputLabel = document.createElement('label');
    todoNoteInputLabel.setAttribute('class', 'todoNoteInputLabel');
    todoNoteInputLabel.setAttribute('for', 'todoNoteInput');
    todoNoteInputLabel.textContent = 'Note:';

    const todoNoteInput = document.createElement('input');
    todoNoteInput.setAttribute('class', 'todoNoteInput');

    createTodoPopup.append(todoNoteInputLabel, todoNoteInput);

    const noNameError = document.createElement('p');
    noNameError.setAttribute('class', 'noNameError');
    noNameError.textContent = 'Enter a name!';

    const todoSubmitBtn = document.createElement('button');
    todoSubmitBtn.setAttribute('class', 'btn');
    todoSubmitBtn.textContent = 'Save';
    todoSubmitBtn.addEventListener('click', () => {
      if (todoTitleInput.value === '') {
        if (!createTodoPopup.contains(noNameError)) {
          createTodoPopup.append(noNameError);
        }
      } else {
        const todoTitleInput = document.querySelector(
          '.todoTitleInput',
        );
        const newTodo = todoFactory(
          todoTitleInput.value,
          todoDueDateInput.value,
          todoPriorityInput.value,
          todoNoteInput.value,
        );
        project.projectTodoList.push(newTodo);
        if (content.contains(todoContainer)) {
          todoContainer.remove();
        }

        storeTodos.setTodoList(project);
        createTodos();
        project.projectTodoListTitles.push(todoTitleInput.value);
        renderToDoObjects(project);
        todoCreateBtnContainer.append(todoCreateBtn);
      }
    });
    createTodoPopup.append(todoSubmitBtn);
  });
  todoCreateBtnContainer.append(todoCreateBtn);
  todoContainer.insertAdjacentElement('afterbegin', todoCreateBtnContainer);
  projectAndTodoContainer.append(todoContainer);
};
export default { renderToDoObjects };
