
import FilmReel from "@/components/FilmReel";

export default function AboutPage() {
  return (
    <div className="animate-slide-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        
        <div className="space-y-6 max-w-4xl mb-12">
          <p className="text-lg">
            Since 1991, AK Rubber Spares has been a trusted name in
            providing high-quality rubber and hydraulic components.
          </p>
          <p className="text-lg">
            We specialize in delivering precision-engineered seals, O-
            rings, and industrial rubber products. Our commitment to
            customer satisfaction and top-notch quality has made us
            a reliable partner in the industry for over three decades.
          </p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-lg">
              Founded with a vision to provide the highest quality rubber components to industries
              across India, AK Rubber Spares started as a small workshop in Gurugram. Over the years,
              we have grown to become one of the most reliable suppliers of rubber and hydraulic parts
              in the region.
            </p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to deliver exceptional quality products that meet the precise specifications
              of our customers. We aim to build long-term relationships through reliability, technical expertise,
              and outstanding customer service.
            </p>
          </div>
        </div>
        
        <div className="my-8">
          <FilmReel />
        </div>
      </div>
    </div>
  );
}
