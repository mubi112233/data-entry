"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getCopy } from "@/lib/copy";
import { SPACING } from "@/lib/constants";
import { fetchAPIClient, API_ENDPOINTS, normalizeLanguage } from "@/lib/api";
import { dummyBlogs } from "@/data/dummy";

const decodeHtml = (value: string) => {
  if (!value) return value;
  if (!value.includes("&")) return value;
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
};

const slugify = (title: string | undefined | null) => {
  if (!title) return "untitled";
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

export const Blog = () => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/ge") || pathname.startsWith("/de") ? "ge" : "en";
  const copy = getCopy(currentLang, "blog");
  
  const [posts, setPosts] = useState<any[]>(dummyBlogs[currentLang as keyof typeof dummyBlogs]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetchAPIClient(
          API_ENDPOINTS.BLOGS + `?lang=${normalizeLanguage(currentLang)}`,
          {}
        );
        
        if (response.ok) {
          const data = await response.json();
          console.log('[Blog] API Response:', data);
          
          // Handle both array and object responses
          const blogList = Array.isArray(data) ? data : data.blogs || data.data || [];
          if (blogList.length > 0) {
            setPosts(blogList.map((p: any) => ({
              ...p,
              blogId: p.blogId ?? p._id,
              title: p.title ?? "",
              excerpt: p.excerpt ?? p.description ?? "",
              category: p.category ?? "",
              date: p.date ?? p.publishedAt ?? "",
              readTime: p.readTime ?? "",
              author: p.author ?? "",
            })));
          }
        }
      } catch (error) {
        console.warn('[Blog] Failed to fetch from API, using fallback:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [currentLang]);

  return (
    <motion.section
      id="blog"
      className={`relative ${SPACING.section} bg-background overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[100px] md:blur-[150px]" />

      <div className={`container mx-auto ${SPACING.container} relative z-10`}>
        <div className="mb-12 sm:mb-16 lg:mb-20 text-left max-w-5xl">
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-4 shadow-md">
            {copy.badge}
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight"
            dangerouslySetInnerHTML={{ __html: decodeHtml(copy.heading) }}
          />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl leading-relaxed">
            {copy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {posts.map((post, index: number) => (
            <motion.div
              key={`${post.blogId ?? post._id ?? index}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/${currentLang}/blog/${slugify(post.title)}-${post.blogId ?? post._id ?? index}`}
                className="group bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 w-full block h-full"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-52 md:h-48 lg:h-56 overflow-hidden">
                  {post.image ? (
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted" />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground mb-3 sm:mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-border mt-auto">
                    <span className="text-xs sm:text-sm text-muted-foreground truncate">
                      {copy.by} {post.author}
                    </span>
                    <div className="flex items-center gap-1 sm:gap-2 text-primary font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all flex-shrink-0">
                      <span className="hidden sm:inline">{copy.readMore}</span>
                      <span className="sm:hidden">{copy.read}</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};


