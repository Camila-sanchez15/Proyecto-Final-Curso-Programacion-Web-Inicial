const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/',function (req, res) {
    res.render('pages/home')
});



app.get('/list',function (req, res) {
    res.render('pages/list')

});

app.get('/table',function (req, res) {
    //array with items to send
    var items = [
        {name:'Río Huemul',description:'Las capturas más corrientes son : arco iris de entre 500 y 2 kg y esporádicamente, alguna que otra fontinalis o marrón.'},
        {name:'Río Machete ',description:'Nos brinda serias posibilidades de capturar grandes ejemplares, especialmente de trucha marrón, entre 2 y 4 kg. '},
        {name:' Río Bonito',description:' Es común la captura de truchas fontinalis de buen tamaño, sobre todo a partir de finales de marzo.'},
        {name:' Río Correntoso',description:'Existen posiblidades de cobrar grandes ejemplares de trucha Arco Iris, en promedios de 1,5 Kgs. a 3 Kgs., llegando a capturarse con cierta regularidad ejemplares de 4 Kgs. ó 5 Kgs.. Las truchas Marrones de gran tamaño'},
        {name:' Río Traful ',description:'En lo que respecta a su tamaño y abundancia, el Traful, sobre todo en su sector inferior es un río pletórico de peces pequeños, siendo destacable la ausencia de peces de tamaño intermedio (500 gs. y 1 kg.) y con interesantes posibilidades de dar con grandes truchas, especialmente marrones, de más de 3 kg'}];

    res.render('pages/table',{
        table:items
    })
});

function messages(req,res,next){
    var message;
    res.locals.message = message;
    next();
}

app.get('/form',messages,function (req, res) {
    res.render('pages/form');
});

app.post('/form',function (req, res) {
    var message=req.body;
    res.locals.message = message;
    res.render('pages/form');
});

app.listen(port, () => console.log(`Funcionando correctamente${port}!`));