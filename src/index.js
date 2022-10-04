import express from 'express';
import { lookupDB } from './notion.js';
const app = express();
const port = 5173;

app.get('/', function(req, res) {
	const result = lookupDB();
	res.send(`${result}`);
});

app.use(express.static('public'));

app.listen(port, function() {
	console.log(`Now server is running on localhost:${port}`);
});