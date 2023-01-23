import express from 'express';
const router = express.Router();
import { createPost, getPosts, getPost } from '../controller/posts.js';

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/',createPost);


export default router;
