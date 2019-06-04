var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

router.route('/entry').get(function(req,res){
		res.json({"customerName":"Vj",
		"cardList":[
			{"maskedCard":"****9876",
			 "cloakedCard":"a2sw2s2",
			 "cardID":"102789"
			},
			{"maskedCard":"****6785",
			 "cloakedCard":"a2sy2s2",
			 "cardID":"102789"
			},
			{"maskedCard":"****3678",
			 "cloakedCard":"a2sh8ju2",
			 "cardID":"102789"
			}
		]

	});
});

router.route('/input').post(function(req,res){
		console.log("inside the post",req);
		res.json({message:"card activation successfull"});
});


app.use('/rest/cardact', router);

var server = app.listen(3000, function () {
	console.log('api listening on', server.address().port);

});
