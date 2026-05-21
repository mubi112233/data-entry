/**
 * Next-safe copy/translation constants (no react-i18next runtime)
 * Data Entry focused content matching data-entry site structure.
 * Use URL-based language detection (en/ge) to select strings.
 */

export const copy = {
  en: {
    // Navigation
    nav: {
      services: "Services",
      howItWorks: "How It Works",
      pricing: "Pricing",
      testimonials: "Testimonials",
      faq: "FAQ",
      bookConsultation: "Book a Call",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      badge: "Trusted by 500+ Businesses Worldwide",
      title: "Fast, Accurate",
      titleHighlight: "Data Entry Services",
      subtitle: "Spreadsheet-style data entry with validation, clean-up, and QA. We handle forms, lists, catalogs, surveys, OCR docs, and bulk updates—accurately and on time.",
      ctaPrimary: "Book Data Entry Consult (15 min)",
      urgency: "Get Free Sample",
      stats: {
        clients: "Records Processed",
        costSaved: "Avg Turnaround",
        rating: "Accuracy (QA)",
      },
    },

    // How It Works
    howItWorks: {
      badge: "Data Entry in 4 Steps",
      heading: "How It Works",
      description: "From scoping to delivery in 24–72 hours for most projects. Clear rules, consistent outputs, and measurable quality.",
      steps: {
        step1: {
          step: "Step 1",
          title: "Intake & Scoping",
          description: "Share samples and rules. We confirm fields, validations, volumes, SLAs, and delivery format (Sheets, CSV, CRM)."
        },
        step2: {
          step: "Step 2",
          title: "Template & Sample",
          description: "We build a spreadsheet-style template and deliver a free sample so you can review structure and quality."
        },
        step3: {
          step: "Step 3",
          title: "Data Entry & Validation",
          description: "Our team enters data with keyboard-first shortcuts and automated checks to prevent duplicates and format issues."
        },
        step4: {
          step: "Step 4",
          title: "QA & Delivery",
          description: "Second-pass QA, issue fixes, and final delivery. Ongoing maintenance available for weekly or monthly updates."
        }
      }
    },

    // Services
    services: {
      badge: "Our Data Entry Services",
      titlePrefix: "How We",
      titleHighlight: "Power",
      titleSuffix: "Your Data Ops",
      subtitle: "End-to-end data entry operations—intake, cleaning, validation, and delivery—so your team can focus on growth, not spreadsheets.",
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      heading: "What makes us <span class=\"text-gold\">different</span>",
      description: "Professional data entry, intelligent validation, and 99.9% accuracy guaranteed. 24–72h turnaround on most projects.",
    },

    // Testimonials
    testimonials: {
      heading: "Trusted by <span class=\"text-gold\">500+ Businesses</span>",
      subheading: "Real results from real businesses who partnered with us for clean, accurate data.",
      caseStudy: {
        badge: "Success Story",
        title: "Case Study: <span class=\"text-gold\">50k SKUs Normalized</span>",
        description: "See how we helped an eCommerce brand normalize 50k product SKUs with 99.9% accuracy, eliminating order errors and returns.",
        cta: "View Full Case Study",
      },
    },

    // Blog
    blog: {
      badge: "Latest Insights",
      heading: "Blog & <span class=\"text-gold\">Resources</span>",
      description: "Guides and playbooks for fast, accurate, spreadsheet-style data operations—cleaning, OCR, QA, and migrations.",
      by: "By",
      readMore: "Read more",
      read: "Read",
    },

    // Case Studies
    caseStudies: {
      badge: "Success Stories",
      heading: "Data Entry <span class=\"text-gold\">Success Stories</span>",
      description: "See how teams shipped clean datasets faster—catalogs normalized, CRMs migrated, and surveys validated with high accuracy.",
      labels: {
        saved: "Result",
        teamSize: "Focus",
        timeline: "Timeframe",
        viewFull: "View Full Case Study",
        viewStudy: "View Case Study",
      },
    },

    // FAQ
    faq: {
      badge: "Got Questions?",
      title: "Frequently Asked Questions",
      description: "Everything you need to know about our Data Entry services. Can't find what you're looking for? Chat with us.",
      qualityCardTitle: "Quality Guarantee",
      qualityCardText: "Structured templates, validation rules, and second-pass QA. Double-entry verification for critical fields to reach 99.9%+.",
      toolsCardTitle: "Complete Data Stack",
      toolsCardText: "Google Sheets • Excel • Airtable • HubSpot • Salesforce • CSV/TSV • OCR • Zapier • Make",
      stillHaveQuestionsTitle: "Still have questions?",
      stillHaveQuestionsText: "Our team is here to help. Get in touch and we'll respond within 2 hours.",
      contactSupport: "Contact Support",
      viewPricing: "View Pricing",
    },

    // Pricing
    pricing: {
      sectionBadge: "Transparent Pricing",
      sectionTitle: "Simple, Usage-Based Packages",
      sectionDescription: "Choose a data entry package sized to your volume. Scale anytime. No hidden fees.",
      vaCountLabel: "How many records per month?",
      vaCountHelper: "Select your average monthly record volume",
      startingFrom: "Starting from €{price}/month",
      bulkDiscount: "{percent}% volume discount applied!",
      bulkSavings: "You save €{amount} total",
      bulkHint: "Add {count} more record{suffix} to unlock {percent}% discount",
      bannerBadge: "Free 15-Minute Data Entry Consult",
      bannerTitle: "Get Expert Data Entry Advice",
      bannerSubtitle: "Discuss your data challenges and get a custom data entry strategy with a free sample",
      bannerPoints: {
        noCommitment: "No obligation",
        cancelAnytime: "Cancel anytime",
        fullAccess: "Free sample included"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "Up to 1k records/mo",
          features: [
            "Form & document processing",
            "Basic data validation",
            "Spreadsheet template setup",
            "Weekly delivery",
            "Email support"
          ]
        },
        professional: {
          name: "Growth",
          hours: "Up to 10k records/mo",
          badge: "Most Popular",
          features: [
            "Everything in Starter",
            "No setup fee",
            "Data cleaning & normalization",
            "Catalog & listing management",
            "CRM/Sheet migration",
            "Second-pass QA included",
            "Priority support"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "50k+ records & custom",
          badge: "Best Value",
          features: [
            "Everything in Growth",
            "No setup fee",
            "Dedicated data entry manager",
            "Web research & data collection",
            "Custom integrations & API",
            "24/7 monitoring & support",
            "Custom SLAs & compliance"
          ]
        }
      },
      button: "Get Free Sample",
      perMonth: "/mo",
      hoursUnit: "record volume",
      planSetupFee: "+€{fee} setup fee",
      planNoSetupFee: "No setup fee",
      disclaimer: "All plans billed monthly with no long-term contracts. Upgrade or downgrade anytime. Typical turnaround 24–72h depending on volume."
    },

    // Final CTA
    finalCTA: {
      badge: "Start Your Data Entry Today",
      title: "Ready for Clean, <span class=\"text-gold\">Accurate Data?</span>",
      description: "Get spreadsheet-style data delivered in 24–72 hours. Join 500+ teams shipping clean datasets with our proven data entry workflows.",
    },

    // Value Proposition
    valueProposition: {
      heading: "Why <span class=\"text-gold\">500+</span> Teams Trust Us",
      description: "Professional data entry with 99.9% accuracy, 24–72h turnaround, and transparent delivery.",
    },

    // Tools Integration
    tools: {
      badge: "Seamless Data Integrations",
      heading: "Seamless <span class=\"text-gold\">Data Integrations</span>",
      description: "We plug into your stack—spreadsheets, CRMs, eCommerce, databases, and automation tools—for smooth intake and delivery.",
    },
  },

  ge: {
    // Navigation
    nav: {
      services: "Leistungen",
      howItWorks: "So funktioniert's",
      pricing: "Preise",
      testimonials: "Referenzen",
      faq: "FAQ",
      bookConsultation: "Termin vereinbaren",
      contact: "Kontakt",
    },

    // Hero Section
    hero: {
      badge: "Von über 500 Unternehmen weltweit vertraut",
      title: "Schnelle, präzise",
      titleHighlight: "Datenerfassungs-Services",
      subtitle: "Tabellenähnliche Dateneingabe mit Validierung, Bereinigung und QS. Wir übernehmen Formulare, Listen, Kataloge, Umfragen, OCR-Dokumente und Massen-Updates—genau und termingerecht.",
      ctaPrimary: "Datenerfassungs-Beratung buchen (15 Min)",
      urgency: "Kostenlose Probe erhalten",
      stats: {
        clients: "Verarbeitete Datensätze",
        costSaved: "Durchschn. Bearbeitungszeit",
        rating: "Genauigkeit (QS)",
      },
    },

    // How It Works
    howItWorks: {
      badge: "Dateneingabe in 4 Schritten",
      heading: "So funktioniert's",
      description: "Von der Planung bis zur Lieferung in 24–72 Stunden bei den meisten Projekten. Klare Regeln, konsistente Ergebnisse und messbare Qualität.",
      steps: {
        step1: {
          step: "Schritt 1",
          title: "Intake & Abgrenzung",
          description: "Sie teilen Beispiele und Regeln. Wir bestätigen Felder, Validierungen, Volumen, SLAs und das Lieferformat (Sheets, CSV, CRM)."
        },
        step2: {
          step: "Schritt 2",
          title: "Vorlage & Muster",
          description: "Wir erstellen eine Tabellen-Vorlage und liefern ein kostenloses Muster, damit Sie Struktur und Qualität prüfen können."
        },
        step3: {
          step: "Schritt 3",
          title: "Dateneingabe & Validierung",
          description: "Unser Team erfasst Daten mit Tastatur-Shortcuts und automatischen Prüfungen, um Duplikate und Formatfehler zu vermeiden."
        },
        step4: {
          step: "Schritt 4",
          title: "QS & Lieferung",
          description: "Zweitprüfung, Fehlerbehebung und finale Lieferung. Laufende Wartung für wöchentliche oder monatliche Updates verfügbar."
        }
      }
    },

    // Services
    services: {
      badge: "Unsere Datenerfassungs-Leistungen",
      titlePrefix: "So",
      titleHighlight: "stärken",
      titleSuffix: "wir Ihre Data Ops",
      subtitle: "End-to-End-Datenerfassung—Intake, Bereinigung, Validierung und Lieferung—damit Ihr Team sich auf Wachstum statt Tabellen konzentrieren kann.",
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Warum wir",
      heading: "Was uns <span class=\"text-gold\">auszeichnet</span>",
      description: "Professionelle Dateneingabe, intelligente Validierung und 99,9 % Genauigkeit garantiert. 24–72h Lieferzeit bei den meisten Projekten.",
    },

    // Testimonials
    testimonials: {
      heading: "Vertraut von <span class=\"text-gold\">500+ Unternehmen</span>",
      subheading: "Echte Ergebnisse von Unternehmen, die mit uns für saubere, präzise Daten zusammengearbeitet haben.",
      caseStudy: {
        badge: "Erfolgsgeschichte",
        title: "Fallstudie: <span class=\"text-gold\">50k SKUs normalisiert</span>",
        description: "Sehen Sie, wie wir einer eCommerce-Marke halfen, 50k Produkt-SKUs mit 99,9 % Genauigkeit zu normalisieren und Bestellfehler zu eliminieren.",
        cta: "Vollständige Fallstudie ansehen",
      },
    },

    // Blog
    blog: {
      badge: "Aktuelle Einblicke",
      heading: "Blog & <span class=\"text-gold\">Ressourcen</span>",
      description: "Leitfäden und Playbooks für schnelle, präzise, tabellenartige Datenprozesse—Cleaning, OCR, QS und Migrationen.",
      by: "Von",
      readMore: "Weiterlesen",
      read: "Lesen",
    },

    // Case Studies
    caseStudies: {
      badge: "Erfolgsgeschichten",
      heading: "Datenerfassungs-<span class=\"text-gold\">Erfolgsgeschichten</span>",
      description: "So lieferten Teams schneller saubere Datensätze—Kataloge normalisiert, CRMs migriert, Umfragen mit hoher Genauigkeit validiert.",
      labels: {
        saved: "Ergebnis",
        teamSize: "Fokus",
        timeline: "Zeitrahmen",
        viewFull: "Vollständige Fallstudie ansehen",
        viewStudy: "Fallstudie ansehen",
      },
    },

    // FAQ
    faq: {
      badge: "Noch Fragen?",
      title: "Häufig gestellte Fragen",
      description: "Alles, was Sie über unsere Datenerfassungs-Services wissen müssen. Nicht fündig geworden? Schreiben Sie uns.",
      qualityCardTitle: "Qualitätsgarantie",
      qualityCardText: "Strukturierte Vorlagen, Validierungsregeln und Zweitprüfung. Doppel-Eingabe für kritische Felder, um 99,9 %+ zu erreichen.",
      toolsCardTitle: "Kompletter Daten-Stack",
      toolsCardText: "Google Sheets • Excel • Airtable • HubSpot • Salesforce • CSV/TSV • OCR • Zapier • Make",
      stillHaveQuestionsTitle: "Noch Fragen?",
      stillHaveQuestionsText: "Unser Team hilft gerne. Kontaktieren Sie uns—wir antworten innerhalb von 2 Stunden.",
      contactSupport: "Support kontaktieren",
      viewPricing: "Preise ansehen",
    },

    // Pricing
    pricing: {
      sectionBadge: "Transparente Preise",
      sectionTitle: "Einfache, nutzungsbasierte Pakete",
      sectionDescription: "Wählen Sie ein Paket passend zu Ihrem Volumen. Jederzeit skalieren. Keine versteckten Gebühren.",
      vaCountLabel: "Wie viele Datensätze pro Monat?",
      vaCountHelper: "Wählen Sie Ihr durchschnittliches monatliches Datensatz-Volumen",
      startingFrom: "Ab €{price}/Monat",
      bulkDiscount: "{percent}% Volumenrabatt!",
      bulkSavings: "Gesamtersparnis: €{amount}",
      bulkHint: "Fügen Sie {count} weiteren Datensatz{suffix} hinzu, um {percent}% Rabatt zu erhalten",
      bannerBadge: "Kostenlose 15-Min Datenerfassungs-Beratung",
      bannerTitle: "Erhalten Sie Experten-Datenerfassungs-Beratung",
      bannerSubtitle: "Besprechen Sie Ihre Daten-Herausforderungen und erhalten Sie eine individuelle Strategie mit kostenloser Probe",
      bannerPoints: {
        noCommitment: "Keine Verpflichtung",
        cancelAnytime: "Jederzeit kündbar",
        fullAccess: "Kostenlose Probe inklusive"
      },
      plans: {
        starter: {
          name: "Starter",
          hours: "Bis zu 1k Datensätze/Monat",
          features: [
            "Formular- & Dokumentenverarbeitung",
            "Basis-Datenvalidierung",
            "Tabellen-Vorlage Setup",
            "Wöchentliche Lieferung",
            "E-Mail-Support"
          ]
        },
        professional: {
          name: "Growth",
          hours: "Bis zu 10k Datensätze/Monat",
          badge: "Am beliebtesten",
          features: [
            "Alles aus Starter",
            "Keine Einrichtungsgebühr",
            "Datenbereinigung & Normalisierung",
            "Katalog- & Listenmanagement",
            "CRM/Sheet-Migration",
            "Zweitprüfung inklusive",
            "Prioritätsupport"
          ]
        },
        enterprise: {
          name: "Enterprise",
          hours: "50k+ Datensätze & individuell",
          badge: "Bestes Preis-Leistungs-Verhältnis",
          features: [
            "Alles aus Growth",
            "Keine Einrichtungsgebühr",
            "Dedizierter Datenerfassungs-Manager",
            "Web-Recherche & Datensammlung",
            "Individuelle Integrationen & API",
            "24/7 Monitoring & Support",
            "Individuelle SLAs & Compliance"
          ]
        }
      },
      button: "Kostenlose Probe erhalten",
      perMonth: "/Monat",
      hoursUnit: "Datensatz-Volumen",
      planSetupFee: "+€{fee} Einrichtungsgebühr",
      planNoSetupFee: "Keine Einrichtungsgebühr",
      disclaimer: "Alle Pläne monatlich ohne Langzeitvertrag. Upgrade/Downgrade jederzeit. Typische Bearbeitungszeit 24–72h je nach Volumen."
    },

    // Final CTA
    finalCTA: {
      badge: "Starten Sie heute mit der Datenerfassung",
      title: "Bereit für saubere, <span class=\"text-gold\">präzise Daten?</span>",
      description: "Erhalten Sie tabellenartige Daten in 24–72 Stunden. Schließen Sie sich 500+ Teams an, die mit unseren bewährten Workflows saubere Datensätze liefern.",
    },

    // Value Proposition
    valueProposition: {
      heading: "Warum <span class=\"text-gold\">500+</span> Teams uns vertrauen",
      description: "Professionelle Dateneingabe mit 99,9 % Genauigkeit, 24–72h Lieferzeit und transparenter Abwicklung.",
    },

    // Tools Integration
    tools: {
      badge: "Nahtlose Daten-Integrationen",
      heading: "Nahtlose <span class=\"text-gold\">Daten-Integrationen</span>",
      description: "Wir integrieren uns in Ihren Stack—Tabellen, CRMs, eCommerce, Datenbanken und Automatisierung—für reibungslose Übergaben.",
    },
  },
} as const;

/**
 * Helper to get copy for a language (en/ge)
 */
export const getCopy = <K extends keyof typeof copy.en>(lang: string, key: K) => {
  const normalizedLang = lang.toLowerCase().startsWith('ge') || lang.toLowerCase().startsWith('de') ? 'ge' : 'en';
  return copy[normalizedLang as 'en' | 'ge'][key];
};
