import express from 'express';
import { lookupDB } from './notion.js';
const app = express();
const port = 5173;

app.get('/', async(req, res) => {
	const result = await lookupDB();
	res.send(`${result.results[0].properties}`);

	const postIDs = result.results.map((post) => (
		post.properties.title.title[0].plain_text
	));
	console.log(`postIDs: ${postIDs}`);
});

app.use(express.static('public'));

app.listen(port, function() {
	console.log(`Now server is running on localhost:${port}`);
});