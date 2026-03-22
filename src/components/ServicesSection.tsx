import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "📝",
    title: "Content Strategy & Script Writing",
  },
  {
    icon: "🎬",
    title: "Video Production (Shoot)",
  },
  {
    icon: "✂️",
    title: "Video Editing & Post-Production",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
  },
  {
    icon: "⭐",
    title: "Personal Branding for Doctors",
  },
  {
    icon: "📊",
    title: "Growth Consulting",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-black/40">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <p className="text-blue-300 text-sm font-medium">Our Services</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Complete Healthcare Content Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">
                {service.title}
              </h3>

              {/* Hover effect - border glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-green-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Practice?</h3>
            <p className="text-gray-300 mb-6">
              Let's create a custom content strategy tailored to your specialty
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              <ArrowRight className="w-5 h-5" />
              Get Custom Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
