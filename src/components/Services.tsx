"use client";

import { Instagram, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { usePathname } from "next/navigation";
import { dummyServices } from "@/data/dummy";

const sectionCopy = {
  en: {
    badge: "Our Data Entry Services",
    heading: "How We Power Your Data Ops",
    subheading: "End-to-end data entry operations—intake, cleaning, validation, and delivery—so your team can focus on growth, not spreadsheets.",
  },
  ge: {
    badge: "Unsere Datenerfassungs-Leistungen",
    heading: "So stärken wir Ihre Data Ops",
    subheading: "End-to-End-Datenerfassung—Intake, Bereinigung, Validierung und Lieferung—damit Ihr Team sich auf Wachstum statt Tabellen konzentrieren kann.",
  },
};

export const Services = () => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith('/ge') || pathname.startsWith('/de') ? 'ge' : 'en';
  const copy = sectionCopy[currentLang as keyof typeof sectionCopy];
  const services = dummyServices[currentLang as keyof typeof dummyServices];

  return (
    <motion.section
      id="services"
      className="relative py-4 sm:py-6 md:py-8 lg:py-10 bg-background z-30 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <motion.div
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 relative z-10 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-2.5 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white text-xs sm:text-sm md:text-base font-semibold rounded-full mb-2 sm:mb-3 md:mb-4 shadow-lg">
            {copy.badge}
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-1 sm:px-2">
            <span className="text-green-800 dark:text-foreground">
              {copy.heading}
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed px-1 sm:px-2">
            {copy.subheading}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {services.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon] || Instagram;
            return (
              <motion.div
                key={service._id || service.order}
                className="relative bg-white dark:bg-gradient-to-br dark:from-green-900 dark:via-green-900 dark:to-green-950 text-green-700 dark:text-white border-2 border-green-200 dark:border-green-800/50 p-5 sm:p-6 md:p-7 lg:p-9 xl:p-10 rounded-xl sm:rounded-2xl hover:border-green-300 dark:hover:border-green-700 hover:shadow-[0_25px_80px_-20px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-700 group overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
                }}
                whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 dark:from-green-800/30 via-green-50/20 dark:via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4 sm:gap-5 md:gap-5 lg:gap-6 relative z-10">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white ring-1 ring-green-600/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_18px_40px_-12px_rgba(34,197,94,0.6)]"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  >
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </motion.div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-3 text-green-800 dark:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-sm lg:text-base text-green-700 dark:text-green-100 mb-3 sm:mb-4 md:mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 bg-green-100 dark:bg-green-800/50 border border-green-300 dark:border-green-700 rounded-full text-green-700 dark:text-green-200 text-xs sm:text-sm md:text-xs lg:text-sm font-semibold group-hover:bg-green-600 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 group-hover:border-green-600 dark:group-hover:border-white transition-all duration-500">
                      <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 mr-1.5 sm:mr-2 md:mr-1.5 lg:mr-2" />
                      <span className="leading-none">{service.benefit}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 rounded-tr-xl sm:rounded-tr-2xl transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/50 rounded-bl-xl sm:rounded-bl-2xl transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};


