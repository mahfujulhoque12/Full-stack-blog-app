import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-300 via-green-400 to-green-600 text-white py-16">
      {/* Container for main footer content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Logo + About Section */}
        <div>
          <h2 className="text-5xl font-extrabold text-green-100 mb-4">NatureSite</h2>
          <p className="text-green-200 leading-relaxed mb-6">
            Reconnect with the Earth. Discover the beauty of nature through immersive experiences, captivating landscapes, and the wildlife that inhabits it.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-semibold text-green-100 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-green-200 transition duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-green-200 transition duration-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-200 transition duration-300">Contact</a></li>
            <li><a href="/blog" className="hover:text-green-200 transition duration-300">Blog</a></li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div>
          <h3 className="text-2xl font-semibold text-green-100 mb-4">Stay Connected</h3>
          <p className="text-green-200 mb-6">Stay updated with the latest news from the heart of nature. Subscribe to our newsletter for updates, tips, and more!</p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-lg border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white py-2 rounded-lg hover:scale-105 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

 

      {/* Bottom Line */}
      <div className="border-t border-green-400 mt-10 pt-6 text-center text-green-200 text-sm">
        © {new Date().getFullYear()} NatureSite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
