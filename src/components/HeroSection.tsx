import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black/40 pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-green-900/10" />

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <p className="text-blue-300 text-sm font-medium">
                🎬 Healthcare Content Excellence
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Build Your
            <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              Personal Brand
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We transform your medical expertise into compelling visual stories. From scripting and production to editing and digital marketing—complete healthcare content solutions.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {[
              { icon: "📝", label: "Strategy & Script" },
              { icon: "🎥", label: "Video Production" },
              { icon: "✂️", label: "Professional Editing" },
              { icon: "📱", label: "Social Marketing" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <p className="text-sm text-gray-300">{feature.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-blue-500/50 text-white rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-4">Trusted by Medical Professionals</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">50+</p>
                <p className="text-sm text-gray-400">Doctors Transformed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">2M+</p>
                <p className="text-sm text-gray-400">Combined Reach</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">500+</p>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
