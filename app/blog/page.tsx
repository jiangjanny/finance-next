import { getPosts } from '../lib/posts'
import { Post } from '../ui/post'

export default async function Page() {
    const posts = await getPosts()

    console.log('posts', posts);


    return (

        <ul>
            sdfsdfdsfsdf
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </ul>
    )
}