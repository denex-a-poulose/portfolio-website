import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Collaborate = () => {
  return (
    <div id="collaborate" className="text-white max-w-screen-xl mx-auto py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div>
          <h2 className="md:text-7xl text-3xl font-semibold text-white mb-4">
            Let's <br /> Collaborate
          </h2>
          <p className="text-gray-400 text-2xl mb-6">Let's have a chat —</p>
        </div>
        <div className="relative w-52 h-52 group">
          <Link href="mailto:denex8online@gmail.com">
            <div
              className="w-full h-full rounded-full bg-gradient-to-t from-gray-800 to-gray-600 flex items-center justify-center
           transform group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300 ease-in-out"
            >
              <FiArrowUpRight className="text-white text-2xl transform group-hover:scale-125 transition-transform duration-300 ease-in-out" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
