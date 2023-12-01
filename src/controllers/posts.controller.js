import { PostsService } from '../services/posts.service.js';

export class PostsController {
    postsService = new PostsService();

    // 게시글 조회 api
    getPosts = async (req, res, next) => {
        try {
            const posts = await this.postsService.findAllPosts();

            return res.status(200).json({ data: posts });
        } catch (err) {
            next(err);
        }
    };

    //게시글 상세 조회 api
    getDetailPost = async (req, res, next) => {
        try {
            const { postId } = req.params;

            const post = await this.postsService.findDetailPost(postId);

            return res.status(200).json({ data: post });
        } catch (err) {
            next(err);
        }
    };

    // 게시글 생성 api
    createPost = async (req, res, next) => {
        try {
            const { nickname, password, title, content } = req.body;

            const createdPost = await this.postsService.createPost(
                nickname,
                password,
                title,
                content
            );

            return res.status(201).json({ data: createdPost });
        } catch (err) {
            next(err);
        }
    };

    // 게시글 수정 api
    updatePost = async (req, res, next) => {
        try {
            const { postId } = req.params;
            const { password, title, content } = req.body;

            const updatedPost = await this.postsService.updatePost(
                postId,
                password,
                title,
                content
            );

            return res.status(200).json({ data: updatedPost });
        } catch (err) {
            next(err);
        }
    };

    // 게시글 삭제 api
    deletePost = async (req, res, next) => {
        try {
            const { postId } = req.params;
            const { password } = req.body;

            const deletedPost = await this.postsService.deletePost(
                postId,
                password
            );

            return res.status(200).json({ message: '게시글 삭제 성공' });
        } catch (err) {
            next(err);
        }
    };
}
