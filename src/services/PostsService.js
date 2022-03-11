import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"







class PostsService {
    async getAllPosts() {
        const res = await api.get('api/posts')
        AppState.posts = res.data.posts
        logger.log("Posts are...", AppState.posts)
    }

    async getPostsById(id) {
        let realId = id.toString()
        logger.log("realId is...", realId)
        const res = await api.get('api/profiles/' + realId + '/posts')
        logger.log("res.data is...", res.data.posts)
        AppState.posts = res.data.posts
    }

    async updatePost(id) {
        const res = await api.put('api/' + id)
        logger.log(res.data)
    }

}

export const postsService = new PostsService()