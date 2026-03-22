import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-3">
              Carefluence
            </div>
            <p className="text-sm text-gray-400">
              Empowering doctors to build authentic digital presence and establish thought leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-blue-400 transition-colors">Our Work</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-green-400 transition-colors">Content Strategy</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Video Production</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Social Marketing</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Personal Branding</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@carefluence.com" className="hover:text-blue-400 transition-colors">
                  hello@carefluence.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>123 Medical Lane, Bangalore</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} Carefluence. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/" className="hover:text-white transition-colors">Compliance</a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300">
                <span className="text-sm">f</span>
              </a>
              <a href="/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500/20 flex items-center justify-center transition-all duration-300">
                <span className="text-sm">📷</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-gray-500 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-red-500" />
          <span>for Healthcare Professionals</span>
        </div>
      </div>
    </footer>
  );
}
