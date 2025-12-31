import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b2940] text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/images/logo.png" // WarmPaws logo
              alt="WarmPaws Logo"
              className="w-12 h-12 rounded-lg shadow-lg"
            />
            <h2 className="text-2xl font-bold text-white">WarmPaws</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Keeping your pets cozy, safe, and happy during the winter season. Explore services, tips, and expert care for your furry friends.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">🏠 Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-500 transition">🐾 Services</Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-orange-500 transition">👤 My Profile</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-orange-500 transition">🔒 Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact & Social</h3>
          <p className="text-gray-400 text-sm mb-3">
            Email: <a href="mailto:info@warmpaws.com" className="text-orange-500 hover:underline">info@warmpaws.com</a>
          </p>
          <p className="text-gray-400 text-sm mb-3">
            Phone: <a href="tel:+880123456789" className="text-orange-500 hover:underline">+880 1234 56789</a>
          </p>
          <div className="flex gap-5">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.827c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.796.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.296h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.333V1.333C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.432.403a4.918 4.918 0 011.797 1.047 4.918 4.918 0 011.047 1.797c.163.462.348 1.262.403 2.432.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.403 2.432a4.918 4.918 0 01-1.047 1.797 4.918 4.918 0 01-1.797 1.047c-.462.163-1.262.348-2.432.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.432-.403a4.918 4.918 0 01-1.797-1.047 4.918 4.918 0 01-1.047-1.797c-.163-.462-.348-1.262-.403-2.432C.012 15.747 0 15.368 0 12s.012-3.584.07-4.85c.055-1.17.24-1.97.403-2.432a4.918 4.918 0 011.047-1.797 4.918 4.918 0 011.797-1.047c.462-.163 1.262-.348 2.432-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.07 5.765.127 4.845.34 4.062.654c-.796.304-1.47.708-2.137 1.375a6.927 6.927 0 00-1.375 2.137c-.314.783-.527 1.703-.584 2.99C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.057 1.287.27 2.207.584 2.99a6.927 6.927 0 001.375 2.137c.667.667 1.34 1.071 2.137 1.375.783.314 1.703.527 2.99.584 1.28.058 1.684.07 4.948.07s3.668-.012 4.948-.07c1.287-.057 2.207-.27 2.99-.584a6.927 6.927 0 002.137-1.375c.667-.667 1.071-1.34 1.375-2.137.314-.783.527-1.703.584-2.99.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.057-1.287-.27-2.207-.584-2.99a6.927 6.927 0 00-1.375-2.137c-.667-.667-1.34-1.071-2.137-1.375-.783-.314-1.703-.527-2.99-.584C15.668.012 15.264 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.868 9.868 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149 4.916 4.916 0 003.195 9.723 4.902 4.902 0 01.96 9.18v.062a4.918 4.918 0 003.946 4.827 4.903 4.903 0 01-2.212.084 4.917 4.917 0 004.588 3.417 9.868 9.868 0 01-6.102 2.105c-.396 0-.787-.023-1.175-.068A13.945 13.945 0 007.548 21c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 mx-6"></div>
      <div className="max-w-7xl mx-auto mt-6 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="text-orange-500 font-semibold">WarmPaws</span>. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Made with ❤️ by <span className="text-orange-500">Your Name</span>
        </p>
      </div>

      {/* Decorative Gradient Line */}
      <div className="mt-8 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full w-3/4 mx-auto"></div>
    </footer>
  );
}
