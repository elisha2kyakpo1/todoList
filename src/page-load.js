const renderPage = (() => {

    const content = document.querySelector("#content");

    const headingContainer = document.createElement("div");
    headingContainer.setAttribute("id", "headingContainer");

    const heading = document.createElement("h1");
    heading.textContent = "Todo List";

    headingContainer.append(heading);
    content.append(headingContainer);

    const projectAndTodoContainer = document.createElement("div");
    projectAndTodoContainer.setAttribute("id", "projectAndTodoContainer");
    content.append(projectAndTodoContainer);
})();

export { renderPage }