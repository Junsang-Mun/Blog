import express from 'express';
import { lookupDB, queryPage, queryPageByTag } from '../../src/notion.js';
const router = express.Router();
export { router as apiRouter }

router.get('/post', function(req, res, next) {
	res.send('accessed to /api/post');
});

router.get('/post/:id', function(req, res, next) {
	res.send('accessed to /api/post/id');
	console.log(req.params.id);
});

router.get('/tag', function(req, res, next) {
	res.send('accessed to /api/tag');
});

router.get('/tag/:id', function(req, res, next) {
	res.send('accessed to /api/tag/id');
	console.log(req.params.id);
});