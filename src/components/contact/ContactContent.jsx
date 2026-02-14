import React, { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { FadeInUp } from "../common/Motion";

import { siteConfig } from "../../config/siteConfig";

const ContactInfoCard = (
  { icon: Icon, title, content, subContent }, // eslint-disable-line no-unused-vars
) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-secondary/10 p-3 rounded-lg text-secondary flex-shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-600 font-medium">{content}</p>
      {subContent && <p className="text-gray-500 text-sm mt-1">{subContent}</p>}
    </div>
  </div>
);

const ContactContent = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", siteConfig.contact.web3FormsKey || "YOUR_ACCESS_KEY_HERE");
    formData.append("from_name", `${siteConfig.brandName} Website`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        setResult("Failed to send message. Try again.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <section className="py-20 bg-gray-50 -mt-10 relative z-20 rounded-t-[3rem]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Info & Map */}
          <FadeInUp className="space-y-8" delay={0.2}>
            {" "}
            {/* Wrapped with FadeInUp */}
            <div className="space-y-4">
              <ContactInfoCard
                icon={MapPin}
                title="Visit Our Office"
                content={siteConfig.contact.address}
                subContent="Ghaziabad, Uttar Pradesh"
              />
              <ContactInfoCard
                icon={Phone}
                title="Call Us Anytime"
                content={siteConfig.contact.phone[0].number}
                subContent="Mon-Sun from 10am to 7pm"
              />
              <ContactInfoCard
                icon={Mail}
                title="Email Support"
                content={siteConfig.contact.email[0].address}
                subContent="We typically reply within 24 hours"
              />
            </div>
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 w-full overflow-hidden shadow-inner relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.356455209765!2d77.4262145!3d28.6720055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c55555%3A0x84b2c86466f27221!2sRaj%20Nagar%20Extension%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1625638423456!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </FadeInUp>

          {/* Right Column: Form */}
          <FadeInUp
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-8 border-secondary"
            delay={0.4}
          >
            {" "}
            {/* Wrapped with FadeInUp */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-500">
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="your name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    placeholder="+91 98765..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  I'm interested in
                </label>
                <select
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-gray-600"
                >
                  <option value="Buying Property">Buying Property</option>
                  <option value="Selling Property">Selling Property</option>
                  <option value="Renting">Renting</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  placeholder="Tell us more about your requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
              {result && (
                <div
                  className={`mt-4 text-center p-3 rounded-lg font-medium animate-fade-in ${result.includes("Success") ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                >
                  {result}
                </div>
              )}
            </form>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
