import Link from 'next/link'
import { getPosts } from '../../lib/posts'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function Post({ key, post }) {
    const posts = await getPosts()

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}