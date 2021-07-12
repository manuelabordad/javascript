//TIENDA//
// const alimentoPerros = [
// 	{
// 		nombre: "Pedigree puppy 2kg",
// 		precio: "COP 18.000",
// 		img: "imagenes/pedigree.jpg",
// 	},
// 	{
// 		nombre: "Taste of the wild 14lbs",
// 		precio: "COP 160.000",
// 		img: "imagenes/tasteofw.jpg",
// 	},
// 	{
// 		nombre: "Pro plan sensitive skin 3kg",
// 		precio: "COP 39.000",
// 		img: "imagenes/proplan.jpg",
// 	},
// 	{
// 		nombre: "Hills small paws 4.5lbs",
// 		precio: "COP 60.000",
// 		img: "imagenes/hills.png",
// 	},
// 	{
// 		nombre: "Royal canin 3kg",
// 		precio: "COP 79.000",
// 		img: "imagenes/royal.jpg",
// 	},
// 	{
// 		nombre: "Agility gold grandes adultos 3kg",
// 		precio: "COP 45.000",
// 		img: "imagenes/ag.jpg",
// 	},
// ];

// const alimentoGatos = [
// 	{
// 		nombre: "taste of the wild cats 5lbs",
// 		precio: "COP 66.000",
// 		img: "imagenes/tasteFelino.jpg",
// 	},
// 	{
// 		nombre: "royal canin kitten chaton 4kg",
// 		precio: "COP 140.000",
// 		img: "imagenes/royalFelino.jpg",
// 	},
// 	{
// 		nombre: "hills sensitive stomach 3lbs",
// 		precio: "COP 72.000",
// 		img: "imagenes/hillsFelino.jpg",
// 	},
// 	{
// 		nombre: "ProPlan adult cat 3kg",
// 		precio: "COP 97.000",
// 		img: "imagenes/proplanFelino.jpg",
// 	},
// 	{
// 		nombre: "agility gold 1.5 kg",
// 		precio: "COP 32.000",
// 		img: "imagenes/agilityFelino.png",
// 	},
// 	{
// 		nombre: "purina cat chow complete 8kg",
// 		precio: "COP 78.000",
// 		img: "imagenes/purinaCat.jpg",
// 	},
// ];

// const correas = [
// 	{ talla: "Small", color: "", img: "imagenes/correaPequeña.jpg" },
// 	{ talla: "Medium", color: "", img: "imagenes/correaMediana.jpg" },
// 	{ talla: "Large", color: "", img: "imagenes/correaGrande.jpg" },
// ];

// const camasP = [
// 	{
// 		nombre: "Colchon  COP 65.000",
// 		color: "gris claro",
// 		img: "imagenes/cama1.jpg",
// 		descripcion:
// 			"Cama estilo colchón, muy comoda y abrigada perfecta para climas frios, con cierre para que sea facil de lavar ",
// 	},
// 	{
// 		nombre: "Teepe  COP 90.000",
// 		color: "beige",
// 		img: "imagenes/cama2.jpg",
// 		descripcion:
// 			"Cama estilo teepe, con un diseño hermoso y decorativo.contiene un colchon interno muy comodo y fresco",
// 	},
// ];
// const camasG = [
// 	{
// 		nombre: "Cueva COP 50.000",
// 		color: "gris oscuro",
// 		img: "imagenes/cama3.jpg",
// 		descripcion:
// 			"Cama estilo cueva la preferida para tus gatos,con cierre para que sea facil de lavar",
// 	},
// 	{
// 		nombre: "Gimnasio con hamaca COP 120.000 ",
// 		color: "gris y beige ",
// 		img: "imagenes/cama4.jpg",
// 		descripcion: "Divertido gimnasio de gatos con hamaca y cueva incluida",
// 	},
// ];
const ALIMENTOP = "./Json/alimentoP.json";
const alimentoG = "./Json/alimentoG.json";
const correas = "./Json/correas.json";
const camasP = "./Json/camasP.json";
const camasG = "./Json/camasG.json";

//PERROS ALIMENTOS //
$get(ALIMENTOP).then((productos, estado) => {
	for (const element of productos) {
		$("#alimentoP").append(`<div class="card cardsH" style="width: 18rem;">
		<img class="card-img-top" height="286px" src="${element.img}" alt="Card image cap">
		<div class="card-body">
		  <h5 class="card-title">${element.nombre}</h5>
		  <button id="buttonAgregar" type="button" class="btn btn-secondary ">
		  Agregar al carrito
		</button>
		</div>
		</div>`);
	}
});

// //GATOS ALIMENTOS//
// for (let element of alimentoGatos)
// 	$("#alimentoG").append(`<div class="card cardsH" style="width: 18rem;">
// <img class="card-img-top"height="286px" src="${element.img}" alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">${element.nombre}</h5>
//   <button id="buttonAgregar" type="button" class="btn btn-secondary ">
//   Agregar al carrito
// </button>
// </div>
// </div>`);
// //CORREAS PERROS //
// for (let element of correas)
// 	$("#correasPerros").append(`<div class="card cardsH" style="width: 18rem;">
// <img class="card-img-top"height="286px" src="${element.img}" alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">${element.talla}</h5>
//   <button id="buttonAgregar" type="button" class="btn btn-secondary ">
//   Agregar al carrito
// </button>
// </div>
// </div>`);

// //CAMAS PERROS//
// for (let element of camasP)
// 	$("#camasPerros").append(`<div class="card cardsH" style="width: 18rem;">
// <img class="card-img-top"height="286px" src="${element.img}" alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">${element.nombre}</h5>
//   <p> ${element.descripcion}</p>
//   <button id="buttonAgregar" type="button" class="btn btn-secondary ">
//   Agregar al carrito
// </button>
// </div>
// </div>`);
// //CAMAS GATOS //
// for (let element of camasG)
// 	$("#camasGatos").append(`<div class="card cardsH" style="width: 18rem;">
// <img class="card-img-top"height="286px" src="${element.img}" alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">${element.nombre}</h5>
//   <p> ${element.descripcion}</p>
//   <button id="buttonAgregar" type="button" class="btn btn-secondary ">
//   Agregar al carrito
// </button>
// </div>
// </div>`);

// // BUTTON CARRITO //
// $("#buttonAgregar").click(function () {
// 	console.log("producto agregado");
// });

// //FORMULARIO//
// $("#btn_enviado").click(function () {
// 	console.log("tu precio es de ");
// });
// $("btn_borrar").click(function () {
// 	localStorage.clear();
// });

//DESAFIO #13//
$("document").ready(() => {
	$("#nombreHotel").fadeIn("1000").slideDown("3000");
});
