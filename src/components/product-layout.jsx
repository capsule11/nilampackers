import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Hero from "./hero";
import { Link } from "react-router-dom";

const ProductLayout = ({
  productName,
  productImage,
  productDescription,
  specifications,
  features,
  relatedProducts,
}) => {
  return (
    <div className="flex-grow pt-16">
      <Hero title={productName} description={productDescription} />

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={productImage}
                alt={productName}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">
                Product Specifications
              </h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-gray-200 pb-2"
                  >
                    <span className="font-medium text-gray-600">
                      {spec.label}
                    </span>
                    <span className="text-gray-800">{spec.value}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="p-6 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <ChevronRight className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">
            Related Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product, index) => (
              <div
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg bg-white"
              >
                <div className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">
                      {product.name}
                    </h3>
                    <Link
                      variant="outline"
                      className="w-full hover:bg-blue-100 hover:text-blue-700 flex justify-center items-center gap-2 p-3 rounded-lg border mt-5"
                      to={`/products/${product.name}`}
                    >
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLayout;
