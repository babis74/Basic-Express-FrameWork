![home](https://user-images.githubusercontent.com/72227584/208058867-db8ab9bf-0b9c-4623-90f2-876d8ce5b02e.png)

![About](https://user-images.githubusercontent.com/72227584/208058880-e9696721-3d42-4855-8813-8614826e8a02.png)


Ανάπτυξη ένος βασικού Framework με Node-Express και Handlebars σαν template engine για την ανάπτυξη δυναμικών Website και εφαρμογών. Η σελίδα περιλαμβάνει 2 routes (home/about) στην δε about μπηκε δυναμικο περιεχόμενο με καθε refresh

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

