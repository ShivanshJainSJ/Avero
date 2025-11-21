import fs from 'fs';
import products from '../data/products.json';

const BASE_URL = 'https://avero.ai';

function generateSiteMap() {
    const staticPages = [
        '',
        '/blog',
        '/privacy',
        '/terms',
    ];

    const productPages = products.map((product) => `/products/${product.slug}`);

    const allPages = [...staticPages, ...productPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
            .map((url) => {
                return `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? 1.0 : 0.8}</priority>
  </url>
`;
            })
            .join('')}
</urlset>`;

    fs.writeFileSync('public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully!');
}

generateSiteMap();
