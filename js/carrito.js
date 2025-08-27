let productsCar = JSON.parse(localStorage.getItem("carrito")) || [];

let renderProducts = () => {
  let contenedor = document.querySelector(".carrito-contenedor");
  let html = "";

  productsCar.forEach((producto) => {
    html += `<div class="product-card">
        <h3>${producto.nombre}</h3>
        <h5>${producto.precio}</h5>
      </div>`;
  });
  contenedor.innerHTML = html;
};

renderProducts();

let clean = document.getElementById("limpiar");
clean.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  productsCar = [];
  renderProducts();
});
