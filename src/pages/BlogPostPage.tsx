import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Phone, Mail } from "lucide-react";
import { useEffect } from "react";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { getBlogContent } from "@/data/blog-content";

export default function BlogPostPage() {
  const { slug } = useParams();
  const blogPost = slug ? getBlogPostBySlug(slug) : null;
  const content = slug ? getBlogContent(slug) : null;

  useEffect(() => {
    if (blogPost) {
      // Update document title
      document.title = `${blogPost.title} | AK Rubber Spares`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', blogPost.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = blogPost.metaDescription;
        document.head.appendChild(meta);
      }

      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', blogPost.keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = blogPost.keywords;
        document.head.appendChild(meta);
      }

      // Add Open Graph meta tags
      const updateOrCreateMetaTag = (property: string, content: string) => {
        let metaTag = document.querySelector(`meta[property="${property}"]`);
        if (metaTag) {
          metaTag.setAttribute('content', content);
        } else {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('property', property);
          metaTag.setAttribute('content', content);
          document.head.appendChild(metaTag);
        }
      };

      updateOrCreateMetaTag('og:title', blogPost.title);
      updateOrCreateMetaTag('og:description', blogPost.metaDescription);
      updateOrCreateMetaTag('og:image', `https://www.akrubberspares.in${blogPost.image}`);
      updateOrCreateMetaTag('og:url', `https://www.akrubberspares.in/blog/${blogPost.slug}`);
      updateOrCreateMetaTag('og:type', 'article');
      updateOrCreateMetaTag('article:published_time', blogPost.date);
      updateOrCreateMetaTag('article:author', 'AK Rubber Spares');

      // Add Twitter Card meta tags
      const updateOrCreateTwitterTag = (name: string, content: string) => {
        let metaTag = document.querySelector(`meta[name="${name}"]`);
        if (metaTag) {
          metaTag.setAttribute('content', content);
        } else {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', name);
          metaTag.setAttribute('content', content);
          document.head.appendChild(metaTag);
        }
      };

      updateOrCreateTwitterTag('twitter:card', 'summary_large_image');
      updateOrCreateTwitterTag('twitter:title', blogPost.title);
      updateOrCreateTwitterTag('twitter:description', blogPost.metaDescription);
      updateOrCreateTwitterTag('twitter:image', `https://www.akrubberspares.in${blogPost.image}`);

      // Add structured data (JSON-LD)
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blogPost.title,
        "description": blogPost.metaDescription,
        "image": `https://www.akrubberspares.in${blogPost.image}`,
        "author": {
          "@type": "Organization",
          "name": "AK Rubber Spares",
          "url": "https://www.akrubberspares.in"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AK Rubber Spares",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.akrubberspares.in/favicon.ico"
          }
        },
        "datePublished": blogPost.date,
        "dateModified": blogPost.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.akrubberspares.in/blog/${blogPost.slug}`
        }
      };

      // Remove existing structured data script if any
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data script
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'AK Rubber Spares - Premium O-Rings & Hydraulic Seals';
    };
  }, [blogPost]);

  if (!blogPost || !content) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:text-primary/80">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(blogPost.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {blogPost.readTime}
              </div>
            </div>

            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-8">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Need Expert Pneumatic & Hydraulic Seal Solutions?</h3>
              <p className="text-gray-300 mb-6">
                AK Rubber Spares specializes in premium O-rings, seals, and components for both pneumatic and hydraulic applications. 
                Contact our experienced team for technical support and quality seal solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+919810580983"
                  className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center justify-center"
                >
                  <Phone className="h-4 w-4" />
                  Call +91 9810580983
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-black transition-colors text-center justify-center"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
