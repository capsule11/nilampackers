import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const products = [
    {
      name: "Custom Boxes",
      image: "/placeholder.svg?height=200&width=300",
      description: "Tailored to your exact specifications",
    },
    {
      name: "Eco-Friendly Packaging",
      image: "/placeholder.svg?height=200&width=300",
      description: "Sustainable solutions for conscious brands",
    },
    {
      name: "Retail Packaging",
      image: "/placeholder.svg?height=200&width=300",
      description: "Stand out on the shelves",
    },
    {
      name: "Shipping Supplies",
      image: "/placeholder.svg?height=200&width=300",
      description: "Ensure safe delivery every time",
    },
  ];

  const partners = [
    { name: "EcoMaterials Inc.", logo: "/placeholder.svg?height=75&width=150" },
    { name: "LogisticsPro", logo: "/placeholder.svg?height=75&width=150" },
    {
      name: "PackTech Solutions",
      logo: "/placeholder.svg?height=75&width=150",
    },
    {
      name: "Sustainable Packaging Alliance",
      logo: "/placeholder.svg?height=75&width=150",
    },
  ];
  return (
    <main className="flex-grow">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden min-h-[60dvh] xl:min-h-[80dvh] 2xl:min-h-[100dvh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Packaging Solutions for the Modern World
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-lg">
                Innovative, sustainable, and customized corrugated packaging to
                elevate your brand and protect your products.
              </p>
              <div className="w-full font-semibold flex space-x-4 lg:m-24">
                <button className="bg-white text-blue-600 hover:bg-blue-100 p-3 rounded-lg">
                  Explore Products
                </button>
                <button className="bg-white text-blue-600 hover:bg-blue-100 p-3 rounded-lg">
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="lg:w-[600px] lg:h-[400px] absolute inset-0 bg-blue-200 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl transform rotate-6"></div>
              <img
                src="https://placehold.co/600x400/png"
                alt="Innovative Packaging"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#EBF8FF"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg text-blue-500 overflow-hidden border"
              >
                <div className="p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <img
                      src={"https://placehold.co/400x300/png"}
                      // src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    className="w-full flex p-2 rounded-lg justify-center items-center text-black bg-gray-100 mt-3"
                    to={product.name}
                  >
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-blue-800">
                Why Choose BoxCraft?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-500">
                      Custom Solutions
                    </h3>
                    <p className="text-gray-600">
                      Tailored packaging designs to meet your unique
                      requirements and enhance your brand identity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-500">
                      Sustainability Focus
                    </h3>
                    <p className="text-gray-600">
                      Eco-friendly materials and processes to reduce
                      environmental impact without compromising quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-500">
                      Cutting-edge Technology
                    </h3>
                    <p className="text-gray-600">
                      State-of-the-art manufacturing facilities ensuring
                      precision, efficiency, and consistent quality.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-8 bg-blue-500 text-white flex justify-center items-center gap-1 p-3 rounded-lg font-semibold">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 transform -rotate-6 rounded-3xl"></div>
              <img
                src="https://placehold.co/600x400/png"
                alt="BoxCraft Facility"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={"https://placehold.co/150x75/png"}
                  alt={partner.name}
                  width={150}
                  height={75}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
