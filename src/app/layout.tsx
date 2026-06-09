import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { DesignTokensProvider } from "@/components/DesignTokensProvider";
import { SITE_URL, absoluteUrl } from "@/lib/site-url";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#16a34a" },
    { media: "(prefers-color-scheme: dark)", color: "#14532d" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DataEntry Pro – Professional Data Entry Services | Fast, Accurate & Scalable",
    template: "%s | DataEntry Pro",
  },
  description:
    "DataEntry Pro delivers professional data entry services with 99.9% accuracy. Forms, catalogs, CRM migrations, OCR processing, and bulk data entry – delivered in 24–72 hours. Get your free sample today.",
  keywords: [
    "data entry services",
    "data entry outsourcing",
    "data cleaning",
    "data migration",
    "OCR data entry",
    "CRM data entry",
    "catalog data entry",
    "form processing",
    "data validation",
    "spreadsheet data entry",
    "Google Sheets data entry",
    "Excel data entry",
    "data entry agency",
    "bulk data entry",
    "Dateneingabe Service",
    "Datenerfassung",
    "Datenbereinigung",
    "Datenmigration",
    "DataEntry Pro",
  ],
  authors: [{ name: "DataEntry Pro", url: SITE_URL }],
  creator: "DataEntry Pro",
  publisher: "DataEntry Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "zgcogxyprhBhJw6ZwAznROIfIfKA4zi8jaNyibuqxPI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "DataEntry Pro",
    title: "DataEntry Pro – Professional Data Entry Services | Fast, Accurate & Scalable",
    description:
      "DataEntry Pro delivers professional data entry services with 99.9% accuracy. Forms, catalogs, CRM migrations, OCR processing – delivered in 24–72 hours.",
    url: absoluteUrl("/en"),
    locale: "en_US",
    alternateLocale: ["de_DE"],
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DataEntry Pro — Professional Data Entry Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataEntry Pro – Professional Data Entry Services | Fast, Accurate & Scalable",
    description:
      "DataEntry Pro delivers professional data entry services with 99.9% accuracy. Forms, catalogs, CRM migrations, OCR processing – delivered in 24–72 hours.",
    images: [absoluteUrl("/og-image.jpg")],
  },
  alternates: {
    canonical: absoluteUrl("/en"),
    languages: {
      en: absoluteUrl("/en"),
      de: absoluteUrl("/de"),
      "x-default": absoluteUrl("/en"),
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DataEntry Pro",
  url: SITE_URL,
  logo: absoluteUrl("/favicon.ico"),
  description:
    "Professional data entry services with 99.9% accuracy. Forms, catalogs, CRM migrations, OCR processing, and bulk data entry delivered in 24–72 hours.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "German"],
  },
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Place", name: "Worldwide" },
  ],
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DataEntry Pro",
  url: SITE_URL,
  inLanguage: ["en-US", "de-DE"],
  publisher: { "@type": "Organization", name: "DataEntry Pro" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Data Entry Services",
  provider: {
    "@type": "Organization",
    name: "DataEntry Pro",
    url: SITE_URL,
  },
  areaServed: [
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Place", name: "Worldwide" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Data Entry Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Form & Document Processing", description: "Accurate data capture from paper forms, PDFs, and scans" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Data Cleaning & Normalization", description: "Deduplication, format standardization, and validation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "CRM & Sheet Migration", description: "Secure data migration with full field mapping and QA" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Catalog & Listing Management", description: "Product catalog and SKU data entry with validation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "OCR Data Entry", description: "OCR-assisted digitization of scanned documents" },
      },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DataEntry Pro",
  url: SITE_URL,
  logo: absoluteUrl("/favicon.ico"),
  image: absoluteUrl("/og-image.jpg"),
  description: "Professional data entry services with 99.9% accuracy. Forms, catalogs, CRM migrations, and OCR processing delivered in 24–72 hours.",
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const htmlLang = headersList.get("x-html-lang") || "en";
  
  return (
    <html lang={htmlLang} suppressHydrationWarning className="font-sans">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="kHn3YaAaxdfSd7tm_SRxaBv__HD9W6U6mb0ShMe42xc" />
        
        {/* Performance: Preconnect to external domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFH2V4P0BX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GFH2V4P0BX');
            `,
          }}
        />
        
        {/* Security */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <DesignTokensProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </DesignTokensProvider>
      </body>
    </html>
  );
}


