import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export default function EnglishBlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights and updates about AI receptionist technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-300 mb-8">
                We're working on bringing you valuable content about AI receptionist technology.
              </p>
              <Link 
                href="/en" 
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-black rounded-lg font-semibold hover:bg-primary-400 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
