
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "hydraulic-cylinder-seal-kit-installation-guide",
    title: "Hydraulic Cylinder Seal Kit Installation: A Complete Guide",
    excerpt: "Learn the essential steps for proper hydraulic cylinder seal kit installation to maintain optimal performance and prevent costly downtime.",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/lovable-uploads/9110a679-cf87-406f-96ce-295cf2ab79f8.png",
    category: "Technical Guide"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-primary mr-3 animate-bounce-subtle" />
              <span className="text-primary font-semibold text-lg">Industry Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
              Technical Blog & Industry Insights
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert guidance on hydraulic components, O-rings, and industrial sealing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-primary to-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-yellow-400 font-semibold transition-all duration-300 group-hover:translate-x-1"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
