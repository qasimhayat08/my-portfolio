import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'qasimhayat08@gmail.com',
      link: 'mailto:qasimhayat08@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '03254720564',
      link: 'tel:+03254720564',
    },
     {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Account Link',
      link: 'https://github.com/qasimhayat8',
      label: 'GitHub',
    },
  ];

  const socialLinks = [
    // {
    //   icon: <FaGithub />,
    //   link: 'https://github.com/qasimhayat8',
    //   label: 'GitHub',
    // },
    // {
    //   icon: <FaLinkedin />,
    //   link: 'https://linkedin.com/in/yourusername',
    //   label: 'LinkedIn',
    // },
    // {
    //   icon: <FaTwitter />,
    //   link: 'https://twitter.com/yourusername',
    //   label: 'Twitter',
    // },
    // {
    //   icon: <FaInstagram />,
    //   link: 'https://instagram.com/yourusername',
    //   label: 'Instagram',
    // },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-24 px-6 overflow-hidden"
    >
      {/* ================= ANIMATED BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>

        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1000ms' }}
        ></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>

      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <div className="inline-block mb-4">
            <span className="text-blue-400 uppercase tracking-[8px] text-sm font-mono bg-blue-400/10 px-6 py-2 rounded-full border border-blue-400/20">
              Get In Touch
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Connect
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Have a project in mind or want to collaborate? I'd love to hear
            from you!
          </p>

        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* ===================================================== */}
          {/* LEFT SIDE - CONTACT INFORMATION */}
          {/* ===================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >

            {/* Contact Info Card */}
            <motion.div variants={itemVariants}>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col items-center text-center">

                <h3 className="text-2xl font-bold text-white mb-4 sm:mb-6">
                  Contact Info
                </h3>

                <p className="text-gray-400 mb-6 sm:mb-8 max-w-md">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>

                {/* Contact Items */}
                <div className="space-y-4 w-full max-w-md">

                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="group flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-blue-500/20 w-full"
                    >

                      {/* Icon */}
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-xl text-blue-400 text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                        {info.icon}
                      </div>

                      {/* Text */}
                      <div className="text-left">

                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {info.label}
                        </p>

                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                          {info.value}
                        </p>

                      </div>

                    </a>
                  ))}

                </div>

                {/* ================= SOCIAL LINKS ================= */}
                {/* <div className="mt-8 pt-8 border-t border-white/10 w-full max-w-md">

                  <p className="text-sm text-gray-400 mb-4">
                    Connect with me on social media
                  </p>

                  <div className="flex gap-3 flex-wrap justify-center">

                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl hover:bg-blue-500 transition-all duration-300 text-gray-400 hover:text-white group"
                        aria-label={social.label}
                      >

                        <span className="group-hover:scale-110 transition-transform">
                          {social.icon}
                        </span>

                      </a>
                    ))}

                  </div>

                </div> */}

              </div>

            </motion.div>

            {/* ================= AVAILABILITY ================= */}
            <motion.div variants={itemVariants}>

              <div className="bg-green-500/10 backdrop-blur-xl rounded-3xl p-6 border border-green-500/20 text-center sm:text-left">

                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">

                  {/* Green Dot */}
                  <div className="relative">

                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>

                  </div>

                  {/* Availability Text */}
                  <div>

                    <p className="text-green-400 font-semibold">
                      Available for Freelance
                    </p>

                    <p className="text-gray-500 text-sm">
                      Open to new opportunities
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>


          {/* ===================================================== */}
          {/* RIGHT SIDE - IMAGE */}
          {/* ===================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >

            <motion.div
              variants={itemVariants}
              className="h-full"
            >

              <div className="relative h-full min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl group">

                {/* ================= IMAGE ================= */}
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Workspace"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* ================= DARK OVERLAY ================= */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* ================= BLUE/PURPLE OVERLAY ================= */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/20"></div>

                {/* ================= IMAGE CONTENT ================= */}
                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <div className="max-w-lg">

                    <span className="inline-block mb-3 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/20 text-blue-400 text-sm font-medium backdrop-blur-md">
                      Let's Work Together
                    </span>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      Turning Ideas Into Reality
                    </h3>

                    <p className="text-gray-300 leading-7">
                      Have an idea for your next project? Let's build
                      something amazing together.
                    </p>

                  </div>

                </div>

                {/* ================= DECORATIVE GLOW ================= */}

                <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>

                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;