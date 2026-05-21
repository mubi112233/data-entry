"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Video, CheckCircle2, ArrowLeft, Menu, X, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/d/cyhx-wdw-b57";

export default function BookMeetingClient() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lang = pathname.startsWith("/ge") || pathname.startsWith("/de") ? "de" : "en";
  const homePath = lang === "de" ? "/de" : "/en";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/98 backdrop-blur-2xl border-b-2 border-green-600/20 shadow-2xl"
            : "bg-background/90 backdrop-blur-xl border-b border-border/30"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring", damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href={homePath}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center space-x-3 cursor-pointer group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-green-600/30 transition-all duration-500"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="3" rx="1" fill="white" />
                    <rect x="3" y="8" width="11" height="2" rx="1" fill="white" opacity="0.8" />
                    <rect x="3" y="12" width="14" height="2" rx="1" fill="white" opacity="0.8" />
                    <rect x="3" y="16" width="9" height="2" rx="1" fill="white" opacity="0.8" />
                    <circle cx="19" cy="18" r="3" fill="#4ade80" />
                    <path d="M17.5 18l1 1 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-green-800 dark:text-foreground group-hover:text-green-600 transition-all duration-300">
                    DataEntry <span className="text-green-600 dark:text-green-400">Pro</span>
                  </span>
                  <span className="text-[10px] sm:text-xs text-green-600/80 font-semibold -mt-1 tracking-wide">
                    Data Entry Services
                  </span>
                </div>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-2 lg:gap-6">
              <Link href={homePath}>
                <Button variant="ghost" className="text-muted-foreground hover:text-green-600 hover:bg-green-600/10 transition-all duration-300 font-semibold px-4 py-2 rounded-xl group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  Home
                </Button>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")}
                  className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white font-bold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 border-2 border-green-600/50"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative w-11 h-11 rounded-xl border border-border/50 hover:border-green-600/50 hover:bg-green-600/5 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="flex items-center justify-center"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5 text-green-600" /> : <Menu className="h-5 w-5 text-foreground" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="md:hidden border-t-2 border-green-600/20 bg-background/95 backdrop-blur-xl"
              >
                <div className="py-6 space-y-4">
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="px-4">
                    <Button
                      onClick={() => {
                        document.querySelector("iframe[title='Book a meeting']")?.scrollIntoView({ behavior: "smooth" });
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Your Consult Now
                    </Button>
                  </motion.div>
                  <div className="h-px bg-border/50 mx-4" />
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    <Link href={homePath} onClick={() => setMobileMenuOpen(false)} className="w-full">
                      <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-green-600 hover:bg-green-600/5 py-3 rounded-xl transition-all duration-300 group">
                        <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="font-semibold">Back to Home</span>
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-2 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
                Book Your Free Data Entry Consult
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Schedule a free 15-minute call to scope your project, confirm fields & SLA, and get a free sample batch.
              </p>
            </div>

            {/* Meeting Details */}
            <div className="space-y-4 p-5 sm:p-6 bg-card border border-border rounded-xl shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">What to Expect</h3>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: "15-Minute Session", desc: "Quick scoping call to confirm fields, volume & SLA" },
                  { icon: Video, title: "Virtual Meeting", desc: "Join via Google Meet or Zoom" },
                  { icon: CheckCircle2, title: "Free Sample Included", desc: "We deliver a sample batch so you can review quality before committing" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-600/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-foreground mb-1">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* We'll Discuss */}
            <div className="space-y-4 p-5 sm:p-6 bg-green-600/5 border border-green-600/20 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">We&apos;ll Discuss</h3>
              <ul className="space-y-3">
                {[
                  "Your data entry project scope & volume",
                  "Field mapping, validation rules & delivery format",
                  "Turnaround time & SLA confirmation",
                  "Free sample batch to review quality",
                  "Pricing & next steps to get started",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "5M+", label: "Records Processed" },
                { value: "500+", label: "Clients" },
                { value: "99.9%", label: "Accuracy" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 bg-card border border-border rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Calendly */}
          <div className="lg:col-span-3 order-first lg:order-last">
            <div className="lg:sticky lg:top-24">
              <div className="bg-card border border-border rounded-xl p-2 shadow-lg">
                <iframe
                  src={`${CALENDLY_URL}?embed_type=Inline`}
                  className="rounded-lg"
                  style={{ minWidth: "100%", height: "600px", border: "none" }}
                  title="Book a meeting"
                />
              </div>
              <div className="mt-4 p-4 bg-green-600/5 border border-green-600/20 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 inline mr-2 text-green-600" />
                  <span className="font-semibold text-foreground">100% Secure & Confidential</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          className="mt-16 sm:mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">What Our Clients Say</h2>
            <p className="text-muted-foreground">See why 500+ teams trust DataEntry Pro</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Markus Weber",
                role: "Operations Manager, EuroShop GmbH",
                text: "DataEntry Pro normalized our 50,000 SKUs in just 5 days. Near-zero errors on final delivery — exactly what we needed.",
                rating: 5,
              },
              {
                name: "Sandra Hoffmann",
                role: "Head of Data, Apex Consulting AG",
                text: "120,000 contacts cleaned and imported into HubSpot on time and on budget. The free sample gave us full confidence before we committed.",
                rating: 5,
              },
              {
                name: "Thomas Braun",
                role: "Research Director, ResearchFirst GmbH",
                text: "8,000 survey forms digitized and validated in 3 days. Responsive team and top-notch quality control throughout.",
                rating: 5,
              },
            ].map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-green-600/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-green-600 fill-green-600" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600/30 to-green-600/10 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
