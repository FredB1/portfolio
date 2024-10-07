import fs from 'fs';
import path from 'path';

// Function to generate the XML sitemap (without projects map)
function generateSiteMap() {
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
        <loc>https://fredb.dev/services/application-development</loc>
      </url>
       <url>
   <loc>https://fredb.dev/services/mobile-applications</loc>
 </url>
  <url>
   <loc>https://fredb.dev/services/web-development</loc>
 </url>
  <url>
   <loc>https://fredb.dev/services/software-development</loc>
 </url>
  <url>
   <loc>https://fredb.dev/services/support-and-miscellaneous</loc>
 </url>
   </urlset>
 `;
}

// Static Next.js component
function SiteMap() {
  return null;
}

// Generate the sitemap and send it
export async function getServerSideProps({ res }) {
  // Generate the XML sitemap without dynamic content
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
