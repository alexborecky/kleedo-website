import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import InteractiveBlob from '@/components/visuals/InteractiveBlob'
import { getAllPosts, getPostBySlug, BlogPost } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { notFound } from 'next/navigation'
import Image from 'next/image'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post: BlogPost) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <section className="relative overflow-hidden page-section blog-header">
        <div className="container">
        {/* Hero Image Background */}
        {post.image && (
          <div className="absolute inset-0 z-0">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 blog-image-cover"></div>
          </div>
        )}
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 blog-header-content">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-500 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zpět na blog
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center text-sm mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString('cs-CZ')}
              {/* <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime} min čtení */}
            </div>
            
            {/* <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-500/20 text-primary-500 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div> */}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-200 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="blog-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 container">
          <article className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-white mb-3 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="text-gray-300 mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="text-gray-300 mb-4 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary-500 pl-4 my-6 italic text-gray-300">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-dark-700 text-primary-500 px-2 py-1 rounded text-sm">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-dark-700 p-4 rounded-lg overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-primary-500 hover:text-primary-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">
                    {children}
                  </strong>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>

      {/* Related Posts or CTA */}
      {/* <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Chcete vyzkoušet Kleedo?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Začněte s 14denní zkušební verzí zdarma a zjistěte, jak AI recepční 
            může pomoci vašemu podniku růst.
          </p>
          <Link
            href="/demo"
            className="btn-primary inline-flex items-center"
          >
            Vyzkoušet zdarma
          </Link>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-20 page-section cta-section cta-section-big overflow-hidden">
        <div className="container mask-container text-center">
          {/* <div className="inline-flex items-center bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 chip">
            AI recepční na telefonu
          </div> */}
          
          <h2 className="text-4xl font-bold text-white mb-6">
          Chcete vyzkoušet Kleedo?.
          </h2>
          
          <p className="text-small text-gray-300 mb-8 leading-relaxed">
            Začněte s 14denní zkušební verzí zdarma a zjistěte, jak AI recepční 
            může pomoci vašemu podniku růst.
          </p>

          <a href="/demo" className="btn-primary text-lg px-8 py-4 button circular circular-primary">
            <span>Objednat demo</span>
            <span className="btn-fill"></span>
          </a>
          <div className="absolute inset-0 -z-50">
            <InteractiveBlob 
              className="absolute"
              widthPercent={120} 
              heightPercent={60}
              leftPercent={-40}
              topPercent={0}
              baseRadius={200}
              noiseAmplitude={160}
              noiseSpeed={0.06}
              mouseStrength={10}
              mouseRadius={240}
              relax={1}
              pointsCount={10}
              gradientStart="#C5FFF2"
              gradientEnd="#717377"
              gradientDirection="30deg"
              gradientStartOpacity={.48}
              gradientEndOpacity={0.16}
              blurAmount={80}
            />
            <InteractiveBlob 
                className="absolute"
                widthPercent={80} 
                heightPercent={60}
                rightPercent={-20}
                bottomPercent={-40}
                baseRadius={200}
                noiseAmplitude={160}
                noiseSpeed={0.06}
                mouseStrength={10}
                mouseRadius={240}
                relax={1}
                pointsCount={32}
                gradientStart="#D2D6DD"
                gradientEnd="#BC3C3C"
                gradientDirection="80deg"
                gradientStartOpacity={.24}
                gradientEndOpacity={0}
                blurAmount={120}
              />
            {/* <InteractiveBlob 
              className="absolute bottom-0 left-0" 
              width={650} 
              height={500}
              fill="#D1EE9E0D"
              baseRadius={130}
              noiseAmplitude={16}
              noiseSpeed={0.15}
              mouseStrength={24}
              mouseRadius={120}
              relax={0.07}
              pointsCount={30}
              gradientStart="#F093FB"
              gradientEnd="#F5576C"
              gradientDirection="to top left"
              gradientStartOpacity={0.28}
              gradientEndOpacity={0.28}
              blurAmount={200}
            /> */}
          </div>
        </div>
      </section>
      

      <Footer />
    </main>
  )
}
