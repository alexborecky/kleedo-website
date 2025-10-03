import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog Kleedo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tipy, triky a novinky o AI recepčních, automatizaci a růstu vašeho podniku.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Zatím žádné články
              </h2>
              <p className="text-gray-400">
                První články se objeví brzy. Sledujte nás pro nejnovější tipy a triky.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="card hover:border-primary-500/50 transition-all duration-300 group">
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('cs-CZ')}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime} min čtení
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-500 hover:text-primary-400 transition-colors"
                    >
                      Číst více
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
