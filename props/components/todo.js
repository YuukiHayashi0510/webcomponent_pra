export default class Todo extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
    <div class="flex gap-x-2 px-2 py-0.5 bg-purple-400">
      <span class="font-bold">${this.label}</span>
      <span>${this.text}</span>
      <span>${this.isDone}</span>
  </div>
    `;

    this.setAttribute("label", "");
    this.setAttribute("text", "");
    this.setAttribute("isDone", "false");
  }

  get label() {
    return this.getAttribute("label");
  }
  get text() {
    return this.getAttribute("text");
  }
  get isDone() {
    return this.getAttribute("isDone");
  }

  set label(val) {
    this.setAttribute("label", val);
  }

  set text(val) {
    this.setAttribute("text", val);
  }

  set isDone(val) {
    this.setAttribute("isDone", val);
  }

  //監視する属性を指定
  static get observedAttributes() {
    return ["label", "text", "isDone"];
  }

  // mounted
  connectedCallback() {}

  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[attr] = newValue;

    switch (attr) {
      case "label":
        break;
      case "text":
        break;
      case "isDone":
        break;
    }
  }
}
