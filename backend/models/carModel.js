// carModel.js

class CarModel {
    constructor() {
      this.cars = [];
    }
  
    async fetchCars() {
      try {
        const response = await fetch('cars.json');
        const data = await response.json();
        this.cars = data;
      } catch (error) {
        console.log('Error al cargar los datos de los autos:', error);
      }
    }
  
    getCars() {
      return this.cars;
    }
  
    getCarById(id) {
      return this.cars.find(car => car.id === id);
    }
  }
  
  const carModel = new CarModel();
  carModel.fetchCars();
  
  export default carModel;
  