import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Package,
  Recycle,
  Shield,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { ExpandableCardDemo } from "./card";
import { Link } from "react-router-dom";
import { getWhyChooseUsImg } from "../../sanity-client/queries/homepage";


const Home = () => {
  const [whyChooseUsImg, setWhyChooseUsImg] = useState('')
  console.log(whyChooseUsImg);

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    (async () => {
      const data = await getWhyChooseUsImg()
      setWhyChooseUsImg(data)
    })()
  }, [])

  return (
    <main className="flex-grow">
      <section className="bg-[url(./Image/nilampackersbg.png)] bg-cover bg-center h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#4E606B]"> */}
        {/* <div className="relative z-[9999] flex items-center justify-center h-full"> */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Packaging <span className="text-[#7CC1E3]">Reimagined</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mt-6 text-xl md:text-2xl font-semibold"
            >
              Innovative, sustainable, and customized corrugated packaging
              solutions for the modern world.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to={'/products'}
                size="sm"
                className="hidden md:inline-flex px-4 py-2 text-blue-600 bg-white rounded-lg hover:bg-gray-200/90 border border-gray-200"
              >
                Explore Products
              </Link>
              <Link
                to={'/contact'}
                size="sm"
                className="hidden md:inline-flex px-4 py-2 bg-white rounded-lg text-blue-600 hover:bg-gray-200/90 border border-gray-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
              className="text-white flex flex-col items-center"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </button>
          </motion.div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </section>

      <section className="py-20 bg-(#ebf8ff)">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packaging Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-600">
              Discover our wide range of high-quality packaging products
              designed to protect, present, and deliver your products with
              excellence.
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg text-black-500 overflow-hidden border h-[27rem] flex flex-col justify-between items-center"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="./Image/img.png"                   // src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="px-6 flex flex-col justify-center items-center w-full">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    className="w-full flex p-2 rounded-lg justify-center items-center text-white bg-[#1D5D7B] mt-auto mb-4"
                    to={product.name}
                  >
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div> */}
          <ExpandableCardDemo />




          <div className="mt-16 text-center justify-self-center">
            <Link to={'/products'} className="mt-8 bg-[#1D5D7B] text-white flex justify-center items-center gap-1 p-3 rounded-lg f   font-semibold">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black-800">
                Why Choose Nilam Packers?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                At Nilam Packers, we combine innovative design, sustainable
                materials, and cutting-edge technology to deliver packaging
                solutions that exceed expectations.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Package className="h-6 w-6 text-[#1d5d7b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Custom Solutions
                    </h3>
                    <p className="text-gray-600">
                      Tailored packaging designs to meet your unique
                      requirements and enhance your brand identity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Recycle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Sustainability Focus
                    </h3>
                    <p className="text-gray-600">
                      Eco-friendly materials and processes to reduce
                      environmental impact without compromising quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Truck className="h-6 w-6 text-[#1d5d7b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Reliable Delivery
                    </h3>
                    <p className="text-gray-600">
                      On-time production and delivery to keep your supply chain
                      running smoothly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-[#1d5d7b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      Rigorous testing and quality control to ensure every
                      product meets our high standards.
                    </p>
                  </div>
                </div>
              </div>

              <Link to={'/about'} className="mt-8 bg-[#1D5D7B] text-white flex justify-center items-center gap-1 p-3 rounded-lg font-semibold">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="lg:w-[600px] lg:h-[600px] absolute inset-0 bg-[#a0d7f0] bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl transform -rotate-6"></div>
              <img
                src={whyChooseUsImg}
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl opacity-90">
              Don't just take our word for it. Here's what our clients have to
              say about working with BoxCraft.
            </p>
          </div>
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

      <section className="py-24 bg-gradient-to-r from-[#2C789D] to-[#13435C] text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[rgba(255,255,255,0.4)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[8.5px] rounded-[10px] border border-[rgba(255,255,255,0.18)] p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center"></div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Elevate Your Packaging?
                </h2>
                <p className="text-xl opacity-90 mb-6">
                  Let's create packaging solutions that protect your products
                  and elevate your brand.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-blue-300" />
                    <span>Custom design and prototyping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-blue-300" />
                    <span>Sustainable and eco-friendly options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-blue-300" />
                    <span>Fast turnaround times</span>
                  </li>
                </ul>
                <Link
                  to={'/contact'}
                  size="lg"
                  className="hidden md:inline-flex px-4 py-2 bg-white rounded-lg text-black hover:bg-[#dfeaf0] border border-gray-200"
                >
                  Get Your Free Quote Today
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
