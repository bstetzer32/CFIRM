// JSON-LD Schema generators for comprehensive SEO
// All content is factual - no fake reviews, ratings, or unverifiable claims

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  region: string;
  city: string;
  state: string;
  email?: string;
  phone?: string;
}

export function getSiteConfig(): SiteConfig {
  return {
    name: "Connor McNulty Aviation",
    description:
      "Professional flight training in Cincinnati, Ohio. Become a pilot with personalized instruction from a Certified Flight Instructor.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL || "https://connormcnultyaviation.com",
    region: "Greater Cincinnati",
    city: "Cincinnati",
    state: "Ohio",
    email: "contact@connormcnultyaviation.com",
  };
}

// LocalBusiness schema - the primary business entity
export function generateOrganizationSchema() {
  const config = getSiteConfig();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${config.url}/#organization`,
    name: config.name,
    description: config.description,
    url: config.url,
    logo: `${config.url}/logo.png`,
    image: `${config.url}/og-image.jpg`,
    email: config.email,
    areaServed: [
      {
        "@type": "City",
        name: "Cincinnati",
        containedInPlace: {
          "@type": "State",
          name: "Ohio",
          containedInPlace: {
            "@type": "Country",
            name: "United States",
          },
        },
      },
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 39.1031,
          longitude: -84.5120,
        },
        geoRadius: "50 miles",
      },
    ],
    serviceType: [
      "Flight Training",
      "Private Pilot Training",
      "Instrument Rating Training",
      "Commercial Pilot Training",
      "Discovery Flights",
    ],
    knowsAbout: [
      "Aviation",
      "Flight Training",
      "Pilot Certification",
      "FAA Regulations",
      "Single Engine Aircraft",
      "Instrument Flying",
    ],
    sameAs: [],
  };
}

// Person schema for Connor McNulty as the CFI
export function generatePersonSchema() {
  const config = getSiteConfig();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${config.url}/#instructor`,
    name: "Connor McNulty",
    jobTitle: "Certified Flight Instructor",
    worksFor: {
      "@type": "LocalBusiness",
      "@id": `${config.url}/#organization`,
      name: config.name,
    },
    knowsAbout: [
      "Flight Training",
      "Aviation Safety",
      "Private Pilot Training",
      "Instrument Rating",
      "Commercial Pilot Training",
      "Single Engine Aircraft",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "FAA Certification",
      name: "Certified Flight Instructor (CFI)",
    },
  };
}

// WebSite schema with search action
export function generateWebsiteSchema() {
  const config = getSiteConfig();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${config.url}/#website`,
    name: config.name,
    description: config.description,
    url: config.url,
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${config.url}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${config.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Main flight training service
export function generateServiceSchema() {
  const config = getSiteConfig();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${config.url}/#service`,
    name: "Flight Training",
    description: `Professional flight training services in ${config.region}. Learn to fly with personalized one-on-one instruction.`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${config.url}/#organization`,
    },
    areaServed: {
      "@type": "State",
      name: config.region,
    },
    serviceType: "Flight Training",
    category: "Aviation Training",
  };
}

// Individual course schemas for each training program
export function generateCourseSchemas() {
  const config = getSiteConfig();

  const courses = [
    {
      name: "Private Pilot License Training",
      description:
        "Complete training program to earn your Private Pilot License (PPL). Learn the fundamentals of flight and earn the freedom to fly.",
      url: `${config.url}/#private-pilot`,
      educationalCredentialAwarded: "FAA Private Pilot Certificate",
    },
    {
      name: "Instrument Rating Training",
      description:
        "Advanced training to fly in instrument meteorological conditions. Master navigation by instruments and fly in any weather.",
      url: `${config.url}/#instrument-rating`,
      educationalCredentialAwarded: "FAA Instrument Rating",
    },
    {
      name: "Commercial Pilot Training",
      description:
        "Professional pilot training to fly for compensation. Take your skills to the next level and start your aviation career.",
      url: `${config.url}/#commercial-pilot`,
      educationalCredentialAwarded: "FAA Commercial Pilot Certificate",
    },
    {
      name: "Discovery Flight",
      description:
        "Introductory flight experience for those curious about becoming a pilot. Take the controls and see if flying is right for you.",
      url: `${config.url}/#discovery-flight`,
      educationalCredentialAwarded: null,
    },
  ];

  return courses.map((course) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": course.url,
    name: course.name,
    description: course.description,
    url: course.url,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${config.url}/#organization`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      instructor: {
        "@type": "Person",
        "@id": `${config.url}/#instructor`,
      },
    },
    ...(course.educationalCredentialAwarded && {
      educationalCredentialAwarded: course.educationalCredentialAwarded,
    }),
  }));
}

// FAQ schema - matches the FAQs on the main page exactly
export function generateFAQSchema() {
  const config = getSiteConfig();

  const faqs = [
    {
      question: "How long does it take to get a private pilot license?",
      answer:
        "Most students complete their Private Pilot License in 3-6 months, depending on how frequently they can fly. The FAA requires a minimum of 40 flight hours, though the national average is around 60-70 hours. Flying 2-3 times per week will help you progress efficiently and retain what you learn.",
    },
    {
      question: "What are the requirements to start flight training?",
      answer:
        "To begin flight training, you need to be at least 16 years old to solo and 17 to earn your private pilot certificate. You will need to obtain a student pilot certificate and a medical certificate from an FAA-designated Aviation Medical Examiner. No prior experience is necessary - everyone starts as a beginner.",
    },
    {
      question: "How much does flight training cost?",
      answer:
        "The cost of earning a Private Pilot License typically ranges from $10,000 to $15,000, depending on how quickly you progress and the type of aircraft used. This includes aircraft rental, instructor fees, ground school materials, and examination fees. We will work with you to create a training plan that fits your budget.",
    },
    {
      question: "What happens during a discovery flight?",
      answer:
        "A discovery flight is a short introductory lesson where you will experience flying firsthand. You will sit in the pilot seat, handle the controls during flight, and get a feel for what pilot training involves. It is a no-pressure way to see if flying is right for you, and the flight time counts toward your license if you decide to continue.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${config.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Article schema for blog posts
export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  const config = getSiteConfig();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${config.url}/articles/${article.slug}`,
    headline: article.title,
    description: article.description,
    url: `${config.url}/articles/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      "@id": `${config.url}/#instructor`,
      name: "Connor McNulty",
    },
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${config.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${config.url}/articles/${article.slug}`,
    },
    inLanguage: "en-US",
  };
}

// Breadcrumb schema for navigation
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// EducationalOrganization schema for the training aspect
export function generateEducationalOrganizationSchema() {
  const config = getSiteConfig();

  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${config.url}/#school`,
    name: config.name,
    description:
      "Professional flight training school offering FAA-certified pilot training programs.",
    url: config.url,
    areaServed: {
      "@type": "State",
      name: config.region,
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "FAA Part 61 Flight School",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flight Training Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Private Pilot License Training",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Instrument Rating Training",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Commercial Pilot Training",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Discovery Flight",
          },
        },
      ],
    },
  };
}

// Generate all schemas as a combined graph for maximum SEO impact
export function generateAllSchemas() {
  const courseSchemas = generateCourseSchemas();

  const removeContext = (schema: Record<string, unknown>) => {
    const cleaned = { ...schema };
    delete cleaned["@context"];
    return cleaned;
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      removeContext(generateOrganizationSchema()),
      removeContext(generatePersonSchema()),
      removeContext(generateWebsiteSchema()),
      removeContext(generateServiceSchema()),
      removeContext(generateEducationalOrganizationSchema()),
      removeContext(generateFAQSchema()),
      ...courseSchemas.map(removeContext),
    ],
  };
}
