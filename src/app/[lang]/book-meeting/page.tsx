import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookMeetingClient from "./BookMeetingClient";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

const SUPPORTED_LANGS = ["en", "ge", "de"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const seg = publicLocalePathSegment(raw);
  const isDE = seg === "de";
  const title = isDE ? "Termin buchen — Kostenlose Datenerfassungs-Beratung | DataEntry Pro" : "Book a Meeting — Free Data Entry Consultation | DataEntry Pro";
  const description = isDE
    ? "Buchen Sie eine kostenlose 15-minütige Datenerfassungs-Beratung mit DataEntry Pro. Wir scopieren Ihr Projekt, bestätigen Felder & SLA und liefern eine kostenlose Probe."
    : "Schedule a free 15-minute data entry consultation with DataEntry Pro. We scope your project, confirm fields & SLA, and deliver a free sample batch.";
  const { languages } = hreflangAlternates("book-meeting");
  const canonical = absoluteUrl(`/${seg}/book-meeting`);

  return {
    title,
    description,
    keywords: isDE
      ? ["Datenerfassungs-Beratung", "Strategieanruf", "DataEntry Pro Termin", "Dateneingabe Service"]
      : ["data entry consultation", "strategy call", "DataEntry Pro meeting", "data entry service"],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isDE ? "de_DE" : "en_US",
      alternateLocale: isDE ? "en_US" : "de_DE",
      siteName: "DataEntry Pro",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DataEntry Pro — Data Entry Services" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.jpg")],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BookMeetingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!SUPPORTED_LANGS.includes(rawLang?.toLowerCase())) notFound();
  const lang = rawLang === "ge" || rawLang === "de" ? "ge" : "en";
  const isDE = lang === "ge";
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: isDE ? "Startseite" : "Home", href: `/${lang}` },
    { label: isDE ? "Meeting buchen" : "Book Meeting", href: `/${lang}/book-meeting` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BookMeetingClient />
    </>
  );
}
