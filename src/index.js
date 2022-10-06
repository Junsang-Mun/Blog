import express from 'express';
import { apiRouter } from '../routes/api/index.js';
import { previewPost, queryPageById } from './notion.js';
const app = express();
const port = 5173;

app.get('/', async(req, res) => {
	//let posts = await previewPost();
	const data = await queryPageById('0c48ff77955a438db0def51ef4767675');
	//console.log(data.post[0].data);
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
	for (let i in data.post) {
		if (data.post[i].data) {
			console.log(`data.post[i].type: ${data.post[i].type}`);
			console.log(`data.post[i].data.plain_text: ${data.post[i].data.plain_text}`);
			switch(data.post[i].type) {
				case 'heading_1':
					res.write(`<h1>${data.post[i].data.plain_text}</h1>`);
					break;
				case 'heading_2':
					res.write(`<h2>${data.post[i].data.plain_text}</h2>`);
					break;
				case 'heading_3':
					res.write(`<h3>${data.post[i].data.plain_text}</h3>`);
					break;
				case 'paragraph':
					res.write(`<p>${data.post[i].data.plain_text}</p>`);
					break;
				case 'bulleted_list_item':
					res.write(`<p>　⁍ ${data.post[i].data.plain_text}</p>`);
					break;
			}
		}
	}
	res.end();
});

app.use("/api", apiRouter);

app.use(express.static('public'));

app.listen(port, function() {
	console.log(`Now server is running on localhost:${port}`);
});