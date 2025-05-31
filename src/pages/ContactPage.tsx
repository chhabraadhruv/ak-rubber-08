
import ContactInfo from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';
import { Loader2 } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      // You need to replace these with your actual EmailJS service, template and user IDs
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        reply_to: formData.email
      };
      
      await emailjs.send(
        'service_1q7sye1', // Replace with your EmailJS service ID
        'template_okf6usr', // Replace with your EmailJS template ID
        templateParams,
        'YEj5BsyXkF3j5FnBp' // Replace with your EmailJS user ID
      );
      
      toast({
        title: "Message sent",
        description: "Thank you! We'll get back to you soon!"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-slide-in pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <ContactInfo />
            
            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name*
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                  className="border-gray-700 bg-black/30"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  disabled={isSubmitting}
                  className="border-gray-700 bg-black/30"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  disabled={isSubmitting}
                  className="border-gray-700 bg-black/30"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message*
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="border-gray-700 bg-black/30"
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
              
              <div className="text-sm text-center text-muted-foreground mt-4">
                <p>After submitting, please allow some time for us to get back to you.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
