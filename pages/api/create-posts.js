import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const result = await sql`
      CREATE TABLE posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date TIMESTAMP NOT NULL,
        content TEXT NOT NULL
      );
    `;
        return response.status(200).json({ result });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}
