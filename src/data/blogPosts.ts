
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  metaDescription: string;
  keywords: string;
}

export const blogPostsIndex: BlogPost[] = [
  {
    id: 2,
    slug: "pneumatic-system-o-ring-replacement-guide",
    title: "Pneumatic System O-Ring Replacement: A Complete Guide for Industrial Applications",
    excerpt: "Master the essential skills of pneumatic O-ring replacement to prevent costly downtime and maintain optimal system performance in industrial operations.",
    date: "2025-06-05",
    readTime: "12 min read",
    image: "/lovable-uploads/3ef9654a-fd56-4764-b151-b0888210ca3a.png",
    category: "Maintenance Guide",
    metaDescription: "Master pneumatic O-ring replacement to prevent costly downtime and maintain optimal system performance. Complete guide for industrial pneumatic applications.",
    keywords: "pneumatic O-rings, O-ring replacement, pneumatic maintenance, industrial seals, compressed air systems"
  },
  {
    id: 1,
    slug: "hydraulic-cylinder-seal-kit-installation-guide",
    title: "Hydraulic Cylinder Seal Kit Installation: A Complete Guide",
    excerpt: "Learn the essential steps for proper hydraulic cylinder seal kit installation to maintain optimal performance and prevent costly downtime.",
    date: "2025-05-01",
    readTime: "8 min read",
    image: "/lovable-uploads/9110a679-cf87-406f-96ce-295cf2ab79f8.png",
    category: "Technical Guide",
    metaDescription: "Learn the essential steps for proper hydraulic cylinder seal kit installation to maintain optimal performance and prevent costly downtime. Expert guide by AK Rubber Spares.",
    keywords: "hydraulic cylinder seals, seal kit installation, hydraulic maintenance, industrial seals, hydraulic repair"
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPostsIndex.find(post => post.slug === slug);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPostsIndex.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
