import express from 'express';
import {area} from './square.js'
const app = express();
const port = 3000;

app.get('/', function(req, res) {
	res.send(`Hello World!\n${area(4)}`);
});

app.listen(port, function() {
	console.log(`Now server is running on localhost:${port}`);
});