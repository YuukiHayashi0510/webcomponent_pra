export default class Todo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
    <div class="inline-flex gap-x-2 px-2 py-0.5 outline bg-sky-100">
    <slot name="label">label</slot>
    <slot name="text">text</slot>
    <slot name="isDone">isDone</slot>
  </div>
    `;
  }

  // mounted
  // connectedCallback() {}
}
