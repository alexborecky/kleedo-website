import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import Image from 'next/image'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      {/* <section className="relative hero overflow-hidden vertical-hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog Kleedo
            </h1>
            <p className="text-small">
              Tipy, triky a novinky o AI recepčních, automatizaci a růstu vašeho podniku.
            </p>
          </div>
          <div className="absolute inset-0 w-full h-full -z-50">
            <InteractiveBlob 
              className="absolute bottom-0 left-0" 
              widthPercent={120} 
              heightPercent={70}
              leftPercent={-30}
              bottomPercent={-20}
              baseRadius={200}
              noiseAmplitude={120}
              noiseSpeed={0.06}
              mouseStrength={100}
              mouseRadius={240}
              relax={0.08}
              pointsCount={12}
              gradientStart="#D2D6DD"
              gradientEnd="#717377"
              gradientDirection="35deg"
              gradientStartOpacity={.4}
              gradientEndOpacity={0}
              blurAmount={80}
            />
            <InteractiveBlob 
              className="absolute" 
              widthPercent={100} 
              heightPercent={40}
              rightPercent={-40}
              baseRadius={200}
              noiseAmplitude={120}
              noiseSpeed={0.08}
              mouseStrength={4}
              mouseRadius={240}
              relax={0.06}
              pointsCount={12}
              gradientStart="#EFC5A8"
              gradientEnd="#4ECDC4"
              gradientDirection="135deg"
              gradientStartOpacity={.64}
              gradientEndOpacity={0.2}
              blurAmount={80}
            />
          </div>
        </div>
      </section> */}

      {/* Blog Posts */}
      <section className="py-20 blog-page page-section">
        <div className="container">
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
            <>
              {/* Featured Section - First 2 posts */}
              {posts.length >= 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 featured-posts">
                  {/* Featured Post - Takes 2/3 width */}
                  <div className="lg:col-span-2">
                    <Link href={`/blog/${posts[0].slug}`} className="block h-full">
                      <article className="card hover:border-primary-500/50 transition-all duration-300 group h-full relative overflow-hidden cursor-pointer min-h-[400px]">
                        {/* Background Image */}
                        {posts[0].image && (
                          <div className="absolute inset-0 z-0">  
                            <Image
                              src={posts[0].image}
                              alt={posts[0].imageAlt || posts[0].title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60"></div>
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                          <div className="mb-4 featured-post-content">
                            <div className="flex items-center text-sm text-gray-300 mb-2">
                              <Calendar className="h-4 w-4 mr-2" />
                              {new Date(posts[0].date).toLocaleDateString('cs-CZ')}
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                              {posts[0].title}
                            </h2>
                            <p className="text-gray-200 mb-4 line-clamp-4">
                              {posts[0].excerpt}
                            </p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>

                  {/* Second Featured Post - Takes 1/3 width */}
                  <div className="lg:col-span-1">
                    <Link href={`/blog/${posts[1].slug}`} className="block h-full">
                      <article className="card hover:border-primary-500/50 transition-all duration-300 group h-full relative overflow-hidden cursor-pointer min-h-[400px]">
                        {/* Background Image */}
                        {posts[1].image && (
                          <div className="absolute inset-0 z-0">
                            <Image
                              src={posts[1].image}
                              alt={posts[1].imageAlt || posts[1].title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60"></div>
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                          <div className="mb-4">
                            <div className="flex items-center text-sm text-gray-300 mb-2">
                              <Calendar className="h-4 w-4 mr-2" />
                              {new Date(posts[1].date).toLocaleDateString('cs-CZ')}
                            </div>
                            <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                              {posts[1].title}
                            </h2>
                            <p className="text-gray-200 line-clamp-3">
                              {posts[1].excerpt}
                            </p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>
                </div>
              )}

              {/* Regular Grid - Remaining posts */}
              {posts.length > 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.slice(2).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                      <article className="card hover:border-primary-500/50 transition-all duration-300 group cursor-pointer h-full">
                        {/* Image Above Text */}
                        {post.image && (
                          <div className="relative blog-image">
                            <Image
                              src={post.image}
                              alt={post.imageAlt || post.title}
                              fill
                              className="object-cover rounded-t-lg"
                            />
                          </div>
                        )}
                        
                        <div>
                          <div className="flex items-center text-sm text-gray-400 mb-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(post.date).toLocaleDateString('cs-CZ')}
                          </div>
                          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-gray-400 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}

              {/* Fallback for less than 2 posts */}
              {posts.length < 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                      <article className="card hover:border-primary-500/50 transition-all duration-300 group cursor-pointer h-full">
                        <div>
                          <div className="flex items-center text-sm text-gray-400 mb-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(post.date).toLocaleDateString('cs-CZ')}
                          </div>
                          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-gray-400 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
