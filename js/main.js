let productos = [
  { id: 1, nombre: "Camisa", precio: 1500 },
  { id: 2, nombre: "Pantalon", precio: 2500 },
  { id: 3, nombre: "Zapatillas", precio: 3500 },
  { id: 4, nombre: "Camisa", precio: 1500 },
  { id: 5, nombre: "Pantalon", precio: 2500 },
  { id: 6, nombre: "Zapatillas", precio: 3500 },
  { id: 7, nombre: "Camisa", precio: 1500 },
  { id: 8, nombre: "Pantalon", precio: 2500 },
  { id: 9, nombre: "Zapatillas", precio: 3500 },
  { id: 10, nombre: "Zapatillas", precio: 3500 },
];

let renderProducts = () => {
  let contenedor = document.querySelector(".contenedor");
  let html = "";

  productos.forEach((producto) => {
    html += `<div class="product-card">
      <h3>${producto.nombre}</h3>
      <h5>${producto.precio}</h5>
      <button onclick="addToCard(${producto.id})" class="btn-comprar">Agregar al Carrito</button>
    </div>`;
  });

  contenedor.innerHTML = html;
};

renderProducts();

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const addToCard = (id) => {
  let product = productos.find((producto) => producto.id === id);
  carrito.push(product);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
