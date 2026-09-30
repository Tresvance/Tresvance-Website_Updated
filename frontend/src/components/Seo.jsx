import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://tresvance.com";
const SITE_NAME = "Tresvance";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

// Per-route metadata. Titles stay under ~60 chars and descriptions under ~160
// so search engines show them without truncation.
const PAGES = {
  "/": {
    title: "Tresvance | Software, AI, IoT & Cybersecurity Company in Kochi",
    description:
      "Tresvance is a Kochi-based IT company delivering full-stack software engineering, AI development, IoT solutions, cybersecurity, digital marketing and managed IT services worldwide.",
  },
  "/about-us": {
    title: "About Tresvance | IT Solutions & Managed Services, Kochi",
    description:
      "Learn about Tresvance, a Kochi, Kerala IT company building custom software, AI, IoT and secure digital products for clients in India, North America and the Middle East.",
  },
  "/our-works": {
    title: "Our Works | Web, App & Software Projects by Tresvance",
    description:
      "Explore Tresvance projects: web apps, e-commerce platforms, clinic management systems and custom enterprise software built for growing businesses.",
  },
  "/choose-us": {
    title: "Why Choose Tresvance | Trusted Software Development Partner",
    description:
      "Why businesses choose Tresvance: cutting-edge engineering expertise, zero-trust security, full code ownership, agile delivery and scalable AI and data solutions.",
  },
  "/join-us": {
    title: "Careers at Tresvance | Software & AI Jobs in Kochi",
    description:
      "Join Tresvance in Kochi and build software, AI, IoT and cybersecurity solutions with a team that values learning, collaboration and growth.",
  },
  "/tres-ai-assistant": {
    title: "TRES AI Assistant | AI Chatbot for Bookings & Leads",
    description:
      "TRES AI Assistant by Tresvance handles customer chats from hello to booking: 24/7 support, lead qualification, appointment booking and follow-ups on web and WhatsApp.",
    image: `${SITE_URL}/og-tres-ai.jpg`,
  },
  "/contact": {
    title: "Contact Tresvance | Get a Software Development Quote",
    description:
      "Contact Tresvance in Kochi, Kerala for software development, AI, IoT, cybersecurity, digital marketing or managed IT services. Call +91 89211 87643.",
  },
};

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const page = PAGES[path];
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    const image = page?.image || DEFAULT_IMAGE;

    // Unknown routes render no page content, so keep them out of the index.
    if (!page) {
      document.title = `Page not found | ${SITE_NAME}`;
      setMeta("name", "robots", "noindex, follow");
      return;
    }

    document.title = page.title;
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("name", "description", page.description);
    setCanonical(url);

    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);

    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", image);
  }, [pathname]);

  return null;
};

export default Seo;
