class NumeroContador extends HTMLElement {
  #value;
  #name;
  #spanValue;
  #spanName;
  constructor(value, name) {
    super();
    this.#spanValue = document.createElement("span");
    this.#spanName = document.createElement("span");
    this.#spanValue.addEventListener("click", () => this.value++);
    this.append(this.#spanValue, this.#spanName);
    this.value = value;
    this.name = name;
  }
  get value() {
    return this.#value;
  }
  set value(v) {
    this.#value = v;
    this.#spanValue.textContent = v;
  }
  get name() {
    return this.#name;
  }
  set name(n) {
    this.#name = n;
    this.#spanName.textContent = n;
  }
}
customElements.define("numero-contador", NumeroContador);

const div = document.querySelector("div");
let numero = new NumeroContador(9, "text1");
div.append(numero);
