class SpanCount extends HTMLElement {
  value;
  constructor(value = 0) {
    super();
    this.value = this.getAttribute("value") || value;
    
    this.innerHTML = this.value;
    this.addEventListener("click", () => {
      this.value++;
      this.innerHTML = this.value;
      
    });
  }
  get value() {
    return this.value;
  }
  set value(v) {
    this.value = v;
  }
  static get observedAttributes()  {
    return ["value"];
  }
  attributeChangedCallback(name, old, now) {
    console.log(name, old, now);
  }
}
customElements.define("span-count", SpanCount);
let spanCount1 = document.querySelector("span-count");
let spanCount2 = new SpanCount((8));
document.body.append(spanCount2);