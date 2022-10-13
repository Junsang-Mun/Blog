import express from 'express';
import { apiRouter } from '../routes/api/index.js';
import { previewPost, queryPageById, queryPageMetadata } from './notion.js';
import cors from 'cors';
const app = express();
const port = 3030;

app.use(cors());

app.get('/', async(req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
	const data = await queryPageById('0c48ff77955a438db0def51ef4767675');
	const metadata = await queryPageMetadata('0c48ff77955a438db0def51ef4767675');
	console.log(metadata);
	res.write(data.body);
	res.end();
});

app.use("/api", apiRouter);

app.use(express.static('public'));

app.listen(port, function() {
	console.log(`Now server is running on localhost:${port}`);
});
