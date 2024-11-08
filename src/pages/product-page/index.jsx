import React from "react";
import { ChevronRight, Filter } from "lucide-react";
import products from "../../data/products";
import Hero from "../../components/hero";
import { Link } from "react-router-dom";

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
      <Hero
        title={"Our Products"}
        description={
          "Discover our wide range of packaging solutions designed to protect, present, and deliver your products with excellence."
        }
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-lg shadow-md">
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
                      className="bg-white rounded-lg text-blue-500 overflow-hidden hover:shadow-lg transition-shadow duration-300 border"
                    >
                      <div className="p-0">
                        <img
                          // src={product.image}
                          src={"https://placehold.co/400x300/png"}
                          loading="lazy"
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
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
    </main>
  );
};

export default ProductPage;
