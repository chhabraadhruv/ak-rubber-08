
import { useEffect } from "react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | AK Rubber Spares';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Privacy Policy for AK Rubber Spares - Learn how we collect, use, and protect your personal information when using our website and services.';
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
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-gray-300 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect information you provide directly to us, such as when you contact us through our website, request information about our products, or communicate with us via phone or email.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company information and business requirements</li>
              <li>Communications and correspondence with us</li>
              <li>Technical information about your use of our website</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to provide, maintain, and improve our services, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Responding to your inquiries and providing customer support</li>
              <li>Processing your orders and managing business relationships</li>
              <li>Sending you promotional messages (only with your consent)</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>With trusted service providers who assist us in operating our business</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of promotional communications</li>
              <li>Request information about how we use your data</li>
              <li>File a complaint with relevant authorities</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
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
