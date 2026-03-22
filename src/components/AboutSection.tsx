import { Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-black/40">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <p className="text-cyan-300 text-sm font-medium">About Us</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Building the Future of Medical Content
          </h2>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { stat: "7+", label: "Years Experience" },
            { stat: "50+", label: "Doctors Transformed" },
            { stat: "500+", label: "Projects Created" },
            { stat: "15+", label: "Team Members" },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
                {item.stat}
              </p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
