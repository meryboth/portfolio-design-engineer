import { getBlogPosts } from 'app/experience/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/experience/${post.slug}`,
    lastModified: post.metadata.finishedAt,
  }));

  let routes = ['', '/experience'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
