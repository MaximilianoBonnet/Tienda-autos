// carControllers.js

import carModel from './carModel.js';

class CarControllers {
  constructor() {
    this.cartItems = [];
  }

  addToCart(carId) {
    const car = carModel.getCarById(carId);
    if (car) {
      this.cartItems.push(car);
      this.updateCart();
    }
  }

  removeFromCart(carId) {
    this.cartItems = this.cartItems.filter(car => car.id !== carId);
    this.updateCart();
  }

  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }

  updateCart() {
    // Aquí puedes realizar las acciones necesarias para actualizar el carrito en la interfaz de usuario
    // Por ejemplo, actualizar la lista de items en el carrito y el total
  }
}

const carControllers = new CarControllers();

export default carControllers;
