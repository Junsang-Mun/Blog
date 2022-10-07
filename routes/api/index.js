import express from 'express';
import { previewPost, queryPageById, queryPageByTag } from '../../src/notion.js';
const router = express.Router();
export { router as apiRouter }

router.get('/post', async function(req, res, next) {
	const data = await previewPost();
	if (data.error) {
		res.status(404);
		res.send(data.error);
	} else {
		res.status(200);
		res.send(data);
	}
});

router.get('/post/:id', async function(req, res, next) {
	const data = await queryPageById(req.params.id);
	if (data.error) {
		res.status(404);
		res.send(data.error);
	} else {
		res.status(200);
		res.send(data);
	}
});

router.get('/tag', function(req, res, next) {
	res.send('accessed to /api/tag');
});

router.get('/tag/:id', function(req, res, next) {
	res.send('accessed to /api/tag/id');
	console.log(req.params.id);
});