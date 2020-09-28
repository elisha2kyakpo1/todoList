import { todoFactory, createTodos } from "./todo-object.js"
import { storeProjects, storeTodos } from "./storage.js";
import { projectFactory } from "./project-object.js";


const renderToDoObjects = (project) => {

    let todoContainer = document.createElement("div");
    todoContainer.setAttribute("id", "todoContainer");

    // Render Todos
    if (project.projectTodoList.length > 0) {
        console.log(project)
        project.projectTodoList.forEach(i => {
            const todo = document.createElement("div");
            if (i.doneStatus == "Incomplete") {
                todo.setAttribute("class", "todo")
            }

            else {
                todo.setAttribute("class", "todoCompleted")
            }

            const todoInfo = document.createElement("div");
            todoInfo.setAttribute("class", "todoInfo");

            const todoTitle = document.createElement("p");
            todoTitle.setAttribute("class", "todoTitle");
            todoTitle.append(i.title)

            const dueDateContainer = document.createElement("div");
            dueDateContainer.setAttribute("class", "dueDateContainer");

            const todoDueDateHeading = document.createElement("p");
            todoDueDateHeading.setAttribute("class", "todoDueDateHeading");
            if (i.dueDate != undefined && i.dueDate != "") {
                todoDueDateHeading.textContent = "Due Date: " + i.dueDate;
            }

            const todoPriorityContainer = document.createElement("div");
            todoPriorityContainer.setAttribute("class", "todoPriorityContainer");

            const priorityHeading = document.createElement("p");
            priorityHeading.setAttribute("class", "priorityHeading");
            priorityHeading.textContent = "Priority: " + i.priority;

            const todoNote = document.createElement("p");
            todoNote.setAttribute("class", "todoNote");
            if (i.note != undefined && todo.note != "") {
                todoNote.textContent = "Note: \n" + i.note;
            }


            dueDateContainer.append(todoDueDateHeading);
            todoPriorityContainer.append(priorityHeading);
            todoInfo.append(todoTitle, dueDateContainer, todoPriorityContainer, todoNote);
            todo.append(todoInfo);


            //Todo remove functionality
            const todoRemoveBtn = document.createElement("button");
            todoRemoveBtn.setAttribute("class", "todoRemoveBtn");
            todoRemoveBtn.textContent = "Remove Todo";
            todoRemoveBtn.addEventListener("click", (e) => {
                project.projectTodoList.splice(project.projectTodoList.indexOf(i), 1);
                storeTodos.setTodoList(project);
                localStorage.removeItem(project.title + " " + i.title + " todo info", todo.todoInfo);
                if (localStorage[project.title + " project todo list"].length == 0) {
                    localStorage.removeItem(project.title + " project todo list")
                }
                todo.remove();
            })


            todo.append(todoRemoveBtn);

            const todoEditButton = document.createElement("button");
            todoEditButton.setAttribute("class", "todoEditBtn");
            todoEditButton.textContent = "Edit";

            todoEditButton.addEventListener("click", (e) => {
                const editTodoPopup = document.createElement("div");
                editTodoPopup.setAttribute("id", "editTodoPopup");
                editTodoPopup.setAttribute("class", "editTodoPopup");

                todo.append(editTodoPopup);

                const todoTitleInput = document.createElement("input");
                todoTitleInput.setAttribute("id", "todoTitleInput");
                todoTitleInput.value = i.title;
                editTodoPopup.append(todoTitleInput);

                const tododueDate = document.createElement("input");
                tododueDate.setAttribute("class", "tododueDate");
                tododueDate.setAttribute("type", "date");
                tododueDate.value = i.dueDate;
                editTodoPopup.append(tododueDate)

                const todoPriorityLabel = document.createElement("label");
                todoPriorityLabel.setAttribute("for", "todoPriority");
                todoPriorityLabel.textContent = "Priority:"

                const todoPriority = document.createElement("select");
                todoPriority.setAttribute("name", "todoPriority");
                todoPriority.setAttribute("id", "todoPriority");

                const todoPriorityLow = document.createElement("option");
                todoPriorityLow.setAttribute("value", "low");
                todoPriorityLow.textContent = "Low";

                const todoPriorityMed = document.createElement("option");
                todoPriorityMed.setAttribute("value", "med");
                todoPriorityMed.textContent = "Medium";

                const todoPriorityHigh = document.createElement("option");
                todoPriorityHigh.setAttribute("value", "high");
                todoPriorityHigh.textContent = "High";

                todoPriority.append(todoPriorityHigh, todoPriorityMed, todoPriorityLow);

                editTodoPopup.append(todoPriorityLabel, todoPriority);

                const todoNoteInputLabel = document.createElement("label");
                todoNoteInputLabel.setAttribute("class", "todoNoteInputLabel");
                todoNoteInputLabel.setAttribute("for", "todoNoteInput")
                todoNoteInputLabel.textContent = "Note:";

                const todoNoteInput = document.createElement("input");
                todoNoteInput.setAttribute("class", "todoNoteInput");

                editTodoPopup.append(todoNoteInputLabel, todoNoteInput);

                const todoSubmitBtn = document.createElement("button");
                todoSubmitBtn.textContent = "Save";
                todoSubmitBtn.addEventListener("click", (e) => {
                    if (todoTitleInput.value == "") {
                        editTodoPopup.setAttribute("class", "popupError");
                    }
                    else {
                        const todoTitleInput = document.querySelector("#todoTitleInput");

                        const editedTodo = todoFactory(todoTitleInput.value, tododueDate.value, todoPriority.value, todoNoteInput.value);
                        project.projectTodoList.splice(project.projectTodoList.indexOf(i), 1, editedTodo);
                        project.projectTodoListTitles.splice(project.projectTodoListTitles.indexOf(i), 1, editedTodo.title);
                        localStorage.removeItem(project.title + " " + i.title + " todo info");

                        if (content.contains(todoContainer)) {
                            todoContainer.remove();
                        }

                        storeTodos.setTodoList(project);
                        createTodos();
                        renderToDoObjects(project);
                    }

                });
                editTodoPopup.append(todoSubmitBtn);

            });

            todo.append(todoEditButton);

            //Todo complete button

            const todoCompleteBtn = document.createElement("button");
            todoCompleteBtn.setAttribute("class", "todoCompleteBtn");
            todoCompleteBtn.textContent = "Complete";

            todoCompleteBtn.addEventListener("click", function (e) {
                switch (i.doneStatus) {
                    case "Incomplete":


                        console.log(i)
                        const completeTodo = todoFactory(i.title, i.dueDate, i.priority, i.note, "Complete");
                        todo.setAttribute("class", "todoCompleted");
                        project.projectTodoList.splice(project.projectTodoList.indexOf(i), 1, completeTodo);
                        project.projectTodoListTitles.splice(project.projectTodoListTitles.indexOf(i), 1, completeTodo.title);
                        break;


                    case "Complete":
                        console.log(i)
                        const incompleteTodo = todoFactory(i.title, i.dueDate, i.priority, i.note, "Incomplete");
                        todo.setAttribute("class", "todo");
                        project.projectTodoList.splice(project.projectTodoList.indexOf(i), 1, incompleteTodo);
                        project.projectTodoListTitles.splice(project.projectTodoListTitles.indexOf(i), 1, incompleteTodo.title);
                        break;
                }
                if (content.contains(todoContainer)) {
                    todoContainer.remove();
                }

                localStorage.removeItem(project.title + " " + i.title + " todo info");
                storeTodos.setTodoList(project);
                createTodos();
                renderToDoObjects(project);
            });

            todo.append(todoCompleteBtn);


            todoContainer.append(todo)
        });
    }

    //Todo create functionality
    const todoCreateBtn = document.createElement("button");
    todoCreateBtn.setAttribute("class", "todoCreateBtn");
    todoCreateBtn.textContent = "New Todo";

    todoCreateBtn.addEventListener("click", (e) => {
        const todoContainer = document.querySelector("#todoContainer");

        const createTodoPopup = document.createElement("div");
        createTodoPopup.setAttribute("id", "createTodoPopup");
        todoContainer.append(createTodoPopup);

        const todoTitleInput = document.createElement("input");
        todoTitleInput.setAttribute("id", "todoTitleInput");
        createTodoPopup.append(todoTitleInput);

        const tododueDate = document.createElement("input");
        tododueDate.setAttribute("class", "tododueDate");
        tododueDate.setAttribute("type", "date");
        createTodoPopup.append(tododueDate)

        const todoPriorityLabel = document.createElement("label");
        todoPriorityLabel.setAttribute("for", "todoPriority");
        todoPriorityLabel.textContent = "Priority:"

        const todoPriority = document.createElement("select");
        todoPriority.setAttribute("name", "todoPriority");
        todoPriority.setAttribute("id", "todoPriority");

        const todoPriorityLow = document.createElement("option");
        todoPriorityLow.setAttribute("value", "low");
        todoPriorityLow.textContent = "Low";

        const todoPriorityMed = document.createElement("option");
        todoPriorityMed.setAttribute("value", "med");
        todoPriorityMed.textContent = "Medium";

        const todoPriorityHigh = document.createElement("option");
        todoPriorityHigh.setAttribute("value", "high");
        todoPriorityHigh.textContent = "High";

        todoPriority.append(todoPriorityHigh, todoPriorityMed, todoPriorityLow);

        createTodoPopup.append(todoPriorityLabel, todoPriority);

        const todoNoteInputLabel = document.createElement("label");
        todoNoteInputLabel.setAttribute("class", "todoNoteInputLabel");
        todoNoteInputLabel.setAttribute("for", "todoNoteInput")
        todoNoteInputLabel.textContent = "Note:";

        const todoNoteInput = document.createElement("input");
        todoNoteInput.setAttribute("class", "todoNoteInput");

        createTodoPopup.append(todoNoteInputLabel, todoNoteInput);

        const todoSubmitBtn = document.createElement("button");
        todoSubmitBtn.textContent = "Save";
        todoSubmitBtn.addEventListener("click", (e) => {
            if (todoTitleInput.value == "") {
                editTodoPopup.setAttribute("class", "popupError");
            }
            else {
                const todoTitleInput = document.querySelector("#todoTitleInput")
                const newTodo = todoFactory(todoTitleInput.value, tododueDate.value, todoPriority.value, todoNoteInput.value);
                project.projectTodoList.push(newTodo);
                if (content.contains(todoContainer)) {
                    todoContainer.remove();
                }

                storeTodos.setTodoList(project);
                createTodos();
                project.projectTodoListTitles.push(todoTitleInput.value)
                renderToDoObjects(project);

            }
        });
        createTodoPopup.append(todoSubmitBtn);
    });
    todoContainer.append(todoCreateBtn);
    projectAndTodoContainer.append(todoContainer);
}
export { renderToDoObjects }