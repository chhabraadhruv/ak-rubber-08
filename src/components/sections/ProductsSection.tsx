
import FilmReel from "@/components/FilmReel";

export default function ProductsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Complete Range of O-Rings & Hydraulic Components in Gurgaon
      </h2>
      <div className="text-center mb-8">
        <p className="text-lg mb-4 max-w-4xl mx-auto">
          AK Rubber Spares is Gurgaon's most trusted supplier of premium quality hydraulic seals, O-rings, 
          pneumatic components, and industrial rubber products. We stock all major brands and custom sizes.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
          <div className="p-4 bg-gray-900 rounded-lg">
            <h3 className="font-bold text-primary mb-2">O-Rings Gurgaon</h3>
            <p className="text-sm text-gray-300">NBR, Viton, EPDM, Silicone - All sizes & custom specifications</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg">
            <h3 className="font-bold text-primary mb-2">Hydraulic Seals</h3>
            <p className="text-sm text-gray-300">Rod seals, Piston seals, Wiper seals for all hydraulic systems</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg">
            <h3 className="font-bold text-primary mb-2">Industrial Rubber</h3>
            <p className="text-sm text-gray-300">Rubber sheets, gaskets, V-seals & pneumatic components</p>
          </div>
        </div>
      </div>
      
      <div className="my-8">
        <FilmReel />
      </div>
      
      <div className="text-center">
        <p className="text-lg mb-6">
          <strong>Serving Industries:</strong> Manufacturing, Automotive, Construction, Agriculture, 
          Textile, Food Processing, and more across Gurgaon, Delhi NCR.
        </p>
      </div>
    </section>
  );
}
