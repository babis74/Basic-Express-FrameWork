var express = require('express');
var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3003);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home');
    });

    app.get('/about', function(req, res){
        var randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
        res.render('about', { fortune: randomFortune });
        });

    // 404 catch-all handler (middleware)
    app.use(function(req, res, next){
    res.status(404);
    res.render('404');
    });
    // 500 error handler (middleware)
    app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
    });


app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
app.get('port') + '; press Ctrl-C to terminate.' );
});

var fortunes = [
    "Ό,τι δεν με σκοτώνει με κάνει πιο δυνατό.",
    "Καλύτερα ένα άθλιο τέλος παρά μια αθλιότητα χωρίς τέλος.",
    "Ουδείς αχαριστότερος του ευεργετηθέντος.",
    "Να συγχωρείς τους εχθρούς σου. Αυτό τους κάνει να σε μισούν περισσότερο.",
    "Η φαντασία είναι πιο σημαντική από τη γνώση.",
    ];