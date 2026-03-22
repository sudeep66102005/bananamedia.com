import { Award, Target, Users } from "lucide-react";

const partners = [
  {
    name: "Manipal Hospitals",
    logo: "🏥",
    description: "Leading multi-specialty healthcare network",
    association: "Content Partnership for Medical Education",
  },
  {
    name: "Apollo Hospitals",
    logo: "⚕️",
    description: "Premier healthcare institution across India",
    association: "Digital Excellence Initiative",
  },
];

const credentials = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Team with digital marketing and medical communication certifications",
  },
  {
    icon: Target,
    title: "Data-Driven Strategy",
    description: "Every decision backed by analytics and performance metrics",
  },
  {
    icon: Users,
    title: "Healthcare Experts",
    description: "Medical professionals ensuring clinical accuracy in all content",
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="relative py-20 bg-black/40">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <p className="text-purple-300 text-sm font-medium">Our Associations</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by Leading Healthcare Institutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Partnering with India's premier healthcare networks to revolutionize medical content
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {partner.description}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                <p className="text-sm">
                  <span className="text-gray-400">Association: </span>
                  <span className="text-white font-medium">
                    {partner.association}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Trust Us */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Healthcare Leaders Trust Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((credential, idx) => {
              const Icon = credential.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300 mb-4">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {credential.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {credential.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compliance & Standards */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Professional Standards & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-400 mb-1">Medical Accuracy</p>
              <p className="text-white font-semibold">100%</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Content Ethics</p>
              <p className="text-white font-semibold">Verified</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Data Privacy</p>
              <p className="text-white font-semibold">HIPAA Ready</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Legal Compliance</p>
              <p className="text-white font-semibold">Full Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
