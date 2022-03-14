import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"







class PostsService {
    async getAllPosts() {
        const res = await api.get('api/posts')
        AppState.posts = res.data.posts
        AppState.newerPage = res.data.newer
        AppState.olderPage = res.data.older
        logger.log("Posts are...", AppState.posts)
        logger.log('Account is...', AppState.account)
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
        await api.post('api/posts', newPost)
        AppState.posts.push(newPost)
        Pop.toast("Post Created1")
    }

    async deletePost(id) {
        await api.delete('api/posts/' + id)
        Pop.toast("Post Delorted")
    }

    async setLike(id) {
        await api.post('api/posts/' + id + '/like')
        let realPost = AppState.posts.find(p => p.id == id)
        realPost.likes + 1
        AppState.posts.filter(p => p.id == id)
        AppState.posts.push(realPost)
        // figure this out
        Pop.toast("Post is liked!")
    }

    async changePage(page) {
        const res = await api.get(page)
        AppState.posts = res.data.posts
        AppState.newerPage = res.data.newer
        AppState.olderPage = res.data.older
    }

    async search(query) {
        logger.log("query is...", query)
        const res = await api.get('/api/posts' + '?query=' + query)
        AppState.posts = res.data.posts

    }
}

export const postsService = new PostsService()