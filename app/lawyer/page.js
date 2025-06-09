'use client';

import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "../header/page";
import { FaRegWindowClose } from "react-icons/fa";

// Icons
import { 
  Linkedin, Phone, Mail, MapPin, Briefcase, Scale, GraduationCap, 
  UserCircle, ChevronLeft, ChevronRight, Gavel, Handshake, Landmark,
  Award, BookOpen, Layers, FileText, Shield, TrendingUp, Moon, Sun,
  Send
} from 'lucide-react';

// Team Images
import Amit from "@/app/assets/amit.png";
import Rudra from "@/app/assets/rudra1.jpeg";
import Harsha from "@/app/assets/harsha11.jpeg";
import Anand from "@/app/assets/anand1.jpeg";
import Nageshwar from "@/app/assets/nages.jpeg";
import Bhatti from "@/app/assets/BhattiAman.jpg";

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState("management");
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [requestbox, setrequestbox] = useState(false);
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subject, setsubject] = useState("");
  const [category, setcategory] = useState("");
  const [furgency, setfurgency] = useState("Low");
  const [finalcatogery, setfinalcatogery] = useState("Mentorship");
  const [name, setname] = useState("");
  const [expectedResponseDate, setexpectedResponseDate] = useState("");
  const [useremail, setuseremail] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  const tabs = [
    { id: "management", name: "Management", icon: <UserCircle size={18} /> },
    { id: "leadership", name: "Leadership", icon: <Briefcase size={18} /> },
    { id: "board", name: "Board of Directors", icon: <Landmark size={18} /> }
  ];

  // Request form constants
  const urgency = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
  };

  const categories = {
    mentorship: "Mentorship",
    internship: "Internship",
    job: "Job",
    project: "Project",
    research: "Research",
    event: "Event",
    other: "Other"
  };

  const professions = {
    doctor: { cardiologist: 'Cardiologist', dermatologist: 'Dermatologist', pediatrician: 'Pediatrician' },
    engineer: { software: 'Software Engineer', civil: 'Civil Engineer', mechanical: 'Mechanical Engineer' },
    teacher: { math: 'Math Teacher', science: 'Science Teacher', english: 'English Teacher' },
    lawyer: { criminal: 'Criminal Lawyer', corporate: 'Corporate Lawyer', family: 'Family Lawyer' },
    artist: { painter: 'Painter', musician: 'Musician', dancer: 'Dancer' }
  };

  const teamData = {
    management: [
      {
        id: 1,
        name: "Nageshwar Singh",
        title: "Founder & Chief Managing Director",
        image: Nageshwar,
        experience: "Internship (Corporate Law)",
        education: "B.A. LL.B. (Honours), Corporate Law, Chandigarh University",
        role: "Strategic leadership and firm governance",
        specializations: [
          { icon: <Layers size={16} />, name: "Corporate Governance" },
          { icon: <TrendingUp size={16} />, name: "Business Strategy" },
          { icon: <Shield size={16} />, name: "Legal Compliance" }
        ],
        location: "New Delhi",
        phone: "+91 91499 45265",
        email: "ns677112@gmail.com",
        linkedin: "https://www.linkedin.com/in/choudhary-nageshwar-singh-696808227/",
        description: "Visionary legal entrepreneur who pioneered SettleSmart's innovative dispute resolution ecosystem. Combines sharp corporate law acumen with transformative leadership, having trained under top-tier firms like Khaitan & Co. Architect of our hybrid ODR platform that merges legal expertise with cutting-edge technology."
      }
    ],
    leadership: [
      {
        id: 1,
        name: "Rudra N. Zadu",
        title: "Chief Legal Officer & Head of ODR & Dispute Resolution",
        subtitle: "Corporate Law Department",
        image: Rudra,
        experience: "Leadership over 40+ legal professionals across six cities",
        education: "LL.M. in Corporate and Financial Laws (O.P. Jindal Global Law School) | B.A. LL.B. (D.E.S. Law College, Pune)",
        role: "Corporate Law, Financial Law, Capital Markets, Private Equity, M&A",
        specializations: [
          { icon: <FileText size={16} />, name: "M&A Transactions" },
          { icon: <TrendingUp size={16} />, name: "Capital Markets" },
          { icon: <Shield size={16} />, name: "Corporate Compliance" },
          { icon: <Award size={16} />, name: "Private Equity" }
        ],
        location: "Pune, Mumbai",
        phone: "+91 98220 84422",
        email: "rudra.zadu@settlesmart.com",
        linkedin: "https://www.linkedin.com/in/rudra-n-zadu-717200148/",
        description: "Corporate law maestro with a decade of experience steering complex M&A and private equity transactions. Certified expert in cyber and energy laws, Rudra brings surgical precision to corporate dispute resolution. Leads our corporate practice with a unique blend of traditional legal mastery and innovative ODR methodologies."
      },
      {
        id: 2,
        name: "Aman Bhatti",
        title: "Chief Technical Officer",
        image: Bhatti,
        experience: "Skilled in full-stack web development with hands-on project and internship experience",
        education: "B.E. in Computer Science Engineering, Chandigarh University",
        role: "Technology Strategy, Product Development, Innovation",
        specializations: [
          { icon: <Layers size={16} />, name: "Legal Tech" },
          { icon: <BookOpen size={16} />, name: "AI Solutions" },
          { icon: <Shield size={16} />, name: "Cybersecurity" }
        ],
        location: "Gurgaon, India",
        phone: "+91 9992422581",
        email: "amanbhatti105@gmail.com",
        linkedin: "https://www.linkedin.com/in/amanbhatti01/",
        description: "Tech architect behind SettleSmart's award-winning dispute resolution platform. Blends legal domain expertise with advanced engineering skills to create seamless digital justice solutions. Currently pioneering AI-powered mediation tools that are revolutionizing how India resolves commercial disputes."
      }
    ],
    board: [
      {
        id: 1,
        name: "Amit Kumar Sharma",
        title: "Board of Directors & Head of ODR",
        subtitle: "Taxation, Commercial & Corporate Matters",
        image: Amit,
        experience: "8+ years before J&K High Court, CAT, AFT, Sales Tax Tribunals, NCLT, NCLAT",
        education: "LL.M. in Business Law (Rajiv Gandhi National University of Law) | B.A., LL.B. (University of Jammu)",
        role: "Taxation, Corporate Governance, Commercial Disputes",
        specializations: [
          { icon: <FileText size={16} />, name: "Tax Litigation" },
          { icon: <Scale size={16} />, name: "Corporate Governance" },
          { icon: <BookOpen size={16} />, name: "Commercial Disputes" }
        ],
        location: "Jammu",
        phone: "+91 94191 96940",
        email: "amit.sharma@settlesmart.com",
        linkedin: "https://www.linkedin.com/in/amit-sharma-ab33b5107/",
        description: "Tax litigation specialist with a razor-sharp understanding of fiscal regulations. Known for his landmark victories in complex tax disputes, Amit brings strategic depth to our commercial ODR practice. His dual expertise in corporate law and taxation creates unique synergies for SettleSmart's high-value dispute clients."
      },
      {
        id: 3,
        name: "Harsha Sharma",
        title: "Board of Directors & Head of ODR",
        subtitle: "ADR, Labour, Consumer Disputes & Mediation",
        image: Harsha,
        experience: "PAN-India practice before Supreme Court, High Courts, trial courts, tribunals",
        education: "B.A. LL.B. (Delhi University)",
        role: "ADR, Labour & Employment, Consumer Disputes, Debt Recovery, Service Matters, MV Accident Claims",
        specializations: [
          { icon: <Handshake size={16} />, name: "Mediation" },
          { icon: <Scale size={16} />, name: "Labor Law" },
          { icon: <BookOpen size={16} />, name: "Consumer Protection" },
          { icon: <FileText size={16} />, name: "Debt Recovery" }
        ],
        location: "New Delhi",
        phone: "+91 98101 64629",
        email: "harsha.sharma@settlesmart.com",
        linkedin: "https://www.linkedin.com/in/advocate-harsha-sharma-911a78108/",
        description: "Dynamic dispute resolution expert who has successfully mediated over 500+ employment and consumer cases. Harsha's innovative 'resolution-first' approach has set new standards in labor and consumer ODR. Her ability to simplify complex legal issues makes her particularly effective in high-volume dispute categories."
      },
      {
        id: 4,
        name: "Anand Dubey",
        title: "Board of Directors & Head of ODR",
        subtitle: "Corporate & Commercial Disputes",
        image: Anand,
        experience: "Extensive experience in corporate and commercial litigation",
        education: "LL.B. (Delhi University) & LL.M. (Business Law)",
        role: "Corporate and Commercial Disputes, Banking & Finance, Insolvency",
        specializations: [
          { icon: <FileText size={16} />, name: "Labor Law" },
          { icon: <TrendingUp size={16} />, name: "civil" },
          { icon: <Scale size={16} />, name: "Matrimonial, Property" }
        ],
        location: "New Delhi",
        phone: "+91 98108 47722",
        email: "anand.dubey@settlesmart.com",
        linkedin: "https://www.linkedin.com/in/adv-anand-kumar-dubey-9b97619a/",
        description: "Commercial dispute strategist with a forensic approach to complex litigation. Anand's dual expertise in banking law and insolvency proceedings brings critical depth to our financial dispute resolution vertical. His systematic case deconstruction methods have achieved remarkable success in high-stakes corporate disputes."
      }
    ]
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
    }
    
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changebox = (member) => {
    setSelectedMember(member);
    setrequestbox(!requestbox);
  };

  const handleMainCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setMainCategory(selectedCategory);
    setSubCategory(""); // Reset sub-category when main category changes
  };

  const valueonchnage = (e) => {
    if(e.target.placeholder === "Type subject"){
      setsubject(e.target.value);
    }
    if(e.target.placeholder === "Enter information"){
      setcategory(e.target.value);
    }
    if(e.target.placeholder === "Enter name"){
      setname(e.target.value);
    }
    if(e.target.placeholder === "Expected Response Date"){
      setexpectedResponseDate(e.target.value);
    }
  };

  const seturgency = (e) => {
    setfurgency(e.target.value);
  };

  const valueCategory = (e) => {
    setfinalcatogery(e.target.value);
  };

  const fetchUserEmail = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/useremail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      const res = await response.json();
      if (res.success) {
        setuseremail(res.email);
      } else {
        console.error("Failed to fetch user email:", res.message);
      }
    } catch (err) {
      console.error("Error fetching user email:", err);
    }
  };

  const submitform = async(e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/AddRequest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: name, 
          userEmail: useremail,
          facultyEmail: selectedMember.email,
          category: finalcatogery,
          subject: subject,
          message: category,
          urgency: furgency,
          expectedResponseDate: expectedResponseDate,
          status: "Pending",
          mainCategory: mainCategory,
          categoryType: subCategory 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Request sent successfully");
        setname("");
        setsubject("");
        setcategory("");
        setfurgency("Low");
        setfinalcatogery("Mentorship");
        setMainCategory("");
        setSubCategory("");
        setrequestbox(false);
      } else {
        alert("Failed to send request");
      }
    } catch (error) {
      console.log(error);
      alert("Error: " + error.message);
    }
  };

  const CustomArrow = ({ direction, onClick }) => (
    <motion.button
      whileHover={{ scale: 1.2, backgroundColor: "rgba(37, 99, 235, 0.2)" }}
      whileTap={{ scale: 0.9 }}
      className={`absolute top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-white text-blue-600 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 border border-gray-200 dark:bg-gray-700/80 dark:hover:bg-gray-700 dark:text-blue-400 dark:border-gray-600 ${direction === "prev" ? "left-4" : "right-4"}`}
      onClick={onClick}
    >
      {direction === "prev" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </motion.button>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full dark:border-blue-400"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />

      <button
        onClick={toggleDarkMode}
        className="fixed z-50 bottom-6 right-6 w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="text-yellow-400" size={24} />
        ) : (
          <Moon className="text-gray-700" size={24} />
        )}
      </button>

      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <Gavel className="w-10 h-10 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Meet Our <span className="text-blue-600 dark:text-blue-400">Legal Experts</span>
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            Distinguished professionals combining decades of legal expertise with innovative dispute resolution approaches
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-1 shadow-sm border border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Carousel
              showArrows
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && <CustomArrow direction="prev" onClick={onClickHandler} />
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && <CustomArrow direction="next" onClick={onClickHandler} />
              }
              className="max-w-6xl mx-auto"
            >
              {teamData[activeTab].map((member) => (
                <div key={member.id} className="px-4 pb-12">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 p-6 flex justify-center bg-gray-50 dark:bg-gray-700">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="relative w-64 h-64 rounded-xl overflow-hidden shadow-md"
                        >
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                              priority
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                              <UserCircle className="text-gray-400 dark:text-gray-300" size={48} />
                            </div>
                          )}
                        </motion.div>
                      </div>

                      <div className="w-full md:w-2/3 p-8">
                        <div className="flex flex-col h-full">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h2>
                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{member.title}</p>
                            {member.subtitle && (
                              <p className="text-blue-500 dark:text-blue-300 text-sm font-medium mb-4">{member.subtitle}</p>
                            )}
                            <p className="text-gray-600 dark:text-gray-300 mb-6">{member.description}</p>
                          </div>

                          <div className="mt-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              <div className="flex items-start gap-3">
                                <Briefcase className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                                <div>
                                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Experience</p>
                                  <p className="text-gray-800 dark:text-gray-200">{member.experience}</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3">
                                <GraduationCap className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                                <div>
                                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Education</p>
                                  <p className="text-gray-800 dark:text-gray-200">{member.education}</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3">
                                <Scale className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                                <div>
                                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Specializations</p>
                                  <div className="flex flex-wrap gap-2 mt-1">
                                    {member.specializations.map((spec, index) => (
                                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                                        {spec.icon}
                                        {spec.name}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-start gap-3">
                                <MapPin className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                                <div>
                                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</p>
                                  <p className="text-gray-800 dark:text-gray-200">{member.location}</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                              <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={`tel:${member.phone}`}
                                className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors text-gray-800 dark:text-gray-200"
                              >
                                <Phone className="mr-2 text-blue-600 dark:text-blue-400" size={16} />
                                Contact
                              </motion.a>

                              <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={`mailto:${member.email}`}
                                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                              >
                                <Mail className="mr-2" size={16} />
                                Email
                              </motion.a>

                              {/* Only show Request button for Board members */}
                              {activeTab === "board" && (
                                <motion.button
                                  whileHover={{ scale: 1.03 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => {
                                    fetchUserEmail();
                                    changebox(member);
                                  }}
                                  className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                                >
                                  <Send className="mr-2" size={16} />
                                  Send Request
                                </motion.button>
                              )}

                              {member.linkedin && (
                                <motion.a
                                  whileHover={{ scale: 1.1 }}
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors ml-auto"
                                >
                                  <Linkedin className="text-blue-600 dark:text-blue-400" size={18} />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Carousel>
          </motion.div>
        </AnimatePresence>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full mb-6">
            <Handshake className="text-blue-600 dark:text-blue-400" size={24} />
            <span className="text-blue-600 dark:text-blue-400 font-medium">Multidisciplinary Legal Excellence</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Legal Expertise</h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our team combines deep legal knowledge with innovative technology to deliver exceptional results across all practice areas. 
            Each member brings specialized expertise that contributes to our holistic approach to dispute resolution.
          </p>
        </motion.section>
      </main>

      {/* Request Form Modal */}
      {requestbox && (
        <div>
          {/* Background Overlay with blur */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>
      
          {/* Form Container */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <form
              onSubmit={submitform}
              className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 max-w-3xl w-full p-8 space-y-8 font-sans text-gray-800 overflow-auto max-h-[90vh]"
              style={{ animation: "fadeIn 0.3s ease forwards" }}
            >
              {/* Close Button */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Request to {selectedMember?.name}
                </h2>
                <button
                  type="button"
                  onClick={changebox}
                  className="text-gray-500 hover:text-gray-800 text-3xl"
                  aria-label="Close form"
                >
                  <FaRegWindowClose />
                </button>
              </div>
      
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Enter Name
                </label>
                <input
                  id="name"
                  required
                  onChange={valueonchnage}
                  type="text"
                  placeholder="Enter name"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-400 transition"
                />
              </div>
      
              {/* Expected Response Date */}
              <div>
                <label htmlFor="date" className="block text-lg font-semibold mb-2">
                  Expected Response Date
                </label>
                <input
                  id="date"
                  required
                  onChange={valueonchnage}
                  type="date"
                  placeholder="Expected Response Date"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-400 transition"
                />
              </div>
      
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-lg font-semibold mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  required
                  onChange={valueonchnage}
                  type="text"
                  placeholder="Type subject"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-400 transition"
                />
              </div>
      
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-lg font-semibold mb-2">
                  Category
                </label>
                <select
                  id="category"
                  onChange={valueCategory}
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-400 transition"
                >
                  <option value="">Select</option>
                  {Object.keys(categories).map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
      
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  onChange={valueonchnage}
                  placeholder="Enter information"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm resize-y focus:outline-none focus:ring-3 focus:ring-blue-400 transition"
                  rows={5}
                />
              </div>
      
              {/* Urgency */}
              <div>
                <label htmlFor="urgency" className="block text-lg font-semibold mb-2">
                  Urgency
                </label>
                <select
                  id="urgency"
                  onChange={seturgency}
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-400 transition"
                >
                  <option value="">Select</option>
                  {Object.keys(urgency).map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
      
              {/* Profession Section */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-blue-700 tracking-wide">
                  Professional Categories
                </h2>
      
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Main Category */}
                  <div>
                    <label
                      htmlFor="mainCategory"
                      className="block mb-2 font-semibold text-gray-700"
                    >
                      Main Category
                    </label>
                    <select
                      id="mainCategory"
                      onChange={handleMainCategoryChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
                    >
                      <option value="">-- Select Main Category --</option>
                      {Object.keys(professions).map((value) => (
                        <option key={value} value={value}>
                          {value.charAt(0).toUpperCase() + value.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
      
                  {/* Sub Category */}
                  <div>
                    <label
                      htmlFor="subCategory"
                      className="block mb-2 font-semibold text-gray-700"
                    >
                      Category Type
                    </label>
                    <select
                      id="subCategory"
                      required
                      onChange={(e) => setSubCategory(e.target.value)}
                      disabled={!mainCategory}
                      className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-blue-500 transition disabled:bg-gray-100"
                    >
                      <option value="">Select</option>
                      {mainCategory &&
                        Object.entries(professions[mainCategory]).map(([key, val]) => (
                          <option key={key} value={key}>
                            {val}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </section>
      
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;