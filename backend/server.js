const express = require('express');
const app = express();
const port = 3000; // Puedes usar cualquier número de puerto que desees

// Ruta para obtener el archivo JSON
app.get('/archivo.json', (req, res) => {
  res.sendFile(__dirname + '/../data/cars.json');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
