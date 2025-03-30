
import FilmReel from "@/components/FilmReel";
import DownloadButton from "@/components/DownloadButton";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen animate-slide-in">
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-4">Our Products:</h2>
          <p className="text-lg mb-8 max-w-4xl">
            All kinds of Hydraulic & Pneumatic Seals, V Seals, O Rings, 
            Oil Seals & All Types of Rubber in Synthetic, Neoprene, 
            Silicon, Viton Rubber, P.U. Rubber & P.U. Seals etc.
          </p>
          
          <DownloadButton />
          
          <div className="my-8">
            <FilmReel />
          </div>
        </section>
        
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-4">About us:</h2>
          <div className="space-y-6 max-w-4xl">
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
          </div>
        </section>
      </main>
    </div>
  );
}
