import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../../components/hero";
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

  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

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
          toast.success("We will get back to you soon!");
        },
        (error) => {
          toast.error("Unable to send your message", error.text);
          console.log(error);
        }
      );
  };

  return (
    <div className="flex-grow pt-16">
      <Hero
        title={"Get in Touch"}
        description={`Have a question or need a custom packaging solution? We&apos;re
              here to help. Reach out to us and let&apos;s create something
              amazing together.`}
      />

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="backdrop-blur-lg bg-white rounded-lg shadow-lg">
              <div className="p-6 md:p-10">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col justify-center items-start">
                      <label htmlFor="name" className="font-semibold">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
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
                        placeholder="+1 (555) 123-4567"
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
                        placeholder="New York"
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex justify-center items-center gap-2 p-3 rounded-lg font-semibold"
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
                We&apos;d love to meet you in person. Drop by our office to
                discuss your packaging needs or just to say hello!
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
            <div className="relative overflow-auto lg:overflow-visible">
              <div className="absolute inset-0 bg-blue-200 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl transform rotate-6"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1008.3308431407363!2d82.82111933171905!3d25.27650089331553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730570051241!5m2!1sen!2sin"
                width="710"
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
