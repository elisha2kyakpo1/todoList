import { projectObjectList } from "./project-object.js";

const todoFactory = (title, dueDate, priority, note, doneStatus = "Incomplete") => {


    function changeDueDate(newDueDate) {
        return this.dueDate = newDueDate;
    }

    function changePriority(newPriority) {
        return this.priority = newPriority;
    }

    function changeNote(newNote) {
        return this.note = newNote;
    }

    function changeDoneStatus(newDoneStatus) {
        return this.doneStatus = newDoneStatus;
    }

    let todoInfo = [title, dueDate, priority, note, doneStatus]

    return {
        title, dueDate, priority, note, doneStatus, todoInfo,
        changeDueDate, changePriority, changeNote, changeDoneStatus
    }
}

function createTodos() {
    projectObjectList.forEach(project => {
        if (project.projectTodoListTitles.length > 0) {
            project.projectTodoListTitles.forEach(title => {
                const localTodos = localStorage.getItem(project.title + " " + title + " todo info");

                if (localTodos != "" && localTodos != undefined) {
                    const todoInfo = localStorage[project.title + " " + title + " todo info"].split(",")
                    let newTodo = todoFactory(todoInfo[0], todoInfo[1], todoInfo[2], todoInfo[3], todoInfo[4]);

                    const projectTodoTitles = [];
                    project.projectTodoList.forEach(todo => { projectTodoTitles.push(todo.title) });

                    if (!projectTodoTitles.includes(title)) {
                        console.log(project.projectTodoListTitles)
                        project.addToProjectTodoList(newTodo);
                    }
                }
            });
        }
    });
}


export { todoFactory, createTodos }