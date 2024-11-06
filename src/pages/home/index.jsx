import React from "react";

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
    // <main className="flex-grow">
    //   <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden min-h-[60dvh] xl:min-h-[80dvh] 2xl:min-h-[100dvh]">
    //     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    //       <div className="grid lg:grid-cols-2 gap-12 items-center">
    //         <div className="space-y-8">
    //           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
    //             Packaging Solutions for the Modern World
    //           </h1>
    //           <p className="text-xl md:text-2xl font-light max-w-lg">
    //             Innovative, sustainable, and customized corrugated packaging to
    //             elevate your brand and protect your products.
    //           </p>
    //           <div className="flex space-x-4">
    //             <button
    //               size="lg"
    //               className="bg-white text-blue-600 hover:bg-blue-100"
    //             >
    //               Explore Products
    //             </button>
    //             <button
    //               size="lg"
    //               variant="outline"
    //               className="text-white border-white hover:bg-blue-700"
    //             >
    //               Get in Touch
    //             </button>
    //           </div>
    //         </div>
    //         <div className="relative">
    //           <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl transform rotate-6"></div>
    //           <image
    //             src="/placeholder.svg?height=400&width=600"
    //             alt="Innovative Packaging"
    //             width={600}
    //             height={400}
    //             className="relative rounded-3xl shadow-2xl"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="absolute bottom-0 left-0 right-0">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 1440 320"
    //         className="w-full h-auto"
    //       >
    //         <path
    //           fill="#EBF8FF"
    //           fillOpacity="1"
    //           d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    //         ></path>
    //       </svg>
    //     </div>
    //   </section>
    // </main>
    <div className="flex flex-col min-h-screen bg-blue-50">
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden min-h-[60dvh] xl:min-h-[80dvh] 2xl:min-h-[100dvh]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                  Packaging Solutions for the Modern World
                </h1>
                <p className="text-xl md:text-2xl font-light max-w-lg">
                  Innovative, sustainable, and customized corrugated packaging
                  to elevate your brand and protect your products.
                </p>
                <div className="flex space-x-4 m-24">
                  <button className="bg-white text-blue-600 hover:bg-blue-100 p-3 rounded-lg">
                    Explore Products
                  </button>
                  <button className="bg-white text-blue-600 hover:bg-blue-100 p-3 rounded-lg">
                    Get in Touch
                  </button>
                </div>
              </div>
              <div className="relative overflow-auto lg:overflow-visible">
                <div className="absolute inset-0 bg-blue-200 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl transform rotate-6"></div>
                <img
                  src="https://placehold.co/600x400/png"
                  alt="Innovative Packaging"
                  width={700}
                  height={300}
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
      </main>
    </div>
  );
};

export default Home;
