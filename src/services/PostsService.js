import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"







class PostsService {
    async getAllPosts() {
        const res = await api.get('api/posts')
        AppState.posts = res.data.posts
        logger.log("Posts are...", AppState.posts)
    }

    async getPostsById(id) {
        logger.log("realId is...", id)
        const res = await api.get('api/profiles/' + id + '/posts')
        logger.log("res.data is...", res.data.posts)
        AppState.posts = res.data.posts
    }

    async updatePost(id) {
        const res = await api.post('api/posts/' + id + 'like')
        logger.log(res.data)
    }

    async createPost(newPost) {
        logger.log("New post is...", newPost)
        await api.post('api/posts', newPost)
        AppState.posts.push(newPost)
    }

    async deletePost(id) {
        logger.log("Doomed post id is...", id)
        await api.delete('api/posts/' + id)
        Pop.toast("Post Delorted")
    }

}

export const postsService = new PostsService()