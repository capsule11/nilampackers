import React, { useState } from "react";
import { Menu, X, Send } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    requirements: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormData({
      name: "",
      email: "",
      mobile: "",
      requirements: "",
      city: "",
    });
    setIsSubmitting(false);
    toast.success("We will get back to you soon!");
  };
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              Have a question or need a custom packaging solution? We're here to
              help. Reach out to us and let's create something amazing together.
            </p>
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

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-lg bg-white rounded-lg shadow-lg">
              <div className="p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleinputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleinputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mobile">Mobile</label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.mobile}
                        onChange={handleinputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="city">City</label>
                      <input
                        id="city"
                        name="city"
                        placeholder="New York"
                        value={formData.city}
                        onChange={handleinputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="requirements">Requirements</label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      placeholder="Tell us about your packaging needs..."
                      value={formData.requirements}
                      onChange={handleinputChange}
                      required
                      className="min-h-[100px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">
                Visit Our Office
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We'd love to meet you in person. Drop by our office to discuss
                your packaging needs or just to say hello!
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                    <span className="sr-only">Address</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-700">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      1234 Packaging Lane, Boxville, BX 56789
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                    <span className="sr-only">Phone</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-700">
                      Phone
                    </h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                    <span className="sr-only">Email</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-700">
                      Email
                    </h3>
                    <p className="text-gray-600">info@boxcraft.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 transform -rotate-6 rounded-3xl"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1008.3308431407363!2d82.82111933171905!3d25.27650089331553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730570051241!5m2!1sen!2sin"
                width="600"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="relative rounded-3xl shadow-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
