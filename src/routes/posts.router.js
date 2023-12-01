import express from 'express';
import { PostsController } from '../controllers/posts.controller.js';

const router = express.Router();
const postController = new PostsController();

// 게시글 생성 api
router.post('/', postController.createPost);

// 게시글 조회 api
router.get('/', postController.getPosts);

// 게시글 상세 조회 api
router.get('/:postId', postController.getDetailPost);

// 게시글 수정 api
router.put('/:postId', postController.updatePost);

// 게시글 삭제 api
router.delete('/:postId', postController.deletePost);

export default router;
