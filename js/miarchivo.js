const jsonLocal = "./Json/jsonLocal.json";
// ALIMENTO PERROS //
$.get(jsonLocal).then((productos, estado) => {
	console.log(productos["alimentoP"]);
	for (const element of productos["alimentoP"]) {
		$("#alimentoP").append(`<div class="card cardsH" style="width: 18rem;">
		<img class="card-img-top" height="286px" src="${element.img}" alt="Card image cap">
		<div class="card-body">
		<h5 class="card-title">${element.nombre}</h5>
		 <p> precio ${element.precio} </p>
		<button id="buttonAgregar" type="button" class="btn btn-secondary ">
		Agregar al carrito
				</button>
				</div>
				</div>`);
	}
});
// ALIMENTO GATOS //
$.get(jsonLocal).then((productos, estado) => {
	console.log(productos["alimentoG"]);
	for (const element of productos["alimentoG"]) {
		$("#alimentoG").append(`<div class="card cardsH" style="width: 18rem;">
		<img class="card-img-top" height="286px" src="${element.img}" alt="Card image cap">
		<div class="card-body">
		<h5 class="card-title">${element.nombre}</h5>
		 <p> precio ${element.precio} </p>
		<button id="buttonAgregar" type="button" class="btn btn-secondary ">
		Agregar al carrito
				</button>
				</div>
				</div>`);
	}
});

// CAMAS  PERROS //
$.get(jsonLocal).then((productos, estado) => {
	console.log(productos["camasP"]);
	for (const element of productos["camasP"]) {
		$("#camasPerros").append(`<div class="card cardsH" style="width: 18rem;">
		<img class="card-img-top" height="286px" src="${element.img}" alt="Card image cap">
		<div class="card-body">
		<h5 class="card-title">${element.nombre}</h5>
		<p> ${element.descripcion}</p>
	
		<button id="buttonAgregar" type="button" class="btn btn-secondary ">
		Agregar al carrito
				</button>
				</div>
				</div>`);
	}
});
// CAMAS GATOS //
$.get(jsonLocal).then((productos, estado) => {
	console.log(productos["camasG"]);
	for (const element of productos["camasG"]) {
		$("#camasGatos").append(`<div class="card cardsH" style="width: 18rem;">
		<img class="card-img-top" height="286px" src="${element.img}" alt="Card image cap">
		<div class="card-body">
		<h5 class="card-title">${element.nombre}</h5>
		<p> ${element.descripcion}</p>
	
		<button id="buttonAgregar" type="button" class="btn btn-secondary ">
		Agregar al carrito
				</button>
				</div>
				</div>`);
	}
});
// CORREAS //
$.get(jsonLocal).then((productos, estado) => {
	console.log(productos["correa"]);
	for (const element of productos["correa"]) {
		$("#correasPerros").append(`<div class="card cardsH" style="width: 18rem;">
		<img class="card-img-top" height="286px" src="${element.img}" alt="Card image cap">
		<div class="card-body">
		<h5 class="card-title">${element.talla}</h5>
		 <p> precio ${element.precio} </p>
		<button id="buttonAgregar" type="button" class="btn btn-secondary ">
		Agregar al carrito
				</button>
				</div>
				</div>`);
	}
});

// // BUTTON CARRITO //
$("#buttonAgregar").click(function agregarCarrito() {
	console.log("producto agregado");
});
// BUTTON TARIFAS //
$("#tarifas").click(function wsp() {
	window.open(
		"https://api.whatsapp.com/send?phone=3192231789&text=Hola, estoy interesado en saber las tarifas del hotel"
	);
});
// ANIMACION TITULO //
$(document).ready(() => {
	$("#nombreHotel").fadeIn("slow");
});
