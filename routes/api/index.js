import express from 'express';
const router = express.Router();
export { router as apiRouter }

router.get("/", function(req, res, next) {
	res.send('accessed to /api');
});

router.get("/post", function(req, res, next) {
	res.send('accessed to /api/post');
});

router.get("/post/:id", function(req, res, next) {
	res.send('accessed to /api/post/id');
});