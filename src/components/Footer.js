import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaCodepen, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-b from-[#060608] to-[#1a1a1d] text-white">
      <div className="max-w-screen-xl mx-auto py-12 px-5">
        {/* Top Section */}
        <div className="flex flex-wrap flex-col gap-6 md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/denex-a-poulose"
              title="GitHub"
              className="text-gray-400 hover:text-white text-2xl transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/denex-a-poulose-024b72267"
              title="LinkedIn"
              className="text-gray-400 hover:text-white text-2xl transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://codepen.io/Denex-A-Poulose"
              title="CodePen"
              className="text-gray-400 hover:text-white text-2xl transition transform hover:scale-110"
            >
              <FaCodepen />
            </a>
            <a
              href="https://x.com/denexapoulose/"
              title="X"
              className="text-gray-400 hover:text-white text-2xl transition transform hover:scale-110"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/denexapoulose/"
              title="Instagram"
              className="text-gray-400 hover:text-white text-2xl transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Get In Touch"
              aria-label="Contact input"
              className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none w-64 md:w-80 border border-gray-600"
            />
            <button
              aria-label="Submit message"
              className="bg-gray-700 hover:bg-gray-600 rounded-r-full p-3"
            >
              <FiArrowRight className="text-white text-xl" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-0.5 bg-gray-400"></div>
            <Link href="/" title="Homepage" className="text-lg font-semibold ">
              DENEX
            </Link>
          </div>
          {/* Copyright */}
          <div className="mt-5 md:mt-0 text-center md:text-right">
            <p>© {currentYear} Denex A Poulose</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
