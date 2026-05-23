import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { ToolsIntegration } from "@/components/ToolsIntegration";
import { CaseStudies } from "@/components/CaseStudies.server";
import { Blog } from "@/components/Blog";
import { FAQInteractive } from "@/components/FAQInteractive.client";
import { FinalCTA } from "@/components/FinalCTA.server";
import { SPACING } from "@/lib/constants";
import { fetchAPI, API_ENDPOINTS, normalizeLanguage } from "@/lib/api";
import { dummyFAQ } from "@/data/dummy";

export async function HomeBelowFold({ lang }: { lang: string }) {
  let faqData = dummyFAQ[lang === 'ge' ? 'ge' : 'en'];

  // Try to fetch from API
  try {
    const response = await fetchAPI(
      API_ENDPOINTS.FAQ + `?lang=${normalizeLanguage(lang)}`,
      {}
    );
    
    if (response.ok) {
      const data = await response.json();
      console.log('[FAQ] API Response:', data);
      
      // Handle both array and object responses
      const faqList = Array.isArray(data) ? data : data.faqs || data.data || [];
      if (faqList.length > 0) {
        faqData = faqList;
      }
    }
  } catch (error) {
    console.warn('[FAQ] Failed to fetch from API, using fallback:', error);
  }

  return (
    <>
      <div className={SPACING.container}>
        <HowItWorks />
        <Services />
        <Pricing />
        <ToolsIntegration />
        <Testimonials />
        <Blog />
        <CaseStudies lang={lang} />
        <FAQInteractive faqs={faqData} lang={lang} />
      </div>
      <FinalCTA lang={lang} />
    </>
  );
}





