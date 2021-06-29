//TIENDA//
const alimentoPerros = [
	{
		nombre: "Pedigree puppy 2kg",
		precio: "COP 18.000",
		img: "imagenes/pedigree.jpg",
	},
	{
		nombre: "Taste of the wild 14lbs",
		precio: "COP 160.000",
		img: "imagenes/tasteofw.jpg",
	},
	{
		nombre: "Pro plan sensitive skin 3kg",
		precio: "COP 39.000",
		img: "imagenes/proplan.jpg",
	},
	{
		nombre: "Hills small paws 4.5lbs",
		precio: "COP 60.000",
		img: "imagenes/hills.png",
	},
	{
		nombre: "Royal canin 3kg",
		precio: "COP 79.000",
		img: "imagenes/royal.jpg",
	},
	{
		nombre: "Agility gold grandes adultos 3kg",
		precio: "COP 45.000",
		img: "imagenes/ag.jpg",
	},
];

const alimentoGatos = [
	{
		nombre: "taste of the wild cats 5lbs",
		precio: "COP 66.000",
		img: "imagenes/tasteFelino.jpg",
	},
	{
		nombre: "royal canin kitten chaton 4kg",
		precio: "COP 140.000",
		img: "imagenes/royalFelino.jpg",
	},
	{
		nombre: "hills sensitive stomach 3lbs",
		precio: "COP 72.000",
		img: "imagenes/hillsFelino.jpg",
	},
	{
		nombre: "ProPlan adult cat 3kg",
		precio: "COP 97.000",
		img: "imagenes/proplanFelino.jpg",
	},
	{
		nombre: "agility gold 1.5 kg",
		precio: "COP 32.000",
		img: "imagenes/agilityFelino.png",
	},
	{
		nombre: "purina cat chow complete 8kg",
		precio: "COP 78.000",
		img: "imagenes/purinaCat.jpg",
	},
];

const correas = [
	{ talla: "M", color: "", img: "imagenes/correaPequeña.jpg" },
	{ talla: "S", color: "", img: "imagenes/correaMediana.jpg" },
	{ talla: "L", color: "", img: "imagenes/correaGrande.jpg" },
];

const camas = [
	{ nombre: "teepe", color: "", img: "imagenes/cama2.jpg" },
	{ nombre: "colchon", color: "", img: "" },
	{ nombre: "casita", color: "", img: "" },
];
//PERROS//
for (let element of alimentoPerros) {$("#alimentoP").append(`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`)


//GATOS//



//FORMULARIO//
const formularioHotel = document.getElementById("formulario");
formularioHotel.addEventListener("sumbmit", validarformulario);
formularioHotel.addEventListener("reset", eliminarformulario);
formularioHotel.addEventListener("habitacion", agregarhabitacion);

function validarformulario() {
	console.log("enviado");
}

function eliminarformulario() {
	localStorage.clear();
}
function agregarhabitacion() {
	localStorage.setitem("habitacion");
}
