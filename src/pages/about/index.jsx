"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Award, Heart, Users } from "lucide-react";
import { teamMembers, milestones } from "./aboutData";

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: <Target className="h-10 w-10 text-[#1d5d7b]" />,
      title: "Innovation",
      description:
        "We continuously explore new technologies and approaches to improve our packaging solutions.",
    },
    {
      icon: <Award className="h-10 w-10 text-[#1d5d7b]" />,
      title: "Quality",
      description:
        "We maintain the highest standards in materials, design, and manufacturing processes.",
    },
    {
      icon: <Heart className="h-10 w-10 text-[#1d5d7b]" />,
      title: "Sustainability",
      description:
        "We are committed to environmentally responsible practices throughout our operations.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#1d5d7b]" />,
      title: "Collaboration",
      description:
        "We work closely with our clients to understand their needs and develop tailored solutions.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-16">
        {/* Our Story Section */}
        <section className="relative py-20 bg-[#EAF8FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Story
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Founded in 2005, BoxCraft has grown from a small packaging
                  workshop to an industry leader in innovative corrugated
                  packaging solutions.
                </p>
                <p className="text-xl text-gray-600 mb-6">
                  Our journey began with a simple mission: to create packaging
                  that not only protects products but also enhances brand
                  experiences while minimizing environmental impact.
                </p>
                <p className="text-xl text-gray-600">
                  Today, we serve clients across industries with custom
                  packaging solutions that combine cutting-edge technology,
                  sustainable materials, and creative design.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* <img src="/placeholder.svg" alt="Facility" width={800} height={600} className="rounded-3xl shadow-2xl" /> */}
                <div className="relative">
                  <div className="lg:w-[600px] lg:h-[400px] absolute inset-0 bg-[#D0EDFA] bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-3xl transform -rotate-6"></div>
                  <img
                    src="https://placehold.co/800x600/png"
                    alt="Innovative Packaging"
                    width={800}
                    height={600}
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-xl text-gray-600">
                We're driven We're driven by a commitment to excellence,
                innovation, and sustainability in everything we do.by a
                commitment to excellence and sustainability.
              </p>
            </div>
            <div className="mb-16">
              <div className="bg-gradient-to-r from-[#1F5F7E] to-[#1F5F7E] text-white rounded-3xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Our Mission
                  </h3>
                  <p className="text-xl opacity-90">
                    To provide innovative, sustainable packaging solutions that
                    protect products, enhance brands, and minimize environmental
                    impact while exceeding our customers' expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-full hover:shadow-lg transition-all duration-300 group">
                    <div className="p-6 text-center">
                      <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                Key milestones that have shaped BoxCraft's growth and evolution
                over the years.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col`}
                  >
                    <div className="md:w-1/2 flex md:justify-end md:pr-8 md:pl-0 pl-8 mb-4 md:mb-0">
                      <div
                        className={`bg-white rounded-xl shadow-lg p-6 max-w-md ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        } text-left`}
                      >
                        <div className="text-blue-600 font-bold text-2xl mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                      <div className="h-8 w-8 rounded-full bg-blue-600 border-4 border-white"></div>
                    </div>

                    <div className="md:w-1/2 md:pl-8 md:pr-0 pr-8"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Meet the professionals guiding our vision and operations.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto px-4">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500"
                  style={{
                    transform: `translateX(-${activeTestimonial * 100}%)`,
                  }}
                >
                  {teamMembers.map((member, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
                        <div className="md:w-1/3 relative h-80 md:h-full">
                          <img
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-8">
                          <h3 className="text-2xl font-semibold mb-1 text-gray-900">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 font-medium mb-4">
                            {member.role}
                          </p>
                          <p className="text-gray-600 mb-6">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center space-x-2 mt-8">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeTestimonial === index
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

