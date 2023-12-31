import { prisma } from '../utils/prisma/index.js';

export class PostsRepository {
    // 게시글 목록 조회
    findAllPosts = async () => {
        const posts = await prisma.posts.findMany();

        return posts;
    };

    // 게시글 상세 조회
    findDetailPost = async (postId) => {
        const post = await prisma.posts.findUnique({
            where: { postId: +postId },
        });

        return post;
    };

    // 게시글 작성
    createPost = async (nickname, password, title, content) => {
        const createdPost = await prisma.posts.create({
            data: {
                nickname,
                password,
                title,
                content,
            },
        });

        return createdPost;
    };

    // 게시글 수정
    updatePost = async (postId, password, title, content) => {
        const updatedPost = await prisma.posts.update({
            where: {
                postId: +postId,
                password: password,
            },
            data: {
                title,
                content,
            },
        });

        return updatedPost;
    };

    // 게시글 삭제
    deletePost = async (postId, password) => {
        const deletedPost = await prisma.posts.delete({
            where: {
                postId: +postId,
                password: password,
            },
        });

        return deletedPost;
    };
}
