export default class Todo extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("todo-template");
    const templateContent = template.content;
    this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );
  }

  // mounted
  // connectedCallback() {}
}
