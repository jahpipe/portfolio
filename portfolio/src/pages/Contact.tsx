const Contact = () => (
  <section
    id="contact"
    className="min-h-screen bg-gray-900 text-white px-6 py-20 flex items-center justify-center"
  >
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Left Side - Contact Info */}
      <div className="space-y-6">
        <h2 className="text-4xl font-extrabold border-b-4 border-indigo-500 inline-block pb-2 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-lg">
          Feel free to reach out to me via email or phone. I'm always open to discussing new opportunities, collaboration, or just having a chat about tech.
        </p>
        <div className="space-y-2 mt-6">
          <p className="text-lg">
            📧 <span className="text-indigo-400">Email:</span>{" "}
            <a href="mailto:jovaniemoreno420@gmail.com" className="hover:underline">jovaniemoreno420@gmail.com</a>
          </p>
          <p className="text-lg">
            📞 <span className="text-indigo-400">Phone:</span>{" "}
            <a href="tel:+69207277065" className="hover:underline">(+69) 920 727 7065</a>
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <form 
        action="https://formsubmit.co/jovaniemoreno420@gmail.com" 
        method="POST"
        className="bg-gray-800 p-8 rounded-xl shadow-xl space-y-6"
      >
        {/* Disable CAPTCHA */}
        <input type="hidden" name="_captcha" value="false" />
        
        <div>
          <label htmlFor="name" className="block text-sm mb-1 text-gray-200">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1 text-gray-200">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1 text-gray-200">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 transition-colors w-full py-3 rounded-md text-white font-semibold text-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
