"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/hello_logo.png";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const router = useRouter();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  const handleBooking = (e) => {
    e.preventDefault();

    // 🔐 Login check logic - modify this as per your auth setup
    const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem("token");

    if (isLoggedIn) {
      router.push("https://cal.com/settlesmart/schedule-meeting");
    } else {
      router.push("/login");
    }
  };

  const stats = [
    { value: "500+", label: "Cases Resolved" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "30", label: "Days Average" },
    { value: "70%", label: "Cost Savings" },
  ];

  const steps = [
    { number: "1", title: "File a Dispute", description: "Submit details through our secure online form", icon: "📄" },
    { number: "2", title: "Match with Expert", description: "Our AI matches you with the perfect professional", icon: "🤝" },
    { number: "3", title: "Virtual Resolution", description: "Conduct proceedings securely online", icon: "💻" },
    { number: "4", title: "Get Binding Outcome", description: "Legally enforceable resolution in 30 days", icon: "⚖️" },
  ];

  return (
    <div ref={ref} className="relative bg-white dark:bg-gray-900 overflow-hidden" style={{ marginTop: "-1px" }}>
      {/* Background and blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-white dark:from-gray-800/20 dark:to-gray-900 z-0"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 dark:opacity-[0.03] z-0"></div>

      {/* Animated elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{ x: [0, 100, 0], y: [0, -100, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{ x: [0, -100, 0], y: [0, 100, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      />

      {/* Marquee */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-2 overflow-hidden">
        <motion.div
          className="text-white font-bold text-sm md:text-base whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <span className="mx-8">• SETTLESMART SOLUTIONS • INDIA'S LEADING DISPUTE RESOLUTION PLATFORM • TRUSTED BY 500+ BUSINESSES •</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-3"
              variants={itemVariants}
            >
              INNOVATIVE DISPUTE RESOLUTION
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
              variants={itemVariants}
            >
              <span className="block">From Vivaad se Samadhan</span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 bg-clip-text text-transparent">
                Tak within Days
              </span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              SettleSmart Solutions leverages cutting-edge technology and a network of 200+ legal experts to resolve disputes fairly, confidentially, and at a fraction of traditional legal costs.
            </motion.p>

            <motion.div className="mb-8" variants={itemVariants}>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-xl border border-blue-200 dark:border-gray-700 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Schedule a Consultation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Get expert advice on your dispute resolution options</p>

                <div onClick={handleBooking}>
                  <motion.div className="relative overflow-hidden group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <motion.button
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-200/50"
                      animate={pulseAnimation}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>Book Meeting Now</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/JoinAsArbitrator">
                  <motion.button
                    className="px-6 py-3 border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-xl font-semibold transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join as Arbitrator/Mediator
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" variants={containerVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right-side image section skipped for brevity (you can re-add it here if needed) */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
