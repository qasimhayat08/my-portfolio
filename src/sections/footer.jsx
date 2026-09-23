import React, { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaRocket,
  FaArrowRight,
  FaWhatsapp,
  FaTimes
} from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // ==============================
  // SCROLL TOP BUTTON
  // ==============================

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY > documentHeight * 0.5) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ==============================
  // SCROLL TO TOP
  // ==============================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // ==============================
  // WHATSAPP FUNCTION
  // ==============================

  const openWhatsApp = () => {
    const phoneNumber = '923254720564';

    const message = encodeURIComponent(
      'Hello! I visited your portfolio and would like to discuss a project with you.'
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(
      whatsappURL,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // ==============================
  // NAVIGATION ITEMS
  // ==============================

  const navItems = [
    {
      name: 'Home',
      id: 'home'
    },
    {
      name: 'About',
      id: 'about'
    },
    {
      name: 'Projects',
      id: 'projects'
    },
    {
      name: 'Contact',
      id: 'contact'
    }
  ];

  // ==============================
  // SOCIAL LINKS
  // ==============================

  const socialLinks = [
    {
      icon: FaFacebook,
      href: '#',
      label: 'Facebook'
    },
    {
      icon: FaTwitter,
      href: '#',
      label: 'Twitter'
    },
    {
      icon: FaInstagram,
      href: '#',
      label: 'Instagram'
    },
    {
      icon: FaLinkedin,
      href: '#',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="relative w-full bg-gray-950 text-white overflow-hidden">

      {/* ========================================= */}
      {/* TOP GRADIENT LINE */}
      {/* ========================================= */}

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>


      {/* ========================================= */}
      {/* MAIN FOOTER */}
      {/* ========================================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">


        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="text-center mb-10 sm:mb-12">

          <div className="inline-block">

            <div className="flex items-center gap-2 justify-center">

              <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></span>

              <FaRocket className="text-blue-400 text-xl sm:text-2xl" />

              <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></span>

            </div>


            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h2>


            <p className="text-gray-400 mt-2 text-xs sm:text-sm">
              Built with passion, designed for the future
            </p>

          </div>

        </div>


        {/* ========================================= */}
        {/* GRID */}
        {/* ========================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8 border-t border-b border-white/5">


          {/* ========================================= */}
          {/* BRAND */}
          {/* ========================================= */}

          <div className="text-center sm:text-left">

            <h3 className="text-2xl font-bold text-white mb-3">
              YourBrand
            </h3>


            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Transforming ideas into digital experiences that matter.
            </p>


            {/* SOCIAL LINKS */}

            {/* <div className="flex justify-center sm:justify-start gap-3 mt-4">

              {socialLinks.map((social, index) => {

                const SocialIcon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 text-gray-400 border border-white/5 hover:border-blue-500/30"
                  >
                    <SocialIcon size={18} />
                  </a>
                );

              })}

            </div> */}

          </div>


          {/* ========================================= */}
          {/* EXPLORE */}
          {/* ========================================= */}

          <div className="text-center sm:text-left">

            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
              Explore
            </h4>


            <ul className="space-y-2.5">

              {navItems.map((item) => (

                <li key={item.id}>

                  <a
                    href={`#${item.id}`}
                    className="group relative inline-flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-sm"
                  >

                    <FaArrowRight
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400 text-xs"
                    />


                    <span className="group-hover:translate-x-1.5 transition-all duration-300">
                      {item.name}
                    </span>

                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* ========================================= */}
          {/* CONTACT */}
          {/* ========================================= */}

          <div className="text-center sm:text-left">

            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
              Connect
            </h4>


          <ul className="space-y-3 text-sm">

  {/* EMAIL */}
  <li className="flex items-center justify-center sm:justify-start gap-3 text-gray-300">
    <FaEnvelope
      className="text-blue-400 flex-shrink-0"
      size={14}
    />

    <a
      href="mailto:qasimhayat08@gmail.com"
      className="break-all hover:text-blue-400 transition"
    >
      qasimhayat08@gmail.com
    </a>
  </li>


  {/* PHONE */}
  <li className="flex items-center justify-center sm:justify-start gap-3 text-gray-300">
    <FaPhone
      className="text-blue-400 flex-shrink-0"
      size={14}
    />

    <a
      href="tel:+03254720564"
      className="hover:text-blue-400 transition"
    >
      03254720564
    </a>
  </li>

</ul>

          </div>

        </div>

      </div>


      {/* ===================================================== */}
      {/* WHATSAPP FLOATING BUTTON - LEFT SIDE */}
      {/* ===================================================== */}

      <button
        onClick={() => setShowWhatsApp(true)}
        className="group fixed bottom-4 sm:bottom-8 left-4 sm:left-8 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >

        <FaWhatsapp
          className="group-hover:scale-110 transition-transform duration-300"
          size={22}
        />


        {/* TOOLTIP */}

        <span className="absolute -top-10 sm:-top-12 left-0 text-[10px] sm:text-xs bg-black/80 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          Chat on WhatsApp
        </span>

      </button>


      {/* ===================================================== */}
      {/* WHATSAPP POPUP */}
      {/* ===================================================== */}

      {showWhatsApp && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">


          {/* DARK OVERLAY */}

          <div
            onClick={() => setShowWhatsApp(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          ></div>


          {/* POPUP BOX */}

          <div className="relative w-full max-w-sm bg-gray-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">


            {/* ========================================= */}
            {/* POPUP HEADER */}
            {/* ========================================= */}

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-5">

              <div className="flex items-center justify-between">


                {/* WHATSAPP ICON + TITLE */}

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">

                    <FaWhatsapp
                      className="text-white"
                      size={27}
                    />

                  </div>


                  <div>

                    <h3 className="text-white font-bold text-lg">
                      WhatsApp
                    </h3>

                    <p className="text-green-100 text-xs">
                      Contact me directly
                    </p>

                  </div>

                </div>


                {/* CLOSE BUTTON */}

                <button
                  onClick={() => setShowWhatsApp(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                  aria-label="Close"
                >

                  <FaTimes size={14} />

                </button>

              </div>

            </div>


            {/* ========================================= */}
            {/* POPUP CONTENT */}
            {/* ========================================= */}

            <div className="p-6">


              <h4 className="text-xl font-bold text-white mb-2">
                Let's Chat! 👋
              </h4>


              <p className="text-gray-400 text-sm leading-6 mb-5">
                Have a project in mind? Feel free to send me a
                message on WhatsApp. I'll get back to you as soon
                as possible.
              </p>


              {/* ========================================= */}
              {/* WHATSAPP NUMBER */}
              {/* ========================================= */}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5">

                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  My WhatsApp Number
                </p>


                <div className="flex items-center gap-2">

                  <FaWhatsapp className="text-green-400" />

                  <p className="text-white font-semibold text-lg">
                    0325 4720564
                  </p>

                </div>

              </div>


              {/* ========================================= */}
              {/* MESSAGE BUTTON */}
              {/* ========================================= */}

              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
              >

                <FaWhatsapp size={21} />

                Message on WhatsApp

              </button>


              {/* ========================================= */}
              {/* CANCEL BUTTON */}
              {/* ========================================= */}

              <button
                onClick={() => setShowWhatsApp(false)}
                className="w-full mt-3 py-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}


      {/* ===================================================== */}
      {/* BACK TO TOP BUTTON - RIGHT SIDE */}
      {/* ===================================================== */}

      {showScrollTop && (

        <button
          onClick={scrollToTop}
          className="group fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >

          <FaArrowUp
            className="group-hover:-translate-y-1 transition-all duration-300"
            size={16}
          />


          {/* TOOLTIP */}

          <span className="absolute -top-10 sm:-top-12 right-0 text-[10px] sm:text-xs bg-black/80 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
            Back to Top ↑
          </span>

        </button>

      )}

    </footer>
  );
};
export default Footer;