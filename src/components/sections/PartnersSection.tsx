
export default function PartnersSection() {
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          <div className="w-72 h-36 bg-white p-4 flex items-center justify-center rounded">
            <img 
              src="/lovable-uploads/01ec75d4-fc5f-4035-a025-89303f0fb7fc.png" 
              alt="KASTAS - Premium hydraulic seals partner" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="w-72 h-36 bg-white p-4 flex items-center justify-center rounded">
            <img 
              src="/lovable-uploads/1365cee0-5826-4aed-9445-ff8b249ed2b2.png" 
              alt="TECNOLAN - Quality rubber components manufacturer" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
