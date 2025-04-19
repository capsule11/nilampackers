import React from "react";
import { ChevronRight, Filter } from "lucide-react";
import products from "../../data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductPage = () => {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleRadio = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = React.useMemo(() => {
    return products.filter(
      (product) =>
        (selectedCategory === "all" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedCategory, searchTerm]);

  return (
    <main className="flex-grow pt-16">
      <section className="relative py-20 bg-[#2D799E] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute right-0 top-0 h-full w-1/2 translate-x-1/2 transform text-blue-700 opacity-20"
            fill="none"
            viewBox="0 0 400 400"
          >
            <defs>
              <pattern
                id="boxpattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-blue-800"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#boxpattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl opacity-90 mb-8"
            >
              Discover our comprehensive range of packaging solutions designed
              to protect, present, and deliver your products with excellence.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4">
              <div className="sticky top-24">
                <div className="bg-gray-50 hover:bg-gray-200 p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <button
                      size="sm"
                      onClick={() => setFilterOpen(!filterOpen)}
                      className="md:hidden"
                    >
                      <Filter className="h-5 w-5" />
                    </button>
                  </div>
                  <div
                    className={`${filterOpen ? "block" : "hidden"} md:block`}
                  >
                    <div className="mb-4 flex flex-col">
                      <label
                        htmlFor="search"
                        className="text-sm font-medium text-gray-700"
                      >
                        Search
                      </label>
                      <input
                        type="text"
                        id="search"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mt-1 border p-3 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="all"
                            name="prd"
                            id="all"
                            onChange={handleRadio}
                            checked={selectedCategory === "all"}
                          />
                          <label htmlFor="all">All Products</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="boxes"
                            id="boxes"
                            name="prd"
                            onChange={handleRadio}
                            checked={selectedCategory === "boxes"}
                          />
                          <label htmlFor="boxes">Boxes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="rolls"
                            id="rolls"
                            name="prd"
                            onChange={handleRadio}
                            checked={selectedCategory === "rolls"}
                          />
                          <label htmlFor="rolls">Rolls</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="sheets"
                            id="sheets"
                            name="prd"
                            onChange={handleRadio}
                            checked={selectedCategory === "sheets"}
                          />
                          <label htmlFor="sheets">Sheets & Pads</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="tapes"
                            id="tapes"
                            name="prd"
                            onChange={handleRadio}
                            checked={selectedCategory === "tapes"}
                          />
                          <label htmlFor="tapes">Tapes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="films"
                            id="films"
                            name="prd"
                            onChange={handleRadio}
                            checked={selectedCategory === "films"}
                          />
                          <label htmlFor="films">Films</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="custom"
                            id="custom"
                            name="prd"
                            onChange={handleRadio}
                            checked={selectedCategory === "custom"}
                          />
                          <label htmlFor="custom">Custom Solutions</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="md:w-3/4">
              <div className="h-[calc(100vh-14rem)] overflow-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg text-black overflow-hidden hover:shadow-lg transition-shadow duration-300 border"
                    >
                      <div className="p-0">
                        <img
                          // src="./Image/img.png"
                          src={product.image}
                          loading="lazy"
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-full p-4"
                        />
                        <div className="p-4 my-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {product.name}
                          </h3>
                          <Link
                            className="w-full flex p-2 rounded-lg justify-center items-center text-black bg-gray-100 mt-3"
                            to={product.name}
                          >
                            Learn More <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-600">
              Can't find exactly what you're looking for? Our team can create
              custom packaging solutions tailored to your specific requirements.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Custom Packaging Services
                </h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Custom sizes and structures to fit your products perfectly
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Brand-focused design and printing options
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Sustainable and eco-friendly material options
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Prototyping and sample creation before production
                    </p>
                  </li>
                </ul>
                <button
                  size="sm"
                  className="hidden md:inline-flex px-4 py-2 bg-black rounded-lg text-white hover:bg-black border border-gray-200"
                >
                  Request a Custom Quote
                </button>
              </div>
              <div className="relative hidden md:block">
                <img
                  src="https://placehold.co/800x600/png"
                  alt="Custom Packaging Design"
                  width={800}
                  height={600}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
