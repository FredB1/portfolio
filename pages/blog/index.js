import { sql } from "@vercel/postgres";

export async function getStaticProps() {
    let posts = [];

    try {
        const { rows } = await sql`SELECT id, title, date, content FROM posts ORDER BY date DESC`;
        posts = rows;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }

    return {
        props: {
            posts,
        },
        revalidate: 60, // Optional: ISR to rebuild the page every 60 seconds
    };
}

const Blog = ({ posts }) => {
    return (
        <div>
            <h1>Blog</h1>
            {posts.length === 0 ? (
                <p>Coming Soon</p>
            ) : (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(post.date))}</p>
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Blog;
