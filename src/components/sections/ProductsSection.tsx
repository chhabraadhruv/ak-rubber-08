
import FilmReel from "@/components/FilmReel";

export default function ProductsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center leading-tight">
        Complete Range of O-Rings & Hydraulic Components in Gurgaon
      </h2>
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-base sm:text-lg mb-4 max-w-4xl mx-auto px-2">
          AK Rubber Spares is Gurgaon's most trusted supplier of premium quality hydraulic seals, O-rings, 
          pneumatic components, and industrial rubber products. We stock all major brands and custom sizes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 text-center">
          <div className="p-3 sm:p-4 bg-gray-900 rounded-lg">
            <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">O-Rings Gurgaon</h3>
            <p className="text-xs sm:text-sm text-gray-300">NBR, Viton, EPDM, Silicone - All sizes & custom specifications</p>
          </div>
          <div className="p-3 sm:p-4 bg-gray-900 rounded-lg">
            <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">Hydraulic Seals</h3>
            <p className="text-xs sm:text-sm text-gray-300">Rod seals, Piston seals, Wiper seals for all hydraulic systems</p>
          </div>
          <div className="p-3 sm:p-4 bg-gray-900 rounded-lg">
            <h3 className="font-bold text-primary mb-2 text-sm sm:text-base">Industrial Rubber</h3>
            <p className="text-xs sm:text-sm text-gray-300">Rubber sheets, gaskets, V-seals & pneumatic components</p>
          </div>
        </div>
      </div>
      
      <div className="my-6 sm:my-8">
        <FilmReel />
      </div>
      
      <div className="text-center">
        <p className="text-base sm:text-lg mb-4 sm:mb-6 px-2">
          <strong>Serving Industries:</strong> Manufacturing, Automotive, Construction, Agriculture, 
          Textile, Food Processing, and more across Gurgaon, Delhi NCR.
        </p>
      </div>
    </section>
  );
}
