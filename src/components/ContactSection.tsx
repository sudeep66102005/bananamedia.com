import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", specialty: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 bg-black/40">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <p className="text-orange-300 text-sm font-medium">Get In Touch</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Medical Practice?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Book your free consultation and let's discuss your content strategy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 flex items-center justify-center mb-4 transition-all duration-300">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm mb-3">hello@carefluence.com</p>
              <a
                href="mailto:hello@carefluence.com"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Send an Email →
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 flex items-center justify-center mb-4 transition-all duration-300">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400 text-sm mb-3">+91 98765 43210</p>
              <a
                href="tel:+919876543210"
                className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
              >
                Call Now →
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 flex items-center justify-center mb-4 transition-all duration-300">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 text-sm mb-3">Quick Chat Support</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
              >
                Message on WhatsApp →
              </a>
            </div>

            {/* Office */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 flex items-center justify-center mb-4 transition-all duration-300">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Office</h3>
              <p className="text-gray-400 text-sm">
                123 Medical Lane<br />
                Bangalore, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-xl bg-white/5 border border-white/10">
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Thank You!</h3>
                    <p className="text-gray-400">We've received your message and will get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Dr. Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>

                  {/* Specialty */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Specialty
                    </label>
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/20 transition-all duration-300"
                    >
                      <option value="">Select your specialty</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="neurology">Neurology</option>
                      <option value="oncology">Oncology</option>
                      <option value="dentistry">Dentistry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your goals and what you're looking to achieve..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll respond to your inquiry within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3">
            Need immediate assistance?
          </h3>
          <p className="text-gray-300 mb-6">
            Schedule a quick call with our team to discuss your content strategy
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
