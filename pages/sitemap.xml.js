import { sql } from '@vercel/postgres';

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Manually set the static URLs -->
     <url>
       <loc>https://fredb.dev/</loc>
     </url>
     <url>
       <loc>https://fredb.dev/about</loc>
     </url>
     <url>
     <loc>https://fredb.dev/contact</loc>
   </url>
   <url>
   <loc>https://fredb.dev/services</loc>
 </url>
 <url>
 <loc>https://fredb.dev/projects</loc>
</url>
    
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will handle everything, so this component won't render anything
    return null;
}

export async function getServerSideProps({ res }) {
    // Fetch the URLs for your dynamic pages from PostgreSQL

    // Generate the XML sitemap with the posts data
    const sitemap = generateSiteMap();

    // Set the response headers and send the XML
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
