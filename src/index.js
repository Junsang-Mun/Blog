import express from 'express';
import { apiRouter } from '../routes/api/index.js';
import { lookupDB, queryPage } from './notion.js';
const app = express();
const port = 5173;

app.get('/', async(req, res) => {
	let result = await lookupDB();
	//const block = await queryPage('0c48ff77955a438db0def51ef4767675');
	console.log(result);
	res.send(`${result[0].id}`);
});

app.use("/api", apiRouter);

app.use(express.static('public'));

app.listen(port, function() {
	console.log(`Now server is running on localhost:${port}`);
});