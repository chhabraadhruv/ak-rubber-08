
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Phone, Mail } from "lucide-react";

const blogPost = {
  id: 1,
  slug: "hydraulic-cylinder-seal-kit-installation-guide",
  title: "Hydraulic Cylinder Seal Kit Installation: A Complete Guide",
  date: "2024-01-15",
  readTime: "8 min read",
  image: "/lovable-uploads/9110a679-cf87-406f-96ce-295cf2ab79f8.png",
  category: "Technical Guide",
  content: `
    <p>Hydraulic cylinders are the workhorses of industrial machinery, from excavators to manufacturing equipment. When seals fail, proper installation of replacement seal kits is crucial for maintaining optimal performance and preventing costly downtime. At AK Rubber Spares, we understand the importance of getting this right the first time.</p>

    <h2>Understanding Hydraulic Cylinder Seals</h2>
    <p>Hydraulic cylinder seals serve multiple critical functions. They prevent hydraulic fluid leakage, maintain system pressure, and keep contaminants out of the cylinder. A typical seal kit includes rod seals, piston seals, wiper seals, and backup rings, each designed for specific pressure and temperature conditions.</p>

    <h2>Pre-Installation Preparation</h2>
    <p>Before beginning any seal replacement work, proper preparation is essential. Start by completely depressurizing the hydraulic system and ensuring all energy sources are locked out. Clean the work area thoroughly to prevent contamination during the installation process.</p>
    
    <p>Gather all necessary tools including seal installation tools, torque wrenches, micrometers, and cleaning supplies. Having the right equipment prevents damage to delicate seal surfaces and ensures proper installation.</p>

    <h2>Step-by-Step Installation Process</h2>
    <p>Begin by carefully disassembling the hydraulic cylinder, taking photos or making notes of the component arrangement for reassembly reference. Remove the old seals completely, inspecting the cylinder bore and rod for damage, scoring, or excessive wear.</p>
    
    <p>Clean all components thoroughly using appropriate solvents. Any debris or contamination left behind can cause premature seal failure. Inspect the cylinder bore and rod surfaces carefully – scratches deeper than 0.025mm typically require professional repair.</p>
    
    <p>When installing new seals, handle them with care to avoid nicks or cuts. Use proper seal installation tools rather than improvising with screwdrivers or other implements that can damage the seal lips. Apply a light coating of compatible hydraulic fluid to ease installation and prevent dry starts.</p>

    <h2>Critical Installation Tips</h2>
    <p>Pay special attention to seal orientation – installing seals backwards or upside down will result in immediate failure. Most seals have directional indicators or asymmetric designs that show proper orientation.</p>
    
    <p>Ensure proper seal compression during installation. Over-compression can cause seal damage, while under-compression leads to leakage. Follow manufacturer specifications for compression ratios and installation torque values.</p>
    
    <p>Take time to properly align components during reassembly. Misalignment puts unnecessary stress on seals and can cause premature failure. Use appropriate alignment tools and techniques to ensure everything fits together correctly.</p>

    <h2>Common Installation Mistakes to Avoid</h2>
    <p>One of the most frequent errors is rushing the installation process. Taking shortcuts often leads to damaged seals, contamination, or improper assembly that results in early failure and repeat repairs.</p>
    
    <p>Using incompatible seal materials is another critical mistake. Different hydraulic fluids and operating conditions require specific seal compounds. Always verify that replacement seals match the original specifications or are approved upgrades.</p>
    
    <p>Neglecting to replace backup rings and secondary seals is a costly oversight. These components work together as a system, and mixing old and new parts often leads to performance issues.</p>

    <h2>Post-Installation Testing</h2>
    <p>After completing the installation, perform a careful system startup. Begin with low pressure operation to check for obvious leaks or problems before bringing the system to full operating pressure.</p>
    
    <p>Monitor the cylinder operation closely during the first few hours of use. Some minor weeping is normal as seals seat properly, but significant leakage indicates installation problems that need immediate attention.</p>
    
    <p>Document the installation date and seal kit specifications for future maintenance planning. Proper record keeping helps identify patterns and optimize replacement intervals.</p>

    <h2>Maximizing Seal Life</h2>
    <p>Proper installation is just the first step in maximizing seal performance. Regular maintenance including hydraulic fluid changes, filter replacements, and contamination control significantly extends seal life.</p>
    
    <p>Operating within design parameters is equally important. Exceeding pressure, temperature, or speed limits accelerates seal wear and can cause catastrophic failures.</p>

    <h2>When to Call Professionals</h2>
    <p>While many seal replacements can be handled in-house, some situations require professional expertise. Complex multi-stage cylinders, high-pressure applications, or cylinders with specialized coatings may need professional service to avoid costly mistakes.</p>

    <h2>Quality Seal Kits Make the Difference</h2>
    <p>The quality of your seal kit directly impacts installation success and long-term performance. At AK Rubber Spares, we supply premium seal kits designed for demanding industrial applications. Our kits include all necessary components and detailed installation instructions to ensure successful repairs.</p>

    <h2>Conclusion</h2>
    <p>Proper hydraulic cylinder seal kit installation requires attention to detail, quality components, and adherence to proven procedures. Taking the time to do it right the first time saves money, reduces downtime, and ensures reliable equipment operation.</p>
    
    <p>For high-quality hydraulic seal kits and expert technical support, contact AK Rubber Spares. Our experienced team can help you select the right seals for your application and provide installation guidance to ensure optimal results.</p>
  `
};

export default function BlogPostPage() {
  const { slug } = useParams();

  if (slug !== blogPost.slug) {
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
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Need Expert Hydraulic Seal Solutions?</h3>
              <p className="text-gray-300 mb-6">
                AK Rubber Spares specializes in premium hydraulic seals and components for industrial applications. 
                Contact our experienced team for technical support and quality seal kits.
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
