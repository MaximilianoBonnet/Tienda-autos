// Variables
const carList = document.getElementById('car-list');
const cartIcon = document.querySelector('.cart-icon');
const closeCartButton = document.querySelector('.close-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItemsList = document.querySelector('.cart-items-list');
const cartTotalAmount = document.querySelector('.cart-total-amount');

// Obtén una referencia al elemento del carrusel
var carousel = document.getElementById('carCarousel');

// Obtén una referencia al elemento donde se generarán los indicadores y los slides
var indicatorsContainer = carousel.querySelector('.carousel-indicators');
var slidesContainer = carousel.querySelector('.carousel-inner');

// Obtén los datos de los autos desde tu archivo cars.json (o cualquier otra fuente de datos)
fetch('../backend/data/cars.json')
  .then(response => response.json())
  .then(data => {
    // Genera los elementos HTML para cada auto en el catálogo
    data.forEach(car => {
      const carCard = document.createElement('div');
      carCard.classList.add('car-card');

      const image = document.createElement('img');
      image.src = 'frontend/images/' + car.image;
      image.alt = car.model;
      carCard.appendChild(image);

      const title = document.createElement('h2');
      title.textContent = car.brand + ' ' + car.model;
      carCard.appendChild(title);

      const details = document.createElement('p');
      details.textContent = car.type + ', ' + car.color;
      carCard.appendChild(details);

      const price = document.createElement('p');
      price.classList.add('car-card-price');
      price.textContent = '$' + car.price.toLocaleString();
      carCard.appendChild(price);

      carList.appendChild(carCard);

      // Genera los indicadores y los slides para el carrusel
      var indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#carCarousel');
      indicator.setAttribute('data-slide-to', data.indexOf(car));
      if (data.indexOf(car) === 0) {
        indicator.classList.add('active');
      }
      indicatorsContainer.appendChild(indicator);

      var slide = document.createElement('div');
      slide.classList.add('carousel-item');
      if (data.indexOf(car) === 0) {
        slide.classList.add('active');
      }
      var carImage = document.createElement('img');
      carImage.src = 'frontend/images/' + car.image;
      carImage.alt = car.model;
      slide.appendChild(carImage);
      slidesContainer.appendChild(slide);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });

// Inicializa el carrusel
$('.carousel').carousel();

// Event Listeners
cartIcon.addEventListener('click', openCartOverlay);
closeCartButton.addEventListener('click', closeCartOverlay);

// Functions
function openCartOverlay() {
  cartOverlay.style.display = 'flex';
}

function closeCartOverlay() {
  cartOverlay.style.display = 'none';
}

function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

function updateCart() {
  cartItemsList.innerHTML = '';
  cartItems.forEach((item) => {
    const cartItem = document.createElement('li');
    cartItem.textContent = item.name;
    cartItemsList.appendChild(cartItem);
  });

  cartTotalAmount.textContent = calculateTotalAmount();
}

function calculateTotalAmount() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });
  return total.toFixed(2);
}

// Prueba de funcionalidad
const item1 = { name: 'Sedan', price: 15000 };
const item2 = { name: 'Coupé', price: 20000 };
const item3 = { name: 'Familiar', price: 18000 };

const cartItems = [item1, item2, item3];
updateCart();
