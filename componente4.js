class SuperSelect extends HTMLElement {
  constructor() {
    super();
    let elements = this.getAttribute("elements");
    elements = JSON.parse(elements);
    let select = document.createElement("select");
    select.name = this.getAttribute('name');
    this.append(select);
    for (const key in elements) {
      let option = document.createElement('option');
      option.value = key;
      option.textContent = elements[key];
      select.append(option);
    }
  }
}
customElements.define("super-select", SuperSelect);
