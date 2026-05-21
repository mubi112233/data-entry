import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Clock,
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { localizedPath, siteConfig, type SiteLocale } from "@/lib/site-config";

const copy = {
  en: {
    badge: "Start Your Data Entry Today",
    headlineLine1: "Ready for Clean,",
    headlineLine2: "Accurate Data?",
    subheading: "Get spreadsheet-style data delivered in 24–72 hours. Join 500+ teams shipping clean datasets with our proven data entry workflows.",
    benefits: ["Free sample included", "Template & field mapping", "99.9% accuracy QA", "24–72h turnaround"],
    stats: { activeClients: "5M+", avgRoi: "99.9%", satisfaction: "98%", fastStart: "24h" },
    statsLabels: { activeClients: "Records Processed", avgRoi: "Accuracy (QA)", satisfaction: "Satisfaction", fastStart: "Avg. Turnaround" },
    trust: {
      consultationTime: "Free consultation",
      consultationLabel: "15-min data entry consult",
      responseTime: "Avg. response time",
      responseLabel: "Response in < 2h",
      noCommitment: "No commitment",
      noCommitmentLabel: "Zero pressure",
      footer: "Join 500+ teams shipping clean datasets with our proven data entry workflows.",
    },
    primaryCta: "Book Data Entry Consult (15 min)",
    secondaryCta: "Quick WhatsApp Chat",
  },
  ge: {
    badge: "Starten Sie heute mit der Datenerfassung",
    headlineLine1: "Bereit für saubere,",
    headlineLine2: "präzise Daten?",
    subheading: "Erhalten Sie tabellenähnliche Daten in 24–72 Stunden. Schließen Sie sich 500+ Teams an, die mit unseren bewährten Workflows saubere Datensätze liefern.",
    benefits: ["Kostenlose Probe inklusive", "Vorlage & Feld-Mapping", "99,9 % QS-Genauigkeit", "24–72h Lieferzeit"],
    stats: { activeClients: "5M+", avgRoi: "99,9%", satisfaction: "98%", fastStart: "24h" },
    statsLabels: { activeClients: "Verarbeitete Datensätze", avgRoi: "Genauigkeit (QS)", satisfaction: "Zufriedenheit", fastStart: "Ø Lieferzeit" },
    trust: {
      consultationTime: "Kostenlose Beratung",
      consultationLabel: "15-Min Datenerfassungs-Beratung",
      responseTime: "Ø Antwortzeit",
      responseLabel: "Antwort in < 2 Std.",
      noCommitment: "Keine Verpflichtung",
      noCommitmentLabel: "Kein Druck",
      footer: "Schließen Sie sich 500+ Teams an, die mit unseren bewährten Workflows saubere Datensätze liefern.",
    },
    primaryCta: "Datenerfassungs-Beratung buchen (15 Min)",
    secondaryCta: "Schneller WhatsApp-Chat",
  },
};

export async function FinalCTA({ lang }: { lang: string }) {
  const locale: SiteLocale = lang === "ge" ? "ge" : "en";
  const c = copy[locale];
  const primaryHref = localizedPath(locale, siteConfig.routes.bookMeeting);

  const statsItems = [
    { Icon: Users, value: c.stats.activeClients, label: c.statsLabels.activeClients },
    { Icon: TrendingUp, value: c.stats.avgRoi, label: c.statsLabels.avgRoi },
    { Icon: Award, value: c.stats.satisfaction, label: c.statsLabels.satisfaction },
    { Icon: Clock, value: c.stats.fastStart, label: c.statsLabels.fastStart },
  ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-green-900 via-green-900 to-green-950">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-green-700/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-0 relative z-10">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="px-5 py-2.5 bg-green-600 backdrop-blur-lg rounded-full text-sm font-bold text-white flex items-center gap-2 shadow-xl">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{c.badge}</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 text-white leading-[1.1]">
            <span className="block drop-shadow-lg">{c.headlineLine1}</span>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-green-400 via-green-300 to-green-400 bg-clip-text text-transparent drop-shadow-2xl">
                {c.headlineLine2}
              </span>
            </span>
          </h2>

          <div className="mb-10 sm:mb-12 max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-white/95 mb-8 leading-relaxed font-semibold">
              {c.subheading}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {c.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-green-600/20 backdrop-blur-md rounded-full px-4 py-2 border border-green-600/30 hover:bg-green-600/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm font-semibold whitespace-nowrap">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={primaryHref}
              className="inline-flex items-center justify-center gap-3 bg-green-600 text-white hover:bg-green-500 hover:scale-[1.08] px-8 sm:px-12 py-6 sm:py-8 text-base sm:text-lg font-extrabold rounded-2xl shadow-xl transition-all duration-300 border-2 border-green-600/30 w-full sm:w-auto"
            >
              <span>{c.primaryCta}</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-green-600/10 border-2 border-green-600/30 text-white hover:bg-green-600 hover:text-white hover:scale-[1.08] px-6 sm:px-10 py-6 sm:py-8 text-base sm:text-lg font-bold rounded-2xl backdrop-blur-lg transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{c.secondaryCta}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
            {statsItems.map((stat, i) => (
              <div
                key={i}
                className="bg-green-600/15 backdrop-blur-lg border border-green-600/30 rounded-2xl p-4 sm:p-6 hover:bg-green-600/25 transition-all duration-300 group"
              >
                <stat.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white/90 bg-green-600/10 backdrop-blur-md rounded-xl p-4 border border-green-600/20 hover:bg-green-600/15 transition-all duration-300">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-base">{c.trust.consultationTime}</div>
                <div className="text-sm text-white/80">{c.trust.consultationLabel}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90 bg-green-600/10 backdrop-blur-md rounded-xl p-4 border border-green-600/20 hover:bg-green-600/15 transition-all duration-300">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-base">{c.trust.responseTime}</div>
                <div className="text-sm text-white/80">{c.trust.responseLabel}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90 bg-green-600/10 backdrop-blur-md rounded-xl p-4 border border-green-600/20 hover:bg-green-600/15 transition-all duration-300">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-base">{c.trust.noCommitment}</div>
                <div className="text-sm text-white/80">{c.trust.noCommitmentLabel}</div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            <span className="flex items-center justify-center gap-2 flex-wrap">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              {c.trust.footer}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
