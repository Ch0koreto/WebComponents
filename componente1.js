class MiTarjeta extends HTMLElement {
  constructor() {
    super();
    let title = this.getAttribute('my-title');
    let button = this.getAttribute('my-text-button');
    this.innerHTML = `
    <img
      src="https://via.placeholder.com/150x100"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">${button}</a>
    </div>
    `;
    this.classList.add('card');
    this.style.width = "18rem";
  }
}
customElements.define("mi-tarjeta", MiTarjeta);
