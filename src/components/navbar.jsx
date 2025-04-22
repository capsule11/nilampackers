import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const location = useLocation()
  console.log(location);


  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : location.pathname === '/' ? "bg-[#4E606B] py-2" : "bg-[#2D799E] py-2"
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex justify-center items-center gap-1">
              <img src={scrolled ? "./Image/icon_light.png" : "./Image/icon_dark.png"} width={60} height={60} />
              <span className="sr-only">Nilam Packers</span>
              <div
                className={`text-2xl font-bold ${scrolled ? "text-black" : "text-white"
                  }`}
              >
                Nilam Packers
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-base font-medium ${scrolled ? "text-gray-700" : "text-white"
                } ${scrolled ? 'hover:text-blue-600' : 'hover:underline'}`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-base font-medium ${scrolled ? "text-gray-700" : "text-white"
                } ${scrolled ? 'hover:text-blue-600' : 'hover:underline'}`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium ${scrolled ? "text-gray-700" : "text-white"
                } ${scrolled ? 'hover:text-blue-600' : 'hover:underline'}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-base font-medium ${scrolled ? "text-gray-700" : "text-white"
                } ${scrolled ? 'hover:text-blue-600' : 'hover:underline'}`}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <button
              size="sm"
              className="hidden md:inline-flex px-4 py-2 bg-white rounded-lg hover:bg-gray-200/90 border border-gray-200"
            >
              Get a Quote
            </button>
            <button
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu
                className={`h-6 w-6 ${scrolled ? "text-gray-700" : "text-white"
                  }`}
              />
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-blue-900 bg-opacity-90">
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-sm">
              <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                    <button
                      size="icon"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <X className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div
                      className="h-full flex flex-col gap-y-6"
                      aria-hidden="true"
                    >
                      <Link
                        to="/"
                        className="text-base font-medium text-gray-900 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        to="/products"
                        className="text-base font-medium text-gray-900 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Products
                      </Link>
                      <Link
                        to="/about"
                        className="text-base font-medium text-gray-900 hover:text-blue-600"
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="text-base font-medium text-gray-900 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
