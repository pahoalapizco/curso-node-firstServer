const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080

hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {  
  res.render('home', {
      nombre: 'paho alapizco'
  });
});
 
app.get('/abaut', function (req, res) {  
    res.render('abaut');
});

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));
