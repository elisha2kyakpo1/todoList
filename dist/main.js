/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-page */ \"./src/render-page.js\");\n/* harmony import */ var _todo_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-object */ \"./src/todo-object.js\");\n/* harmony import */ var _render_todo_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-todo-objects */ \"./src/render-todo-objects.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _render_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-projects */ \"./src/render-projects.js\");\n\n\n\n\n\n\n_storage__WEBPACK_IMPORTED_MODULE_3__.storeProjects.setProjectList();\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.createProjects)();\n(0,_render_projects__WEBPACK_IMPORTED_MODULE_4__.renderProjectList)();\n(0,_render_todo_objects__WEBPACK_IMPORTED_MODULE_2__.renderToDoObjects)();\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeTodos)();\n(0,_render_page__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_todo_object__WEBPACK_IMPORTED_MODULE_1__.todoFactory)();\n(0,_storage__WEBPACK_IMPORTED_MODULE_3__.projectFactory)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/render-page.js":
/*!****************************!*\
  !*** ./src/render-page.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectAndTodoContainer = document.createElement('div');\nprojectAndTodoContainer.setAttribute('class', 'project-todo-container');\nconst projectsListContainer = document.createElement('div');\nprojectsListContainer.setAttribute('class', 'project-list');\nconst projects = document.createElement('div');\nprojects.setAttribute('class', 'project-div');\n\nconst renderPage = (() => {\n  const headingContainer = document.createElement('div');\n  const content = document.querySelector('#content');\n\n  headingContainer.setAttribute('id', 'headingContainer');\n\n  const heading = document.createElement('h2');\n  heading.textContent = 'Todo List';\n\n  headingContainer.append(heading);\n  content.append(headingContainer);\n\n  projectAndTodoContainer.setAttribute('id', 'projectAndTodoContainer');\n  content.append(projectAndTodoContainer);\n\n  projects.setAttribute('id', 'projects');\n\n  projectAndTodoContainer.append(projects);\n\n  projectsListContainer.setAttribute('id', 'projectsListContainer');\n\n  projects.append(projectsListContainer);\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);\n\n\n//# sourceURL=webpack://todo-list/./src/render-page.js?");

/***/ }),

/***/ "./src/render-projects.js":
/*!********************************!*\
  !*** ./src/render-projects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjectList\": () => (/* binding */ renderProjectList),\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject),\n/* harmony export */   \"renderProjectCreateBtn\": () => (/* binding */ renderProjectCreateBtn)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _todo_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-object */ \"./src/todo-object.js\");\n/* harmony import */ var _render_todo_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-todo-objects */ \"./src/render-todo-objects.js\");\n\n\n\n\nconst content = document.querySelector('#content');\nconst todoContainer = document.querySelector('#todoContainer');\n\nconst renderProject = (project) => {\n  const projectDiv = document.createElement('div');\n\n  projectDiv.setAttribute('class', 'project');\n\n  const projectTitle = document.createElement('p');\n  projectTitle.setAttribute('class', 'projectTitle');\n  projectTitle.append(project.title);\n\n  projectDiv.append(projectTitle);\n\n  const projectRemoveBtn = document.createElement('button');\n  projectRemoveBtn.setAttribute('class', 'projectRemoveBtn');\n  projectRemoveBtn.textContent = 'X';\n  projectRemoveBtn.addEventListener('click', () => {\n    const pageOverlay = document.createElement('div');\n    pageOverlay.setAttribute('id', 'pageOverlay');\n\n    pageOverlay.addEventListener('click', () => {\n      pageOverlay.remove();\n    });\n\n    const removeProjectCheckContainer = document.createElement('div');\n    removeProjectCheckContainer.setAttribute(\n      'id',\n      'removeProjectCheckContainer',\n    );\n\n    const removeProjectCheckText = document.createElement('p');\n    removeProjectCheckText.textContent = 'Are you sure you want to remove this project? \\n All todo items will be lost.';\n\n    const removeProjectCheckYes = document.createElement('button');\n    removeProjectCheckYes.setAttribute('class', 'removeCheckBtn');\n    removeProjectCheckYes.textContent = 'Remove';\n    removeProjectCheckYes.addEventListener('click', () => {\n      project.projectTodoList.forEach((i) => {\n        localStorage.removeItem(\n          `${project.title} ${i.title} todo info`,\n        );\n      });\n      localStorage.removeItem(`${project.title} project todo list`);\n      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.removeProject)(project);\n      _storage__WEBPACK_IMPORTED_MODULE_0__.storeProjects.removeProjectFromList(project);\n      pageOverlay.remove();\n      projectDiv.remove();\n      todoContainer.remove();\n    });\n\n    const removeProjectCheckNo = document.createElement('button');\n    removeProjectCheckNo.setAttribute('class', 'removeCheckBtn');\n    removeProjectCheckNo.textContent = 'Cancel';\n    removeProjectCheckNo.addEventListener('click', () => {\n      pageOverlay.remove();\n    });\n\n    removeProjectCheckContainer.append(\n      removeProjectCheckText,\n      removeProjectCheckYes,\n      removeProjectCheckNo,\n    );\n    pageOverlay.append(removeProjectCheckContainer);\n    content.insertAdjacentElement('afterbegin', pageOverlay);\n  });\n\n  projectDiv.append(projectRemoveBtn);\n\n  projectDiv.addEventListener('click', () => {\n    if (content.contains(todoContainer)) {\n      todoContainer.remove();\n    }\n    _storage__WEBPACK_IMPORTED_MODULE_0__.storeTodos.getTodoList();\n    (0,_todo_object__WEBPACK_IMPORTED_MODULE_1__.createTodos)();\n    (0,_render_todo_objects__WEBPACK_IMPORTED_MODULE_2__.renderToDoObjects)(project);\n  });\n};\n\nconst renderProjectList = () => {\n  _storage__WEBPACK_IMPORTED_MODULE_0__.projectObjectList.forEach((listItem) => {\n    renderProject(listItem);\n  });\n};\n\nconst renderProjectCreateBtn = (() => {\n  const projectCreateBtnContainer = document.createElement('div');\n  projectCreateBtnContainer.setAttribute('id', 'projectCreateBtnContainer');\n\n  const projectCreateBtn = document.createElement('button');\n  projectCreateBtn.setAttribute('id', 'projectCreateBtn');\n  projectCreateBtn.textContent = 'Create Project';\n  projectCreateBtn.addEventListener('click', () => {\n    projectCreateBtn.remove();\n    const createProjectPopup = document.createElement('div');\n    createProjectPopup.setAttribute('id', 'createProjectPopup');\n\n    const projectTitleText = document.createElement('p');\n    projectTitleText.setAttribute('id', 'projectTitleText');\n    projectTitleText.textContent = 'Title:';\n    createProjectPopup.append(projectTitleText);\n\n    const projectTitleInput = document.createElement('input');\n    projectTitleInput.setAttribute('id', 'projectTitleInput');\n    projectTitleInput.setAttribute('placeholder', 'New Project');\n    createProjectPopup.append(projectTitleInput);\n\n    const projectExistsError = document.createElement('p');\n    projectExistsError.setAttribute('class', 'projectExistsError');\n    projectExistsError.textContent = 'Project already exists!';\n\n    const noNameError = document.createElement('p');\n    noNameError.setAttribute('class', 'noNameError');\n    noNameError.textContent = 'Enter a name!';\n\n    const projectSubmitBtn = document.createElement('button');\n    projectSubmitBtn.textContent = 'Save';\n    projectSubmitBtn.setAttribute('class', 'btn');\n    projectSubmitBtn.addEventListener('click', () => {\n      if (_storage__WEBPACK_IMPORTED_MODULE_0__.projectList.includes(projectTitleInput.value)) {\n        if (!createProjectPopup.contains(projectExistsError)) {\n          createProjectPopup.insertAdjacentElement(\n            'afterend',\n            projectExistsError,\n          );\n        }\n      } else if (projectTitleInput.value === '') {\n        createProjectPopup.insertAdjacentElement(\n          'afterend',\n          noNameError,\n        );\n      } else if (projectTitleInput.value !== '') {\n        _storage__WEBPACK_IMPORTED_MODULE_0__.storeProjects.addProjectToList(projectTitleInput.value);\n        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.createProjects)();\n        createProjectPopup.remove();\n        projectTitleInput.remove();\n        projectSubmitBtn.remove();\n        projectCreateBtnContainer.append(projectCreateBtn);\n        renderProjectList();\n      }\n    });\n    createProjectPopup.append(projectSubmitBtn);\n  });\n\n  projectCreateBtnContainer.append(projectCreateBtn);\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/render-projects.js?");

/***/ }),

/***/ "./src/render-todo-objects.js":
/*!************************************!*\
  !*** ./src/render-todo-objects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderToDoObjects\": () => (/* binding */ renderToDoObjects),\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _todo_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-object */ \"./src/todo-object.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\nconst content = document.querySelector('#content');\n\nconst projectTodoList = [];\nconst renderToDoObjects = (project) => {\n  const todoContainer = document.createElement('div');\n  todoContainer.setAttribute('id', 'todoContainer');\n  const todoCompleteBtn = document.createElement('button');\n  if (projectTodoList.length > 0) {\n    project.projectTodoList.forEach((i) => {\n      const todo = document.createElement('div');\n      if (i.doneStatus === 'Complete') {\n        todo.setAttribute('class', 'todoCompleted');\n      } else if (i.doneStatus === 'Incomplete' && i.priority === 'High') {\n        todo.setAttribute('class', 'todoHighPriority');\n      } else if (i.doneStatus === 'Incomplete' && i.priority === 'Medium') {\n        todo.setAttribute('class', 'todoMediumPriority');\n      } else if (i.doneStatus === 'Incomplete' && i.priority === 'Low') {\n        todo.setAttribute('class', 'todoLowPriority');\n      }\n\n      const todoInfo = document.createElement('div');\n      todoInfo.setAttribute('class', 'todoInfo');\n\n      const todoTitle = document.createElement('p');\n      todoTitle.setAttribute('class', 'todoTitle');\n      todoTitle.append(i.title);\n\n      const dueDateContainer = document.createElement('div');\n      dueDateContainer.setAttribute('class', 'dueDateContainer');\n\n      const todoDueDateHeading = document.createElement('p');\n      todoDueDateHeading.setAttribute('class', 'todoDueDateHeading');\n      if (i.dueDate !== undefined && i.dueDate !== '') {\n        todoDueDateHeading.textContent = `Due Date: ${i.dueDate}`;\n      }\n\n      const todoPriorityContainer = document.createElement('div');\n      todoPriorityContainer.setAttribute(\n        'class',\n        'todoPriorityContainer',\n      );\n\n      const priorityHeading = document.createElement('p');\n      priorityHeading.setAttribute('class', 'priorityHeading');\n      priorityHeading.textContent = `Priority: ${i.priority}`;\n\n      const todoNote = document.createElement('p');\n      todoNote.setAttribute('class', 'todoNote');\n      if (i.note !== undefined && todo.note !== '') {\n        todoNote.textContent = `Note: \\n + ${i.note}`;\n      }\n\n      dueDateContainer.append(todoDueDateHeading);\n      todoPriorityContainer.append(priorityHeading);\n      todoInfo.append(\n        todoTitle,\n        dueDateContainer,\n        todoPriorityContainer,\n        todoNote,\n      );\n      todo.append(todoInfo);\n\n      const todoRemoveBtn = document.createElement('button');\n      todoRemoveBtn.setAttribute('class', 'todoRemoveBtn');\n      todoRemoveBtn.textContent = 'X';\n      todoRemoveBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        project.removeFromProjectList(i);\n        _storage__WEBPACK_IMPORTED_MODULE_1__.storeTodos.setTodoList(project);\n        localStorage.removeItem(\n          `${project.title} ${i.title} todo info`,\n          todo.todoInfo,\n        );\n        if (\n          localStorage[`${project.title} project todo list`].length === 0\n        ) {\n          localStorage.removeItem(\n            `${project.title} project todo list`,\n          );\n        }\n        todo.remove();\n      });\n\n      todo.append(todoRemoveBtn);\n\n      const todoEditButton = document.createElement('button');\n      todoEditButton.setAttribute('class', 'btn');\n      todoEditButton.textContent = 'Edit';\n\n      todoEditButton.addEventListener('click', (e) => {\n        e.preventDefault();\n        todoEditButton.remove();\n        const editTodoPopup = document.createElement('div');\n        editTodoPopup.setAttribute('id', 'editTodoPopup');\n\n        todo.append(editTodoPopup);\n\n        const todoTitleText = document.createElement('p');\n        todoTitleText.setAttribute('class', 'todoTitleText');\n        todoTitleText.textContent = 'Title:';\n        editTodoPopup.append(todoTitleText);\n\n        const todoTitleInput = document.createElement('input');\n        todoTitleInput.setAttribute('class', 'todoTitleInput');\n        todoTitleInput.value = i.title;\n        editTodoPopup.append(todoTitleInput);\n\n        const todoDueText = document.createElement('p');\n        todoDueText.setAttribute('id', 'todoDueText');\n        todoDueText.textContent = 'Due:';\n        editTodoPopup.append(todoDueText);\n\n        const todoDueDateInput = document.createElement('input');\n        todoDueDateInput.setAttribute('class', 'todoDueDateInput');\n        todoDueDateInput.setAttribute('type', 'date');\n        todoDueDateInput.value = i.dueDate;\n        editTodoPopup.append(todoDueDateInput);\n\n        const todoPriorityLabel = document.createElement('label');\n        todoPriorityLabel.setAttribute('for', 'todoPriorityInput');\n        todoPriorityLabel.textContent = 'Priority: ';\n\n        const todoPriorityInput = document.createElement('select');\n        todoPriorityInput.setAttribute('name', 'todoPriorityInput');\n        todoPriorityInput.setAttribute('class', 'todoPriorityInput');\n\n        const todoPriorityLow = document.createElement('option');\n        todoPriorityLow.setAttribute('value', 'Low');\n        todoPriorityLow.textContent = 'Low';\n\n        const todoPriorityMed = document.createElement('option');\n        todoPriorityMed.setAttribute('value', 'Medium');\n        todoPriorityMed.textContent = 'Medium';\n\n        const todoPriorityHigh = document.createElement('option');\n        todoPriorityHigh.setAttribute('value', 'High');\n        todoPriorityHigh.textContent = 'High';\n\n        todoPriorityInput.append(\n          todoPriorityHigh,\n          todoPriorityMed,\n          todoPriorityLow,\n        );\n\n        editTodoPopup.append(todoPriorityLabel, todoPriorityInput);\n\n        const todoNoteInputLabel = document.createElement('label');\n        todoNoteInputLabel.setAttribute('class', 'todoNoteInputLabel');\n        todoNoteInputLabel.setAttribute('for', 'todoNoteInput');\n        todoNoteInputLabel.textContent = 'Note:';\n\n        const todoNoteInput = document.createElement('input');\n        todoNoteInput.setAttribute('class', 'todoNoteInput');\n\n        editTodoPopup.append(todoNoteInputLabel, todoNoteInput);\n\n        const noNameError = document.createElement('p');\n        noNameError.setAttribute('class', 'noNameError');\n        noNameError.textContent = 'Enter a name!';\n\n        const todoSubmitBtn = document.createElement('button');\n        todoSubmitBtn.setAttribute('class', 'btn');\n        todoSubmitBtn.textContent = 'Save';\n        todoSubmitBtn.addEventListener('click', (e) => {\n          e.preventDefault();\n          if (todoTitleInput.value === '') {\n            if (!editTodoPopup.contains(noNameError)) {\n              editTodoPopup.append(noNameError);\n            }\n          } else {\n            const todoTitleInput = document.querySelector(\n              '.todoTitleInput',\n            );\n\n            const editedTodo = (0,_todo_object__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(\n              todoTitleInput.value,\n              todoDueDateInput.value,\n              todoPriorityInput.value,\n              todoNoteInput.value,\n            );\n            project.projectTodoList.splice(\n              project.projectTodoList.indexOf(i),\n              1,\n              editedTodo,\n            );\n            project.projectTodoListTitles.splice(\n              project.projectTodoListTitles.indexOf(i),\n              1,\n              editedTodo.title,\n            );\n            localStorage.removeItem(\n              `${project.title} ${i.title} todo info`,\n            );\n\n            if (content.contains(todoContainer)) {\n              todoContainer.remove();\n            }\n\n            _storage__WEBPACK_IMPORTED_MODULE_1__.storeTodos.setTodoList(project);\n            (0,_todo_object__WEBPACK_IMPORTED_MODULE_0__.createTodos)();\n            renderToDoObjects(project);\n            todoCompleteBtn.insertAdjacentElement(\n              'beforebegin',\n              todoEditButton,\n            );\n          }\n        });\n        editTodoPopup.append(todoSubmitBtn);\n      });\n\n      todo.append(todoEditButton);\n\n      todoCompleteBtn.setAttribute('class', 'btn');\n      todoCompleteBtn.textContent = 'Complete';\n\n      todoCompleteBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        switch (i.doneStatus) {\n          case 'Incomplete': {\n            const completeTodo = (0,_todo_object__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(\n              i.title,\n              i.dueDate,\n              i.priority,\n              i.note,\n              'Complete',\n            );\n            todo.setAttribute('class', 'todoCompleted');\n            project.projectTodoList.splice(\n              project.projectTodoList.indexOf(i),\n              1,\n              completeTodo,\n            );\n            project.projectTodoListTitles.splice(\n              project.projectTodoListTitles.indexOf(i),\n              1,\n              completeTodo.title,\n            );\n            break;\n          }\n          case 'Complete': {\n            const incompleteTodo = (0,_todo_object__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(\n              i.title,\n              i.dueDate,\n              i.priority,\n              i.note,\n              'Incomplete',\n            );\n            todo.setAttribute('class', 'todo');\n            project.projectTodoList.splice(\n              project.projectTodoList.indexOf(i),\n              1,\n              incompleteTodo,\n            );\n            project.projectTodoListTitles.splice(\n              project.projectTodoListTitles.indexOf(i),\n              1,\n              incompleteTodo.title,\n            );\n            break;\n          }\n\n          default:\n        }\n        if (content.contains(todoContainer)) {\n          todoContainer.remove();\n        }\n\n        localStorage.removeItem(\n          `${project.title} ${i.title} todo info`,\n        );\n        _storage__WEBPACK_IMPORTED_MODULE_1__.storeTodos.setTodoList(project);\n        (0,_todo_object__WEBPACK_IMPORTED_MODULE_0__.createTodos)();\n        renderToDoObjects(project);\n      });\n\n      todo.append(todoCompleteBtn);\n\n      todoContainer.insertAdjacentElement('afterbegin', todo);\n    });\n  }\n\n  const todoCreateBtnContainer = document.createElement('div');\n  todoCreateBtnContainer.setAttribute('class', 'todoCreateBtnContainer');\n\n  const todoCreateBtn = document.createElement('button');\n  todoCreateBtn.setAttribute('class', 'todoCreateBtn');\n  todoCreateBtn.textContent = 'New Todo';\n\n  todoCreateBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    todoCreateBtn.remove();\n\n    const createTodoPopup = document.createElement('div');\n    createTodoPopup.setAttribute('id', 'createTodoPopup');\n    todoContainer.insertAdjacentElement('afterbegin', createTodoPopup);\n\n    const todoTitleText = document.createElement('p');\n    todoTitleText.setAttribute('id', 'todoTitleText');\n    todoTitleText.textContent = 'Title:';\n    createTodoPopup.append(todoTitleText);\n\n    const todoTitleInput = document.createElement('input');\n    todoTitleInput.setAttribute('class', 'todoTitleInput');\n    createTodoPopup.append(todoTitleInput);\n\n    const todoDueText = document.createElement('p');\n    todoDueText.setAttribute('id', 'todoDueText');\n    todoDueText.textContent = 'Due Date:';\n    createTodoPopup.append(todoDueText);\n\n    const todoDueDateInput = document.createElement('input');\n    todoDueDateInput.setAttribute('class', 'todoDueDateInput');\n    todoDueDateInput.setAttribute('type', 'date');\n    createTodoPopup.append(todoDueDateInput);\n\n    const todoPriorityLabel = document.createElement('label');\n    todoPriorityLabel.setAttribute('for', 'todoPriorityInput');\n    todoPriorityLabel.textContent = 'Priority:';\n\n    const todoPriorityInput = document.createElement('select');\n    todoPriorityInput.setAttribute('name', 'todoPriorityInput');\n    todoPriorityInput.setAttribute('class', 'todoPriorityInput');\n\n    const todoPriorityLow = document.createElement('option');\n    todoPriorityLow.setAttribute('value', 'Low');\n    todoPriorityLow.textContent = 'Low';\n\n    const todoPriorityMed = document.createElement('option');\n    todoPriorityMed.setAttribute('value', 'Medium');\n    todoPriorityMed.textContent = 'Medium';\n\n    const todoPriorityHigh = document.createElement('option');\n    todoPriorityHigh.setAttribute('value', 'High');\n    todoPriorityHigh.textContent = 'High';\n\n    todoPriorityInput.append(\n      todoPriorityHigh,\n      todoPriorityMed,\n      todoPriorityLow,\n    );\n\n    createTodoPopup.append(todoPriorityLabel, todoPriorityInput);\n\n    const todoNoteInputLabel = document.createElement('label');\n    todoNoteInputLabel.setAttribute('class', 'todoNoteInputLabel');\n    todoNoteInputLabel.setAttribute('for', 'todoNoteInput');\n    todoNoteInputLabel.textContent = 'Note:';\n\n    const todoNoteInput = document.createElement('input');\n    todoNoteInput.setAttribute('class', 'todoNoteInput');\n\n    createTodoPopup.append(todoNoteInputLabel, todoNoteInput);\n\n    const noNameError = document.createElement('p');\n    noNameError.setAttribute('class', 'noNameError');\n    noNameError.textContent = 'Enter a name!';\n\n    const todoSubmitBtn = document.createElement('button');\n    todoSubmitBtn.setAttribute('class', 'btn');\n    todoSubmitBtn.textContent = 'Save';\n    todoSubmitBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      if (todoTitleInput.value === '') {\n        if (!createTodoPopup.contains(noNameError)) {\n          createTodoPopup.append(noNameError);\n        }\n      } else {\n        const todoTitleInput = document.querySelector(\n          '.todoTitleInput',\n        );\n        const newTodo = (0,_todo_object__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(\n          todoTitleInput.value,\n          todoDueDateInput.value,\n          todoPriorityInput.value,\n          todoNoteInput.value,\n        );\n        project.projectTodoList.push(newTodo);\n        if (content.contains(todoContainer)) {\n          todoContainer.remove();\n        }\n\n        _storage__WEBPACK_IMPORTED_MODULE_1__.storeTodos.setTodoList(project);\n        (0,_todo_object__WEBPACK_IMPORTED_MODULE_0__.createTodos)();\n        project.projectTodoListTitles.push(todoTitleInput.value);\n        renderToDoObjects(project);\n        todoCreateBtnContainer.append(todoCreateBtn);\n      }\n    });\n    createTodoPopup.append(todoSubmitBtn);\n  });\n  todoCreateBtnContainer.append(todoCreateBtn);\n  todoContainer.insertAdjacentElement('afterbegin', todoCreateBtnContainer);\n};\n\n\n//# sourceURL=webpack://todo-list/./src/render-todo-objects.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"storeProjects\": () => (/* binding */ storeProjects),\n/* harmony export */   \"storeTodos\": () => (/* binding */ storeTodos),\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"projectObjectList\": () => (/* binding */ projectObjectList),\n/* harmony export */   \"createProjects\": () => (/* binding */ createProjects),\n/* harmony export */   \"removeProject\": () => (/* binding */ removeProject)\n/* harmony export */ });\nconst projectList = [];\nconst projectObjectList = [];\n\nif (localStorage.length === 0) {\n  projectList.push('Default Project');\n}\n\nconst storeProjects = (() => {\n  const setProjectList = () => {\n    projectList.forEach((project) => {\n      if (project !== '') {\n        localStorage.setItem('projectList', projectList);\n      }\n    });\n  };\n\n  const getProjectList = () => {\n    if (localStorage.length === 0) {\n      setProjectList();\n    } else {\n      const storedProjectList = localStorage.getItem('projectList').split(',');\n      storedProjectList.forEach((project) => {\n        if (!projectList.includes(project) || projectList.length === 0) {\n          projectList.push(project);\n        }\n      });\n    }\n  };\n\n  const addProjectToList = (project) => {\n    getProjectList();\n    projectList.push(project);\n    setProjectList();\n  };\n\n  const removeProjectFromList = (project) => {\n    getProjectList();\n    if (projectList.length > 1) {\n      projectList.splice(projectList.indexOf(project.title), 1);\n      setProjectList();\n    } else if (projectList.length === 1) {\n      projectList.pop();\n      localStorage.removeItem('projectList');\n    }\n  };\n\n  return {\n    projectList,\n    setProjectList,\n    getProjectList,\n    addProjectToList,\n    removeProjectFromList,\n  };\n})();\n\nconst storeTodos = () => {\n  const setTodoList = (project) => {\n    const storedProjectTodoList = [];\n\n    project.projectTodoList.forEach((todo) => {\n      localStorage.setItem(\n        `${project.title} ${todo.title} todo info`,\n        todo.todoInfo,\n      );\n      storedProjectTodoList.push(todo.title);\n    });\n    localStorage.setItem(\n      `${project.title} project todo list`,\n      storedProjectTodoList,\n    );\n  };\n\n  const getTodoList = () => {\n    projectObjectList.forEach((project) => {\n      if (\n        localStorage.getItem(`${project.title} project todo list`) !== null\n      ) {\n        const storedProjectTodoListTitles = localStorage\n          .getItem(`${project.title} project todo list`)\n          .split(',');\n\n        storedProjectTodoListTitles.forEach((todoTitle) => {\n          if (!project.projectTodoListTitles.includes(todoTitle)) {\n            project.projectTodoListTitles.push(todoTitle);\n          }\n        });\n      }\n    });\n  };\n\n  return { setTodoList, getTodoList };\n};\n\nconst projectFactory = (title) => {\n  const projectTodoList = [];\n\n  const projectTodoListTitles = [];\n\n  const addToProjectTodoList = (todoObject) => {\n    projectTodoList.push(todoObject);\n  };\n\n  const removeFromProjectList = (todoObject) => {\n    projectTodoList.splice(projectTodoList.indexOf(todoObject), 1);\n  };\n\n  return {\n    title,\n    projectTodoList,\n    projectTodoListTitles,\n    addToProjectTodoList,\n    removeFromProjectList,\n  };\n};\n\nconst createProjects = () => {\n  storeProjects.getProjectList();\n  const projectObjectListTitles = [];\n  projectObjectList.forEach((projectObject) => {\n    projectObjectListTitles.push(projectObject.title);\n  });\n  storeProjects.projectList.forEach((project) => {\n    if (!projectObjectListTitles.includes(project)) {\n      const newProject = projectFactory(project);\n      return projectObjectList.push(newProject);\n    }\n    return projectObjectListTitles;\n  });\n};\n\nconst removeProject = (project) => {\n  if (projectObjectList.length > 1) {\n    projectObjectList.splice(projectObjectList.indexOf(project), 1);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/todo-object.js":
/*!****************************!*\
  !*** ./src/todo-object.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoFactory\": () => (/* binding */ todoFactory),\n/* harmony export */   \"createTodos\": () => (/* binding */ createTodos)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\nconst todoFactory = (\n  title,\n  dueDate,\n  priority,\n  note = 'None',\n  doneStatus = 'Incomplete',\n) => {\n  const todoInfo = [title, dueDate, priority, note, doneStatus];\n\n  return {\n    title,\n    dueDate,\n    priority,\n    note,\n    doneStatus,\n    todoInfo,\n  };\n};\n\nconst createTodos = () => {\n  _storage__WEBPACK_IMPORTED_MODULE_0__.projectObjectList.forEach((project) => {\n    if (project.projectTodoListTitles.length > 0) {\n      project.projectTodoListTitles.forEach((title) => {\n        const localTodos = localStorage.getItem(\n          `project.title  ${title} todo info`,\n        );\n\n        if (localTodos !== '' && localTodos !== undefined) {\n          const todoInfo = localStorage[\n            `${project.title} ${title} todo info`\n          ].split(',');\n          const newTodo = todoFactory(\n            todoInfo[0],\n            todoInfo[1],\n            todoInfo[2],\n            todoInfo[3],\n            todoInfo[4],\n          );\n\n          const projectTodoTitles = [];\n          project.projectTodoList.forEach((todo) => {\n            projectTodoTitles.push(todo.title);\n          });\n\n          if (!projectTodoTitles.includes(title)) {\n            project.addToProjectTodoList(newTodo);\n          }\n        }\n      });\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;