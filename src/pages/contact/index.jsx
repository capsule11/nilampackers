import { useState } from "react";
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    requirements: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const offices = [
    {
      name: "Office & Manufacturing Unit",
      address: "Village Mahendiganj, Saidapar, P.O.: Rajatalab, Varanasi - 221311",
      phone: "+91 9839145898, +91 9984444074",
      email: "nilampackers@gmail.com",
      hours: "Monday - Friday: 11:00 AM - 5:00 PM",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setFormSubmitted(true);
          setTimeout(() => setFormSubmitted(false), 5000);
          setFormData({
            name: "",
            email: "",
            mobile: "",
            requirements: "",
            city: "",
          });
        },
        (error) => {
          console.error(error.text);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="flex-grow pt-16">
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl opacity-90 mb-8"
            >
              Have questions or need a custom packaging solution? We're here to
              help. Reach out to our team and we'll get back to you as soon as
              possible.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours. We're excited to learn about your packaging needs and
                how we can help.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                >
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to
                    you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col justify-center items-start">
                      <label htmlFor="name" className="font-semibold">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleinputChange}
                        required
                        className="w-full p-2 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2 flex flex-col justify-center items-start">
                      <label htmlFor="email" className="font-semibold">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleinputChange}
                        required
                        className="w-full p-2 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2 flex flex-col justify-center items-start">
                      <label htmlFor="mobile" className="font-semibold">
                        Mobile
                      </label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        placeholder="Enter Your Mobile Number"
                        value={formData.mobile}
                        onChange={handleinputChange}
                        required
                        className="w-full p-2 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2 flex flex-col justify-center items-start">
                      <label htmlFor="city" className="font-semibold">
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        placeholder="Enter Your City"
                        value={formData.city}
                        onChange={handleinputChange}
                        required
                        className="w-full p-2 border border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 flex flex-col justify-center items-start">
                    <label htmlFor="requirements" className="font-semibold">
                      Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      placeholder="Tell us about your packaging needs..."
                      value={formData.requirements}
                      onChange={handleinputChange}
                      required
                      className="p-2 w-full min-h-[100px] max-h-[300px] border border-gray-200 rounded-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1d5d7b] hover:bg-[#1d5d7be3] text-white flex justify-center items-center gap-2 p-3 rounded-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Offices
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We would love to meet you in person. Drop by our office to
                discuss your packaging needs or just to say hello!
              </p>
              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="overflow-hidden hover:shadow-lg shadow-md transition-all duration-300"
                  >
                    <div className="relative h-56">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1533.7354257916766!2d82.82022446144519!3d25.277094845747623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1743765990530!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: 10 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                        {office.name}
                      </h3>
                      <div className="space-y-3 text-gray-600">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-[#1d5d7b] mr-3 mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-[#1d5d7b] mr-3 flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-[#1d5d7b] mr-3 flex-shrink-0" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-[#1d5d7b] mr-3 flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EAF8FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Find quick answers to common questions about our packaging
              solutions and services.
            </p>

            <div className="space-y-6 text-left">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  What are your minimum order quantities?
                </h3>
                <p className="text-gray-600">
                  Our minimum order quantities vary by product type. For
                  standard corrugated boxes, our minimum is typically 100 units,
                  while custom printed packaging may require a minimum of
                  250-500 units. Please contact us for specific product
                  minimums.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  How long does it take to receive a custom order?
                </h3>
                <p className="text-gray-600">
                  Production time for custom orders typically ranges from 2-4
                  weeks depending on complexity, quantity, and current
                  production schedule. Rush orders may be available for an
                  additional fee, subject to capacity.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Do you offer design services?
                </h3>
                <p className="text-gray-600">
                  Yes, our in-house design team can help create custom packaging
                  solutions tailored to your specific needs. We offer structural
                  design, graphic design, and prototyping services to ensure
                  your packaging meets both functional and aesthetic
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
