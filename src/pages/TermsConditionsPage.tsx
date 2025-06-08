
import { useEffect } from "react";

export default function TermsConditionsPage() {
  useEffect(() => {
    document.title = 'Terms & Conditions | AK Rubber Spares';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Terms and Conditions for AK Rubber Spares - Review our terms of service, product warranties, and conditions for using our website and services.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    return () => {
      document.title = 'AK Rubber Spares - Premium O-Rings & Hydraulic Seals';
    };
  }, []);

  return (
    <div className="animate-slide-in pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-300 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using the AK Rubber Spares website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">2. Products and Services</h2>
            <p className="text-gray-300 mb-4">
              AK Rubber Spares specializes in providing high-quality O-rings, hydraulic seals, and pneumatic components for industrial applications. We strive to provide accurate product descriptions and specifications.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>All product specifications are subject to verification</li>
              <li>Custom orders may have different terms and lead times</li>
              <li>Product availability may vary based on demand and supply</li>
              <li>Technical support is provided for our products and applications</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">3. Pricing and Payment</h2>
            <p className="text-gray-300 mb-4">
              Pricing for our products and services is provided upon request and may vary based on quantity, specifications, and market conditions.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>All prices are exclusive of applicable taxes unless specified</li>
              <li>Payment terms will be specified in individual quotations</li>
              <li>We reserve the right to modify prices without prior notice</li>
              <li>Special pricing may apply for bulk orders</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">4. Warranty and Returns</h2>
            <p className="text-gray-300 mb-4">
              We stand behind the quality of our products and provide warranties as specified for each product category.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Manufacturing defects are covered under standard warranty terms</li>
              <li>Custom products may have specific warranty conditions</li>
              <li>Returns must be authorized and in original condition</li>
              <li>Installation and application errors are not covered under warranty</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300">
              AK Rubber Spares shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our products or services.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-300">
              All content on this website, including text, graphics, logos, images, and software, is the property of AK Rubber Spares and is protected by copyright and other intellectual property laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
            <p className="text-gray-300">
              These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p className="text-gray-300">
              For questions regarding these Terms & Conditions, please contact us at:
            </p>
            <div className="mt-4 text-gray-300">
              <p>AK Rubber Spares</p>
              <p>Phone: +91 9810580983</p>
              <p>GST: 06AAGPC8120M2ZS</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
