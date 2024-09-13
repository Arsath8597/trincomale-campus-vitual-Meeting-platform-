import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-5 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Trincomalee Campus</h3>
          <p className="text-gray-400">
          opportunities, and practical skills relevant to its 
            respective field, contributingmotion.  to the overall academic 
            diversity 
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <span className="block">Email: <a href="mailto:trincomaleecampus@gmail.com" className="hover:text-gray-300">info@yourcompany.com</a></span>
            </li>
            <li>
              <span className="block">Phone: <a href="tel:+1234567890" className="hover:text-gray-300">+123 456 7890</a></span>
            </li>
            <li>
              <span className="block">Address: 1234 Street ,trincomalee City, Srilanka</span>
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin fa-lg"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram fa-lg"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
