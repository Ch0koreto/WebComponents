class SuperSelectDuplex extends HTMLElement {
  constructor(
    elementsMaster,
    elementsDetails,
    name,
    keyMaster,
    valueMaster,
    keyDetails,
    valueDetails
  ) {
    super();
    let selectMaster = document.createElement("select");
    let selectDetails = document.createElement("select");
    elementsMaster.forEach((element) => {
      let option = document.createElement("option");
      option.value = element[keyMaster];
      option.textContent = element[valueMaster];
      selectMaster.append(option);
    });
    selectMaster.addEventListener("change", ()=> this.putOptionDetails());
    this.append(selectMaster);
    this.master = selectMaster;
    selectDetails.name = name;
    elementsDetailsFiltered = elementsDetails.filter(
      (e) => e[keyMaster] == selectMaster.value
    );
    elementsDetailsFiltered.forEach((element) => {
      let option = document.createElement("option");
      option.value = element[keyDetails];
      option.textContent = element[valueDetails];
      selectDetails.append(option);
    });
    this.append(selectDetails);
  }
  putOptionDetails() {
    console.log(this.master); 
  }
}
customElements.define("super-select-duplex", SuperSelectDuplex);
let select1 = new SuperSelectDuplex(
  PROVINCIAS,
  MUNICIPIOS,
  "municipio",
  "idProvincia",
  "nombre",
  "idMunicipio",
  "nombre"
);
document.forms.formulario.insertAdjacentElement("afterbegin", select1);
