import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/data/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  readTime: number
  image?: string
  imageAlt?: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // Check if posts directory exists
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Calculate read time (average 200 words per minute)
        const wordCount = content.split(/\s+/).length
        const readTime = Math.ceil(wordCount / 200)

        return {
          slug,
          title: data.title || 'Bez názvu',
          excerpt: data.excerpt || '',
          content,
          date: data.date || new Date().toISOString(),
          tags: data.tags || [],
          readTime,
          image: data.image,
          imageAlt: data.imageAlt,
        }
      })

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Calculate read time
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)

    return {
      slug,
      title: data.title || 'Bez názvu',
      excerpt: data.excerpt || '',
      content,
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      readTime,
      image: data.image,
      imageAlt: data.imageAlt,
    }
  } catch (error) {
    console.error('Error reading blog post:', error)
    return null
  }
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.tags.includes(tag))
}
