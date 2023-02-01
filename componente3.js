class CheckBox extends HTMLElement {
  constructor() {
    super();
    let inputName = this.getAttribute("name");
    let elements = this.getAttribute("elements").split(" ");
    elements.forEach((element) => {
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = inputName + "[]";
      checkbox.value = element;
      checkbox.id = "" + element;
      let label = document.createElement("label");
      label.textContent = element;
      label.setAttribute('for', 'algo_'+element);
      this.appendChild(checkbox, label);
    });
  }
}
customElements.define("checkboxes-list", CheckBox);
