/**
 * Dummy data — temporary replacement for backend API calls.
 * To restore backend: remove imports of this file and re-enable fetchXxx calls.
 */

// ─── Hero ────────────────────────────────────────────────────────────────────
export const dummyHero = {
  en: {
    title: "Fast, Accurate",
    subtitle:
      "Spreadsheet-style data entry with validation, clean-up, and QA. We handle forms, lists, catalogs, surveys, OCR docs, and bulk updates—accurately and on time.",
    tagline: "Trusted by 500+ Businesses Worldwide",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    ctaPrimary: "Book Data Entry Consult (15 min)",
    urgency: "Get Free Sample",
    stats: { clients: "5M+", costSaved: "24–48h", rating: "99.9%" },
  },
  ge: {
    title: "Schnelle, präzise",
    subtitle:
      "Tabellenähnliche Dateneingabe mit Validierung, Bereinigung und QS. Wir übernehmen Formulare, Listen, Kataloge, Umfragen, OCR-Dokumente und Massen-Updates—genau und termingerecht.",
    tagline: "Von über 500 Unternehmen weltweit vertraut",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    ctaPrimary: "Datenerfassungs-Beratung buchen (15 Min)",
    urgency: "Kostenlose Probe erhalten",
    stats: { clients: "5M+", costSaved: "24–48h", rating: "99.9%" },
  },
};

// ─── How It Works ─────────────────────────────────────────────────────────────
export const dummyHowItWorks = {
  en: [
    { _id: "s1", lang: "en", stepNumber: 1, stepLabel: "STEP 1", icon: "Calendar", title: "Intake & Scoping", description: "Share samples and rules. We confirm fields, validations, volumes, SLAs, and delivery format (Sheets, CSV, CRM)." },
    { _id: "s2", lang: "en", stepNumber: 2, stepLabel: "STEP 2", icon: "UserCheck", title: "Template & Sample", description: "We build a spreadsheet-style template and deliver a free sample so you can review structure and quality." },
    { _id: "s3", lang: "en", stepNumber: 3, stepLabel: "STEP 3", icon: "Rocket", title: "Data Entry & Validation", description: "Our team enters data with keyboard-first shortcuts and automated checks to prevent duplicates and format issues." },
    { _id: "s4", lang: "en", stepNumber: 4, stepLabel: "STEP 4", icon: "LineChart", title: "QA & Delivery", description: "Second-pass QA, issue fixes, and final delivery. Ongoing maintenance available for weekly or monthly updates." },
  ],
  ge: [
    { _id: "s1", lang: "de", stepNumber: 1, stepLabel: "SCHRITT 1", icon: "Calendar", title: "Intake & Abgrenzung", description: "Sie teilen Beispiele und Regeln. Wir bestätigen Felder, Validierungen, Volumen, SLAs und das Lieferformat (Sheets, CSV, CRM)." },
    { _id: "s2", lang: "de", stepNumber: 2, stepLabel: "SCHRITT 2", icon: "UserCheck", title: "Vorlage & Muster", description: "Wir erstellen eine Tabellen-Vorlage und liefern ein kostenloses Muster, damit Sie Struktur und Qualität prüfen können." },
    { _id: "s3", lang: "de", stepNumber: 3, stepLabel: "SCHRITT 3", icon: "Rocket", title: "Dateneingabe & Validierung", description: "Unser Team erfasst Daten mit Tastatur-Shortcuts und automatischen Prüfungen, um Duplikate und Formatfehler zu vermeiden." },
    { _id: "s4", lang: "de", stepNumber: 4, stepLabel: "SCHRITT 4", icon: "LineChart", title: "QS & Lieferung", description: "Zweitprüfung, Fehlerbehebung und finale Lieferung. Laufende Wartung für wöchentliche oder monatliche Updates verfügbar." },
  ],
};

// ─── Services ─────────────────────────────────────────────────────────────────
export const dummyServices = {
  en: [
    { _id: "sv1", order: 1, icon: "FileText", title: "Form & Document Processing", description: "We capture data from paper forms, PDFs, scans, and digital documents accurately into structured formats.", benefit: "Up to 99.9% accuracy" },
    { _id: "sv2", order: 2, icon: "Database", title: "Data Cleaning & Normalization", description: "Remove duplicates, standardize formats, and clean records ready for CRMs, spreadsheets, or databases.", benefit: "Clean, consistent data" },
    { _id: "sv3", order: 3, icon: "FolderKanban", title: "Catalog & Listing Management", description: "Maintain product catalogs, SKU lists, and eCommerce inventories with validated fields and consistent structure.", benefit: "Faster time to market" },
    { _id: "sv4", order: 4, icon: "TrendingUp", title: "CRM & Sheet Migration", description: "Migrate data between CRMs, spreadsheets, and databases securely with full field mapping and QA.", benefit: "Zero data loss" },
  ],
  ge: [
    { _id: "sv1", order: 1, icon: "FileText", title: "Formular- & Dokumentenverarbeitung", description: "Wir erfassen Daten aus Papierformularen, PDFs, Scans und digitalen Dokumenten präzise in strukturierte Formate.", benefit: "Bis zu 99,9 % Genauigkeit" },
    { _id: "sv2", order: 2, icon: "Database", title: "Datenbereinigung & Normalisierung", description: "Duplikate entfernen, Formate vereinheitlichen und Datensätze für CRMs, Sheets oder Datenbanken bereinigen.", benefit: "Saubere, konsistente Daten" },
    { _id: "sv3", order: 3, icon: "FolderKanban", title: "Katalog- & Listenverwaltung", description: "Produktkataloge, SKU-Listen und eCommerce-Bestände mit validierten Feldern und einheitlicher Struktur pflegen.", benefit: "Schnellere Markteinführung" },
    { _id: "sv4", order: 4, icon: "TrendingUp", title: "CRM- & Sheet-Migration", description: "Daten sicher zwischen CRMs, Spreadsheets und Datenbanken migrieren – mit vollständiger Feldabbildung und QS.", benefit: "Null Datenverlust" },
  ],
};

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const dummyWhyChooseUs = {
  en: {
    badge: "Why Choose Us",
    heading: 'What Makes Us <span class="text-[hsl(45,100%,60%)]">Different</span>',
    description: "Professional data entry, intelligent validation, and 99.9% accuracy guaranteed. 24–72h turnaround on most projects.",
    items: [
      { icon: "FileText", title: "Form & Doc Expertise", description: "We process PDFs, scans, and forms (OCR-assisted) with double-check QA for zero missing fields." },
      { icon: "Shield", title: "Security Guarantee", description: "Least-privilege access, NDA by default if required, and encrypted file transfer for your data." },
      { icon: "Zap", title: "Fast Start", description: "Setup within 24–72 hours. Free sample so you can review quality before committing." },
      { icon: "HeartHandshake", title: "Personal Support", description: "Our data entry team is always available to address your concerns and questions." },
      { icon: "TrendingUp", title: "99.9% Accuracy", description: "Structured templates, validation rules, and second-pass QA for the highest data quality." },
      { icon: "Award", title: "Proven Track Record", description: "Trusted by 500+ teams with a 98% client satisfaction rate." },
    ],
  },
  ge: {
    badge: "Warum wir",
    heading: 'Was uns <span class="text-[hsl(45,100%,60%)]">auszeichnet</span>',
    description: "Professionelle Dateneingabe, intelligente Validierung und 99,9 % Genauigkeit garantiert. 24–72h Lieferzeit bei den meisten Projekten.",
    items: [
      { icon: "FileText", title: "Formular-Expertise", description: "Wir verarbeiten PDFs, Scans und Formulare (OCR-gestützt) mit Doppel-QS für null fehlende Felder." },
      { icon: "Shield", title: "Sicherheitsgarantie", description: "Least-Privilege-Zugriff, NDA auf Wunsch und verschlüsselter Transfer für Ihre Daten." },
      { icon: "Zap", title: "Schneller Start", description: "Setup innerhalb von 24–72 Stunden. Kostenlose Probe, damit Sie Qualität vor dem Start prüfen können." },
      { icon: "HeartHandshake", title: "Persönlicher Support", description: "Unser Datenerfassungs-Team ist immer verfügbar, um Ihre Anliegen zu klären." },
      { icon: "TrendingUp", title: "99,9 % Genauigkeit", description: "Strukturierte Vorlagen, Validierungsregeln und Zweitprüfung für höchste Datenqualität." },
      { icon: "Award", title: "Bewährte Erfolgsbilanz", description: "Von 500+ Teams vertraut mit einer Kundenzufriedenheitsrate von 98 %." },
    ],
  },
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const dummyTestimonials = {
  en: [
    { _id: "t1", name: "Markus Weber", role: "Operations Manager", company: "EuroShop GmbH", content: "DataEntry Pro normalized our 50,000 SKUs in just 5 days. The accuracy was impressive – near-zero errors on final delivery.", order: 1 },
    { _id: "t2", name: "Sandra Hoffmann", role: "Head of Data", company: "Apex Consulting AG", content: "The CRM migration went flawlessly. 120,000 contacts cleaned, deduplicated, and imported into HubSpot – on time and on budget.", order: 2 },
    { _id: "t3", name: "Thomas Braun", role: "Research Director", company: "ResearchFirst GmbH", content: "8,000 survey forms digitized and validated in 3 days. The team was responsive and the quality control was top-notch.", order: 3 },
    { _id: "t4", name: "Julia Schneider", role: "eCommerce Manager", company: "ShopDirect AG", content: "We handed over a messy product database and got back a perfectly structured catalog. Turnaround was faster than expected.", order: 4 },
    { _id: "t5", name: "Peter Müller", role: "CFO", company: "FinData GmbH", content: "Financial records from 3 years of paper invoices, all digitized and validated in under a week. Exceptional accuracy.", order: 5 },
    { _id: "t6", name: "Anna Fischer", role: "Project Lead", company: "LogiTrack GmbH", content: "Ongoing weekly data entry for our logistics platform. Consistent quality, zero missed deadlines in 6 months.", order: 6 },
  ],
  ge: [
    { _id: "t1", name: "Markus Weber", role: "Operations Manager", company: "EuroShop GmbH", content: "DataEntry Pro hat unsere 50.000 SKUs in nur 5 Tagen normalisiert. Die Genauigkeit war beeindruckend – nahezu null Fehler bei der finalen Lieferung.", order: 1 },
    { _id: "t2", name: "Sandra Hoffmann", role: "Head of Data", company: "Apex Consulting AG", content: "Die CRM-Migration verlief reibungslos. 120.000 Kontakte bereinigt, dedupliziert und in HubSpot importiert – pünktlich und im Budget.", order: 2 },
    { _id: "t3", name: "Thomas Braun", role: "Research Director", company: "ResearchFirst GmbH", content: "8.000 Umfrageformulare in 3 Tagen digitalisiert und validiert. Das Team war reaktionsschnell und die Qualitätskontrolle war erstklassig.", order: 3 },
    { _id: "t4", name: "Julia Schneider", role: "eCommerce Manager", company: "ShopDirect AG", content: "Wir haben eine unstrukturierte Produktdatenbank übergeben und einen perfekt strukturierten Katalog zurückbekommen. Schneller als erwartet.", order: 4 },
    { _id: "t5", name: "Peter Müller", role: "CFO", company: "FinData GmbH", content: "Finanzunterlagen aus 3 Jahren Papierrechnungen – alles in unter einer Woche digitalisiert und validiert. Außergewöhnliche Genauigkeit.", order: 5 },
    { _id: "t6", name: "Anna Fischer", role: "Project Lead", company: "LogiTrack GmbH", content: "Wöchentliche Dateneingabe für unsere Logistikplattform. Konstante Qualität, keine verpassten Deadlines in 6 Monaten.", order: 6 },
  ],
};

// ─── Blog ─────────────────────────────────────────────────────────────────────
export const dummyBlogs = {
  en: [
    {
      blogId: 1, order: 1,
      title: "How to Clean 10,000 Records in Under 24 Hours",
      excerpt: "A step-by-step playbook for bulk data cleaning: deduplication, format standardization, and validation rules that scale.",
      content: "",
      author: "DataEntry Pro Team",
      date: "Jan 15, 2025",
      readTime: "6 min read",
      category: "Data Cleaning",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    },
    {
      blogId: 2, order: 2,
      title: "OCR vs Manual Entry: When to Use Each",
      excerpt: "OCR is fast but imperfect. Manual entry is accurate but slow. Here's how to combine both for the best results.",
      content: "",
      author: "DataEntry Pro Team",
      date: "Jan 28, 2025",
      readTime: "5 min read",
      category: "OCR",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&q=80",
    },
    {
      blogId: 3, order: 3,
      title: "The Ultimate CRM Migration Checklist",
      excerpt: "Moving from spreadsheets to HubSpot or Salesforce? Use this checklist to avoid data loss, duplicates, and mapping errors.",
      content: "",
      author: "DataEntry Pro Team",
      date: "Feb 5, 2025",
      readTime: "8 min read",
      category: "CRM Migration",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80",
    },
  ],
  ge: [
    {
      blogId: 1, order: 1,
      title: "10.000 Datensätze in unter 24 Stunden bereinigen",
      excerpt: "Ein Schritt-für-Schritt-Playbook für die Massen-Datenbereinigung: Deduplizierung, Formatstandardisierung und skalierbare Validierungsregeln.",
      content: "",
      author: "DataEntry Pro Team",
      date: "15. Jan 2025",
      readTime: "6 Min. Lesezeit",
      category: "Datenbereinigung",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    },
    {
      blogId: 2, order: 2,
      title: "OCR vs. manuelle Eingabe: Wann was verwenden",
      excerpt: "OCR ist schnell, aber fehleranfällig. Manuelle Eingabe ist genau, aber langsam. So kombinieren Sie beides optimal.",
      content: "",
      author: "DataEntry Pro Team",
      date: "28. Jan 2025",
      readTime: "5 Min. Lesezeit",
      category: "OCR",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&q=80",
    },
    {
      blogId: 3, order: 3,
      title: "Die ultimative CRM-Migrations-Checkliste",
      excerpt: "Wechsel von Tabellen zu HubSpot oder Salesforce? Diese Checkliste verhindert Datenverlust, Duplikate und Mapping-Fehler.",
      content: "",
      author: "DataEntry Pro Team",
      date: "5. Feb 2025",
      readTime: "8 Min. Lesezeit",
      category: "CRM-Migration",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80",
    },
  ],
};

// ─── Case Studies ─────────────────────────────────────────────────────────────
export const dummyCaseStudies = {
  en: [
    {
      id: 1,
      title: "50k Product SKUs Normalized for eCommerce Brand",
      company: "EuroShop GmbH",
      industry: "eCommerce",
      challenge: "Normalized 50,000 product SKUs across 12 categories, eliminating duplicate entries and standardizing attribute fields for a major European online retailer.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      stats: { costSaved: "99.9% accuracy", timeframe: "5 days", vaCount: "3 operators" },
    },
    {
      id: 2,
      title: "CRM Migration: 120k Contacts Cleaned & Imported",
      company: "Apex Consulting AG",
      industry: "Professional Services",
      challenge: "Migrated 120,000 contacts from legacy spreadsheets into HubSpot CRM with deduplication, field mapping, and second-pass QA validation.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
      stats: { costSaved: "60% cost saved", timeframe: "2 weeks", vaCount: "2 operators" },
    },
    {
      id: 3,
      title: "Survey Data Processing: 8,000 Responses Digitized",
      company: "ResearchFirst GmbH",
      industry: "Market Research",
      challenge: "Digitized and validated 8,000 paper survey responses with OCR-assisted entry, cross-field validation rules, and structured CSV delivery.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80",
      stats: { costSaved: "48h turnaround", timeframe: "3 days", vaCount: "4 operators" },
    },
  ],
  ge: [
    {
      id: 1,
      title: "50.000 Produkt-SKUs für eCommerce-Marke normalisiert",
      company: "EuroShop GmbH",
      industry: "eCommerce",
      challenge: "50.000 Produkt-SKUs in 12 Kategorien normalisiert, Duplikate eliminiert und Attributfelder für einen großen europäischen Online-Händler standardisiert.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
      stats: { costSaved: "99,9 % Genauigkeit", timeframe: "5 Tage", vaCount: "3 Operatoren" },
    },
    {
      id: 2,
      title: "CRM-Migration: 120.000 Kontakte bereinigt & importiert",
      company: "Apex Consulting AG",
      industry: "Professional Services",
      challenge: "120.000 Kontakte aus Legacy-Tabellen in HubSpot CRM migriert – mit Deduplizierung, Feldabbildung und Zweitprüfung.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
      stats: { costSaved: "60 % Kostenersparnis", timeframe: "2 Wochen", vaCount: "2 Operatoren" },
    },
    {
      id: 3,
      title: "Umfragedaten: 8.000 Antworten digitalisiert",
      company: "ResearchFirst GmbH",
      industry: "Marktforschung",
      challenge: "8.000 Papier-Umfragebögen mit OCR-gestützter Eingabe, Kreuzfeld-Validierung und strukturierter CSV-Lieferung digitalisiert und validiert.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80",
      stats: { costSaved: "48h Lieferzeit", timeframe: "3 Tage", vaCount: "4 Operatoren" },
    },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const dummyFAQ = {
  en: [
    { _id: "f1", order: 1, question: "What types of data entry do you handle?", answer: "We handle form processing, document digitization, catalog management, CRM data entry, OCR-assisted entry, survey processing, and bulk data migrations across spreadsheets, CRMs, and databases." },
    { _id: "f2", order: 2, question: "How do you ensure 99.9% accuracy?", answer: "We use structured templates with validation rules, keyboard-first entry shortcuts to reduce errors, and a mandatory second-pass QA review. For critical fields we apply double-entry verification." },
    { _id: "f3", order: 3, question: "What is your typical turnaround time?", answer: "Most projects are delivered in 24–72 hours depending on volume. We confirm the exact SLA during intake scoping before work begins." },
    { _id: "f4", order: 4, question: "Can I get a free sample before committing?", answer: "Yes. We always deliver a free sample batch so you can review structure, field mapping, and quality before the full project starts." },
    { _id: "f5", order: 5, question: "What formats do you deliver in?", answer: "We deliver in Google Sheets, Excel (XLSX/CSV), Airtable, HubSpot, Salesforce, or any custom format you require. We match your existing structure." },
    { _id: "f6", order: 6, question: "Is my data secure?", answer: "Yes. We use least-privilege access, sign NDAs on request, and transfer files via encrypted channels. Your data is never shared with third parties." },
    { _id: "f7", order: 7, question: "Do you offer ongoing / recurring data entry?", answer: "Absolutely. We support weekly, bi-weekly, and monthly recurring data entry workflows with consistent operators and quality standards." },
    { _id: "f8", order: 8, question: "How do I get started?", answer: "Book a free 15-minute consultation. We'll scope your project, confirm the template and SLA, and deliver a free sample — usually within 24 hours." },
  ],
  ge: [
    { _id: "f1", order: 1, question: "Welche Arten der Dateneingabe übernehmen Sie?", answer: "Wir übernehmen Formularverarbeitung, Dokumentendigitalisierung, Katalogverwaltung, CRM-Dateneingabe, OCR-gestützte Eingabe, Umfrageverarbeitung und Massen-Datenmigrationen." },
    { _id: "f2", order: 2, question: "Wie gewährleisten Sie 99,9 % Genauigkeit?", answer: "Wir verwenden strukturierte Vorlagen mit Validierungsregeln, Tastatur-Shortcuts zur Fehlerreduzierung und eine obligatorische Zweitprüfung. Für kritische Felder setzen wir Doppel-Eingabe ein." },
    { _id: "f3", order: 3, question: "Wie lange dauert die Bearbeitung?", answer: "Die meisten Projekte werden je nach Volumen in 24–72 Stunden geliefert. Den genauen SLA bestätigen wir beim Intake-Scoping vor Projektbeginn." },
    { _id: "f4", order: 4, question: "Kann ich eine kostenlose Probe erhalten?", answer: "Ja. Wir liefern immer eine kostenlose Muster-Charge, damit Sie Struktur, Feldabbildung und Qualität vor dem vollständigen Projektstart prüfen können." },
    { _id: "f5", order: 5, question: "In welchen Formaten liefern Sie?", answer: "Wir liefern in Google Sheets, Excel (XLSX/CSV), Airtable, HubSpot, Salesforce oder jedem anderen gewünschten Format. Wir passen uns Ihrer bestehenden Struktur an." },
    { _id: "f6", order: 6, question: "Sind meine Daten sicher?", answer: "Ja. Wir verwenden Least-Privilege-Zugriff, unterzeichnen auf Wunsch NDAs und übertragen Dateien über verschlüsselte Kanäle. Ihre Daten werden nie an Dritte weitergegeben." },
    { _id: "f7", order: 7, question: "Bieten Sie laufende / wiederkehrende Dateneingabe an?", answer: "Ja. Wir unterstützen wöchentliche, zweiwöchentliche und monatliche Dateneingabe-Workflows mit konstanten Operatoren und Qualitätsstandards." },
    { _id: "f8", order: 8, question: "Wie fange ich an?", answer: "Buchen Sie eine kostenlose 15-minütige Beratung. Wir scopieren Ihr Projekt, bestätigen Vorlage und SLA und liefern eine kostenlose Probe – in der Regel innerhalb von 24 Stunden." },
  ],
};

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const dummyPricing = [
  {
    id: "starter" as const,
    name: "Starter",
    hours: "Up to 1k records/mo",
    price: 299,
    setupFee: 99,
    highlighted: false,
    badge: "Perfect for small teams",
    features: [
      "Form & document processing",
      "Basic data validation",
      "Spreadsheet template setup",
      "Weekly delivery",
      "Email support",
    ],
  },
  {
    id: "professional" as const,
    name: "Growth",
    hours: "Up to 10k records/mo",
    price: 599,
    setupFee: 0,
    highlighted: true,
    badge: undefined,
    features: [
      "Everything in Starter",
      "No setup fee",
      "Data cleaning & normalization",
      "Catalog & listing management",
      "CRM/Sheet migration",
      "Second-pass QA included",
      "Priority support",
    ],
  },
  {
    id: "enterprise" as const,
    name: "Enterprise",
    hours: "50k+ records & custom",
    price: 1199,
    setupFee: 0,
    highlighted: false,
    badge: "Best Value",
    features: [
      "Everything in Growth",
      "No setup fee",
      "Dedicated data entry manager",
      "Web research & data collection",
      "Custom integrations & API",
      "24/7 monitoring & support",
      "Custom SLAs & compliance",
    ],
  },
];
