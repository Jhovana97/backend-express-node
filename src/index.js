const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('ruta principal');
});

app.get('/tareas', (req, res) => {
  res.send('ruta de tareas');
});

app.get('/cursos', (req, res) => {
  res.send('ruta de cursos');
});

app.listen(port, ()=> {
    console.log('servidor levantado en el puerto 3000');
})