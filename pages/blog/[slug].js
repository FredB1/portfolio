import { sql } from "@vercel/postgres";
import { useRouter } from 'next/router';

const BlogPost = ({ post }) => {
    const router = useRouter();

    // If the page is not yet generated, show a loading state
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(post.date))}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
};

export async function getStaticPaths() {
    let paths = [];

    try {
        // Fetch the list of slugs from the database
        const { rows } = await sql`SELECT slug FROM posts`;
        paths = rows.map((row) => ({
            params: { slug: row.slug },
        }));
    } catch (error) {
        console.error("Failed to fetch slugs:", error);
    }

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    let post = null;

    try {
        // Fetch the specific post based on the slug
        const { rows } = await sql`SELECT title, date, content FROM posts WHERE slug = ${params.slug}`;

        if (rows.length > 0) {
            post = rows[0];
        }
    } catch (error) {
        console.error("Failed to fetch post:", error);
    }

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: { post },
    };
}

export default BlogPost;
