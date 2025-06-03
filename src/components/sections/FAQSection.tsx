
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What types of O-rings do you supply in Gurgaon?",
    answer: "We supply O-rings in various materials including Viton, NBR, EPDM, Silicone, and PU. Available in standard and custom sizes for all industrial applications in Gurgaon and Delhi NCR. Our O-rings meet international quality standards and are suitable for automotive, hydraulic, pneumatic, and general industrial applications."
  },
  {
    id: 2,
    question: "Do you provide hydraulic seals for industrial machinery?",
    answer: "Yes, we supply a complete range of hydraulic seals including rod seals, piston seals, wiper seals, guide rings, and backup rings. Our hydraulic seals are designed for heavy-duty industrial machinery, construction equipment, and hydraulic systems operating under high pressure and temperature conditions."
  },
  {
    id: 3,
    question: "What are your business hours and locations?",
    answer: "Our main store in Gurgaon (New Colony) is open Monday to Friday from 10 AM to 7 PM, and Saturday from 10 AM to 5 PM. Our Delhi store at Kashmere Gate operates Monday to Saturday from 11 AM to 7 PM. Both locations are closed on Sundays."
  },
  {
    id: 4,
    question: "Do you offer custom rubber components manufacturing?",
    answer: "Yes, we provide custom manufacturing services for rubber components. Our experienced team can produce seals, gaskets, and rubber parts according to your specific drawings, samples, or requirements. We work with various rubber compounds to meet your exact specifications."
  },
  {
    id: 5,
    question: "What industries do you serve in Delhi NCR?",
    answer: "We serve diverse industries including automotive, manufacturing, construction, mining, agriculture, textiles, pharmaceuticals, and food processing. Our products are used in hydraulic systems, pneumatic equipment, pumps, compressors, and various industrial machinery across Delhi NCR."
  },
  {
    id: 6,
    question: "How can I get a quote for bulk orders?",
    answer: "For bulk orders and competitive pricing, please contact us directly at +91-9810580983 or email chhabraajay25@gmail.com. We offer special rates for large quantities and can provide technical consultation to help you select the right products for your applications."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-gray-900 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about our O-rings, hydraulic seals, and rubber components in Gurgaon
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-750 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openFAQ === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Have more questions? We're here to help!
          </p>
          <a 
            href="tel:+919810580983"
            className="inline-flex items-center space-x-2 bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            <span>Call Us: +91-9810580983</span>
          </a>
        </div>
      </div>
    </section>
  );
}
