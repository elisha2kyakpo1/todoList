import { projectObjectList } from "./project-object.js";

const todoFactory = (
    title,
    dueDate,
    priority,
    note = "None",
    doneStatus = "Incomplete"
) => {
    let todoInfo = [title, dueDate, priority, note, doneStatus];

    return {
        title,
        dueDate,
        priority,
        note,
        doneStatus,
        todoInfo,
    };
};

const createTodos = () => {
    projectObjectList.forEach((project) => {
        if (project.projectTodoListTitles.length > 0) {
            project.projectTodoListTitles.forEach((title) => {
                const localTodos = localStorage.getItem(
                    project.title + " " + title + " todo info"
                );

                if (localTodos != "" && localTodos != undefined) {
                    const todoInfo = localStorage[
                        project.title + " " + title + " todo info"
                    ].split(",");
                    let newTodo = todoFactory(
                        todoInfo[0],
                        todoInfo[1],
                        todoInfo[2],
                        todoInfo[3],
                        todoInfo[4]
                    );

                    const projectTodoTitles = [];
                    project.projectTodoList.forEach((todo) => {
                        projectTodoTitles.push(todo.title);
                    });

                    if (!projectTodoTitles.includes(title)) {
                        project.addToProjectTodoList(newTodo);
                    }
                }
            });
        }
    });
}

export { todoFactory, createTodos };
