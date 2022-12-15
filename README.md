![Screenshot 2022-12-15 140431](https://user-images.githubusercontent.com/72227584/207855474-a5688a8e-8407-4be0-8422-0b5c0f92c2ed.png)

Ανάπτυξη ένος βασικού Framework με Node-Express και Handlebars σαν template engine για την ανάπτυξη δυναμικών Website και εφαρμογών 

1. Εγκατάσταση Express 

npm install --save express

2. Δημουργία server.js

3. Δημιουργία Routs για Home/About σελίδες

app.get('/', function(req, res){
res.type('text/plain');
res.send('Meadowlark Travel');
});
app.get('/about', function(req, res){
res.type('text/plain');
res.send('About Meadowlark Travel');
});
// custom 404 page
app.use(function(req, res, next){
res.type('text/plain');
res.status(404);
res.send('404 - Not Found');
});

4.Εγκατάσταση Handlebars και ορισμός τους στο αρχείο server.js 

var app = express();
// set up handlebars view engine
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

5. Δημιουργία Template main.handlebars
6. Δημιουργία Template home.handlebars
7. Δημιουργία Template about.handlebars
8. Δημιουργία Template 404.handlebars
9. Δημιουργία Template 500.handlebars

10. Δημιουργία στατικού και δυναμικού περιεχομένου


# Basic-Express-FrameWork

