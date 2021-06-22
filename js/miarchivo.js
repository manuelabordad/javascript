function Producto(nombre, peso, precio) {
	this.nombre = nombre;
	this.edad = peso;
	this.calle = precio;
	this.agregar = function () {
		console.log("agregaste a tu carrito" + this.nombre);
	};
	this.eliminar = function () {
		console.log("elininaste de tu carrito" + this.nombre);
	};
}

const producto1 = new Producto("alimento hills ", "3kg", " COP 40.000");
const producto2 = new Producto(
	"alimento cachorros taste of the wild",
	"5lbs",
	"COP 65.000"
);
producto1.agregar();
producto2.eliminar();

//clase 6 objetos//
const alimentos = [18.0, 160.0, 39.0, 60.0, 79.0, 45.0];
const menorprecio = alimentos.filter((elemento) => elemento < 70.0);
console.log(menorprecio);

// clase 6 desafio complementario//
let correas = ["roja", "azul", "amarilla", "rosada", "morada"];
correas.sort();
console.log(correas);

// clase 9//
const agregar = document.getElementById("buttonAgregar");

agregar.onclick = () => {
	console.log("Click");
};
