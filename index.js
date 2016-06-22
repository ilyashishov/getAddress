var express = require('express');
var bodyParser = require('body-parser')
const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var position = [];
app.get('/', function(req, res) {
	res.render('index');
});

app.post('/position', function(req, res) {
	console.log(req.body);
	res.send('ok')
});


app.listen(80, '0.0.0.0',  function(){
     console.log('Express server listening on port 8090');
});
