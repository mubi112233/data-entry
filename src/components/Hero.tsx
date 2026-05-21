"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Calendar, Sparkles, Users, Clock, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { siteConfig, localizedPath, type SiteLocale } from "@/lib/site-config";
import { dummyHero } from "@/data/dummy";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const [currentLang, setCurrentLang] = useState<string>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const match = window.location.pathname.match(/^\/(en|ge|de)\b/i);
    const raw = match?.[1]?.toLowerCase() || "en";
    setCurrentLang(raw === "de" ? "ge" : raw);
  }, []);

  const isGe = currentLang === "ge";
  const d = dummyHero[isGe ? "ge" : "en"];

  const statsLabels = isGe
    ? { clients: "Verarbeitete Datensätze", costSaved: "Ø Lieferzeit", rating: "Genauigkeit (QS)" }
    : { clients: "Records Processed", costSaved: "Avg Turnaround", rating: "Accuracy (QA)" };

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden pt-16 sm:pt-20 md:pt-0"
      style={{ opacity }}
    >
      {/* Background */}
      <motion.div className="absolute inset-0 bg-background z-0" style={{ y }} />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", stiffness: 100 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 120, damping: 20 }}
              className="inline-block mb-4 sm:mb-5 md:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                {d.tagline}
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-[1.1] sm:leading-[1.08] md:leading-[1.05] text-green-800 dark:text-foreground">
              {d.title}{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 dark:from-[hsl(var(--gold))] dark:to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">
                Data Entry Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl">
              {d.subtitle}
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <Button
                size="lg"
                onClick={() => router.push(localizedPath((currentLang === "ge" ? "ge" : "en") as SiteLocale, siteConfig.routes.bookMeeting))}
                className="group relative w-full sm:w-auto text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 h-auto font-bold bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white hover:from-green-500 hover:via-green-600 hover:to-green-700 transform hover:scale-[1.06] hover:-translate-y-2 transition-all duration-400 cursor-pointer overflow-hidden rounded-xl border-2 border-transparent hover:border-green-400/30 shadow-[0_20px_60px_-15px_rgba(34,197,94,0.6)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  <span className="font-semibold">{d.ctaPrimary}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                </span>
              </Button>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" aria-hidden="true" />
                <span className="font-medium">{isGe ? "Vertraut von 500+ Unternehmen weltweit" : "Trusted by 500+ companies worldwide"}</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative lg:ml-auto mt-8 sm:mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            style={{ perspective: 1200 }}
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20"
            >
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg border-2 border-background flex items-center gap-1.5 sm:gap-2"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">500+ {isGe ? "Kunden" : "Clients"}</span>
              </motion.div>
            </motion.div>

            {/* Image container */}
            <motion.div
              className="relative rounded-xl md:rounded-2xl overflow-hidden border-2 border-brand/30 group shadow-[0_30px_120px_-30px_hsl(var(--brand-blue)/0.45)]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <div className="relative">
                <Image
                  src={d.image}
                  alt={isGe ? "Datenerfassungs-Dashboard" : "Data Entry Dashboard"}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-blue)/0.25)] via-transparent to-[hsl(var(--gold)/0.25)]" />
              </div>

              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 backdrop-blur-xl bg-gradient-to-br from-green-900 via-green-900 to-green-950 border border-green-800/50 rounded-xl p-4 sm:p-5 shadow-2xl"
              >
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.5 }} className="text-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-green-400" aria-hidden="true" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{d.stats.clients}</div>
                    <div className="text-[10px] sm:text-xs text-green-200 font-medium mt-0.5">{statsLabels.clients}</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3, duration: 0.5 }} className="text-center border-x border-border/50">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-green-400" aria-hidden="true" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{d.stats.costSaved}</div>
                    <div className="text-[10px] sm:text-xs text-green-200 font-medium mt-0.5">{statsLabels.costSaved}</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, duration: 0.5 }} className="text-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-green-400" aria-hidden="true" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{d.stats.rating}</div>
                    <div className="text-[10px] sm:text-xs text-green-200 font-medium mt-0.5">{statsLabels.rating}</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-brand/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-brand/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
