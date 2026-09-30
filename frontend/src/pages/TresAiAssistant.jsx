import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  BookOpen,
  Brain,
  Building2,
  CalendarCheck,
  ChartColumnIncreasing,
  Check,
  Clock,
  Globe,
  GraduationCap,
  Hand,
  Headphones,
  Landmark,
  Languages,
  Lock,
  MessagesSquare,
  Plane,
  Plug,
  Rocket,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import TresAiLogo, { TresAiMark } from "../components/TresAiLogo";
import tresAiVisual from "../assets/Tres AI/tres-ai-visual.webp";
import tresAiFlow from "../assets/Tres AI/tres-ai-flow.webp";
import "./TresAiAssistant.css";

/* ─────────────────────────── CONTENT ─────────────────────────── */

const heroChat = [
  { from: "user", text: "Hi! Any slots free this Saturday?" },
  { from: "ai", text: "Hi there! Saturday has 10:30 AM and 4:00 PM open. Is this for a new consultation or a follow-up?" },
  { from: "user", text: "New consultation. 10:30 works." },
  { from: "ai", text: "Done. You're booked for Sat, 10:30 AM. A confirmation is on its way to your WhatsApp." },
];

const capabilities = [
  { value: "24/7", label: "Always on, nights, weekends and holidays" },
  { value: "Seconds", label: "To first reply, on every message" },
  { value: "4+", label: "Channels from one assistant" },
  { value: "Multilingual", label: "Replies in your customer's language" },
];

const problems = [
  "Inquiries after closing time wait until morning, and go cold.",
  "Your team answers the same twenty questions all day.",
  "Leads arrive with no idea of budget, need or urgency.",
  "Booking takes six messages of back-and-forth.",
  "Nobody follows up after the first conversation.",
];

const solutions = [
  "Instant replies at 2 AM, with the same quality as 2 PM.",
  "FAQs, pricing and policies answered from your own knowledge base.",
  "Every lead qualified and scored before it reaches your team.",
  "Real availability offered, booked and confirmed inside the chat.",
  "Reminders and follow-ups sent automatically, on schedule.",
];

const features = [
  {
    icon: MessagesSquare,
    title: "Conversational front desk",
    text: "Natural, on-brand conversations that understand what people mean, not rigid button menus. TRES greets, answers and guides every visitor like your best receptionist.",
    wide: true,
  },
  {
    icon: CalendarCheck,
    title: "Smart booking",
    text: "Checks live availability, books, reschedules and sends confirmations without a human in the loop.",
  },
  {
    icon: Target,
    title: "Lead qualification",
    text: "Asks the right questions, scores intent and routes hot leads straight to your sales team.",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    text: "Answers from your documents, FAQs and policies, with content you control and approve.",
  },
  {
    icon: BellRing,
    title: "Automated follow-ups",
    text: "Reminders, no-show recovery and re-engagement messages that bring customers back.",
  },
  { icon: UserCheck, title: "Human handoff", text: "Passes complex conversations to your team with the full context. Never a dead end." },
  {
    icon: Globe,
    title: "One assistant, every channel",
    text: "Website chat, WhatsApp, Instagram and Messenger share one brain, one memory and one tone of voice.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Conversation insights",
    text: "See what customers ask, where leads come from and which conversations convert.",
  },
];

const journey = [
  { icon: Hand, step: "01", title: "Greet", text: "“Hi” gets an instant, friendly reply on any channel." },
  { icon: Brain, step: "02", title: "Understand", text: "Detects intent: a question, a booking, pricing or a complaint." },
  { icon: Target, step: "03", title: "Qualify", text: "Collects name, need, budget and timing, naturally." },
  { icon: Sparkles, step: "04", title: "Recommend", text: "Suggests the right service or package for their need." },
  { icon: CalendarCheck, step: "05", title: "Book", text: "Offers real slots, confirms and adds it to your calendar." },
  { icon: BellRing, step: "06", title: "Follow up", text: "Reminders that cut no-shows, plus feedback and re-engagement." },
];

const setupSteps = [
  { icon: Plug, title: "Connect your channels", text: "Add the website widget and link WhatsApp, Instagram and your calendar." },
  {
    icon: BookOpen,
    title: "Train it on your business",
    text: "Share your services, pricing, FAQs and policies. We shape the tone to match your brand.",
  },
  { icon: Rocket, title: "Go live and improve", text: "Review conversations, refine answers and watch the bookings arrive." },
];

// Sample conversation. `reveals` lists the captured fields that appear once that message is shown.
const conversation = [
  { from: "user", text: "Hi" },
  { from: "ai", text: "Hi there! Welcome to BrightSmile Dental. How can I help you today?", reveals: ["channel"] },
  { from: "user", text: "How much is teeth whitening?" },
  {
    from: "ai",
    text: "Professional whitening starts at ₹6,500 and takes about 60 minutes. Would you like a consultation first, or go straight to a whitening session?",
    reveals: ["intent"],
  },
  { from: "user", text: "Whitening session. Anything free this week?" },
  { from: "ai", text: "Sure! I have Thu 11:00 AM, Fri 5:30 PM or Sat 10:00 AM. Which works best for you?", reveals: ["service"] },
  { from: "user", text: "Friday evening" },
  { from: "ai", text: "Great choice. May I have your name and phone number to confirm?" },
  { from: "user", text: "Arjun, 98470 12345" },
  {
    from: "ai",
    text: "You're all set, Arjun. Teeth whitening on Fri at 5:30 PM is confirmed. I've sent the details on WhatsApp and will remind you the day before.",
    reveals: ["lead", "score", "booking", "followup"],
  },
];

const capturedFields = [
  { key: "channel", label: "Channel", value: "WhatsApp" },
  { key: "intent", label: "Intent", value: "Pricing → Booking" },
  { key: "service", label: "Service", value: "Teeth whitening" },
  { key: "lead", label: "Lead", value: "Arjun · +91 98••• ••345" },
  { key: "score", label: "Lead score", value: "Hot · 92 / 100", accent: true },
  { key: "booking", label: "Booking", value: "Fri, 5:30 PM · Confirmed", accent: true },
  { key: "followup", label: "Follow-up", value: "Reminder set for Thu, 6:00 PM" },
];

const industries = [
  { icon: Stethoscope, title: "Healthcare & clinics", text: "Appointment booking, reminders and pre-visit questions." },
  { icon: Building2, title: "Real estate", text: "Qualify buyers by budget and location, then schedule site visits." },
  { icon: GraduationCap, title: "Education", text: "Admission inquiries, course details and counselling sessions." },
  { icon: ShoppingBag, title: "Retail & e-commerce", text: "Product questions, order status, returns and restock alerts." },
  { icon: Landmark, title: "Finance & lending", text: "Eligibility checks, document lists and branch callbacks." },
  { icon: Plane, title: "Hospitality & travel", text: "Reservations, packages and guest requests around the clock." },
];

const channels = [
  "Website chat",
  "WhatsApp Business",
  "Instagram DMs",
  "Facebook Messenger",
  "Google Calendar",
  "Your CRM",
  "Email",
  "Custom APIs",
];

const benefits = [
  { icon: Zap, title: "Never miss a lead", text: "Every inquiry answered in seconds, day or night." },
  { icon: Users, title: "Lighter workload", text: "Your team only handles the conversations that need a human." },
  { icon: TrendingUp, title: "Faster sales cycles", text: "Leads arrive qualified, scored and with full context." },
  { icon: Sparkles, title: "Consistent experience", text: "The same tone, accuracy and policy in every conversation." },
  { icon: ShieldCheck, title: "Secure by design", text: "Built with Tresvance's security-first engineering. Your data stays yours." },
  { icon: Languages, title: "Speaks their language", text: "Multilingual conversations for customers across regions." },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TRES AI Assistant",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, WhatsApp, Instagram, Facebook Messenger",
  url: "https://tresvance.com/tres-ai-assistant",
  description:
    "TRES AI Assistant is an AI business assistant by Tresvance that handles customer conversations from greeting to booking: lead qualification, 24/7 support, appointment booking and automated follow-ups across website chat, WhatsApp and social channels.",
  featureList: [
    "AI chat front desk",
    "Appointment booking",
    "Lead qualification and scoring",
    "24/7 customer support",
    "Automated follow-ups",
    "Human handoff",
    "Omnichannel: website, WhatsApp, Instagram, Messenger",
    "Conversation analytics",
  ],
  image: "https://tresvance.com/og-tres-ai.jpg",
  publisher: { "@type": "Organization", name: "Tresvance", url: "https://tresvance.com/" },
};

/* ─────────────────────────── HELPERS ─────────────────────────── */

const viewport = { once: true, margin: "0px 0px -80px 0px" };

const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const Tag = Motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </Tag>
  );
};

const SectionHeading = ({ eyebrow, title, text, center = false }) => (
  <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#06A3DA]">{eyebrow}</p>
    <h2 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">{title}</h2>
    {text && <p className="mt-6 text-lg font-light leading-relaxed text-white/60">{text}</p>}
  </Reveal>
);

const ChatBubble = ({ from, text }) => (
  <div className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
    {from === "ai" && (
      <span className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10">
        <TresAiMark size={18} title="" />
      </span>
    )}
    <p
      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[0.92rem] leading-relaxed ${
        from === "user" ? "rounded-br-md bg-[#06A3DA] text-white" : "rounded-bl-md border border-white/10 bg-white/[0.05] text-white/90"
      }`}
    >
      {text}
    </p>
  </div>
);

const TypingBubble = () => (
  <div className="flex justify-start">
    <span className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10">
      <TresAiMark size={18} title="" />
    </span>
    <span
      className="tres-typing flex items-center gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.05] px-4 py-3.5"
      aria-label="TRES AI is typing"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
    </span>
  </div>
);

const ChatHeader = ({ subtitle }) => (
  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10">
        <TresAiMark size={22} title="" />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">TRES AI Assistant</p>
        <p className="flex items-center gap-1.5 text-xs text-white/50">
          <span className="tres-live-dot inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {subtitle}
        </p>
      </div>
    </div>
    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-white/40">AI</span>
  </div>
);

/* Plays the sample conversation message by message once it scrolls into view. */
const ConversationDemo = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "0px 0px -150px 0px" });
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return undefined;
    const timers = [];
    let t = 500;
    conversation.forEach((msg, i) => {
      if (msg.from === "ai") {
        timers.push(setTimeout(() => setTyping(true), t));
        t += 1200;
      }
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setShown(i + 1);
        }, t),
      );
      t += msg.from === "ai" ? 1100 : 900;
    });
    return () => timers.forEach(clearTimeout);
  }, [inView, reduceMotion, run]);

  const visible = reduceMotion ? conversation.length : shown;
  const done = visible === conversation.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
  }, [visible, typing, reduceMotion]);

  const revealed = new Set(conversation.slice(0, visible).flatMap((m) => m.reveals || []));

  const replay = () => {
    setShown(0);
    setTyping(false);
    setRun((r) => r + 1);
  };

  return (
    <div ref={sectionRef} className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
      {/* Chat window */}
      <div className="tres-glass flex h-[560px] flex-col overflow-hidden rounded-[1.75rem]">
        <ChatHeader subtitle="Online · BrightSmile Dental on WhatsApp" />
        <div ref={scrollRef} className="tres-chat-scroll flex-1 space-y-3 overflow-y-auto px-4 py-5 sm:px-5" aria-live="polite">
          {conversation.slice(0, visible).map((msg, i) => (
            <Motion.div
              key={`${run}-${i}`}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ChatBubble from={msg.from} text={msg.text} />
            </Motion.div>
          ))}
          {typing && <TypingBubble />}
        </div>
        <div className="flex items-center gap-3 border-t border-white/10 px-4 py-3">
          <span className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/30">
            Type a message…
          </span>
          <button
            type="button"
            onClick={replay}
            disabled={!done}
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-white/80 transition-colors hover:border-[#06A3DA] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <RotateCcw size={14} /> Replay
          </button>
        </div>
      </div>

      {/* What the assistant captured */}
      <div className="tres-card tres-static flex flex-col rounded-[1.75rem] p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Captured by TRES</p>
          <span
            className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest transition-colors duration-500 ${
              done ? "bg-[#06A3DA]/15 text-[#06A3DA]" : "bg-white/5 text-white/40"
            }`}
          >
            {done ? "Synced to CRM" : "Listening…"}
          </span>
        </div>
        <dl className="mt-6 flex-1 divide-y divide-white/[0.06]">
          {capturedFields.map((field) => {
            const on = revealed.has(field.key);
            return (
              <div key={field.key} className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-sm text-white/45">{field.label}</dt>
                <dd
                  className={`text-right text-sm font-medium transition-all duration-500 ${
                    on ? (field.accent ? "text-[#06A3DA]" : "text-white") : "text-white/15"
                  }`}
                >
                  {on ? field.value : "—"}
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="mt-6 text-sm leading-relaxed text-white/45">
          One friendly conversation became a qualified lead, a confirmed booking and a scheduled reminder, with nobody on your team lifting
          a finger.
        </p>
      </div>
    </div>
  );
};

/* ─────────────────────────── PAGE ─────────────────────────── */

const TresAiAssistant = () => {
  return (
    <main className="tres-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden px-6 pb-24 pt-32 md:px-16 md:pb-32 md:pt-40">
        <div className="tres-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="tres-glow pointer-events-none absolute -right-40 top-10 -z-10 h-[640px] w-[640px] md:right-0" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <TresAiLogo className="h-9 w-auto sm:h-11" />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
                <Sparkles size={14} className="text-[#06A3DA]" /> New from Tresvance &middot; AI business assistant
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
                From &ldquo;Hi&rdquo; to <span className="tres-gradient-text">booked.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/60 md:text-xl">
                TRES AI Assistant greets every visitor, answers questions, qualifies leads, books appointments and follows up across your
                website, WhatsApp and social inbox. Your best front desk, never off shift.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="tres-btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Book a demo <ArrowRight size={16} />
              </Link>
              <a
                href="#conversation"
                className="tres-btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                See it in action
              </a>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/45">
                {["Trained on your business", "Human handoff built in", "Live in days, not months"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check size={14} className="text-[#06A3DA]" /> {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Hero product visual */}
          <Reveal delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="tres-glass overflow-hidden rounded-[1.75rem]">
              <ChatHeader subtitle="Online · replies instantly" />
              <div className="space-y-3 px-5 py-6">
                {heroChat.map((msg, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.45, ease: "easeOut" }}
                  >
                    <ChatBubble from={msg.from} text={msg.text} />
                  </Motion.div>
                ))}
              </div>
            </div>

            <div className="tres-float tres-glass absolute -top-12 right-6 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#06A3DA]/15 text-[#06A3DA]">
                <Target size={18} />
              </span>
              <div>
                <p className="text-xs text-white/50">Lead qualified</p>
                <p className="text-sm font-semibold text-white">Score 92 &middot; Hot</p>
              </div>
            </div>
            <div className="tres-float tres-float-delay tres-glass absolute -bottom-12 -left-4 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex md:-left-10">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-400">
                <CalendarCheck size={18} />
              </span>
              <div>
                <p className="text-xs text-white/50">Booking confirmed</p>
                <p className="text-sm font-semibold text-white">Sat &middot; 10:30 AM</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CAPABILITIES STRIP ── */}
      <section className="border-y border-white/[0.06] px-6 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {capabilities.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.08}
              className={`px-2 py-10 md:px-8 ${i % 2 === 1 ? "border-l border-white/[0.06]" : ""} ${i === 2 ? "md:border-l" : ""} ${i > 1 ? "border-t border-white/[0.06] md:border-t-0" : ""}`}
            >
              <p className="text-3xl font-medium tracking-tight text-white md:text-4xl">{item.value}</p>
              <p className="mt-2 text-sm text-white/45">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section className="relative px-6 pt-24 md:px-16 md:pt-32" aria-label="TRES AI Assistant product overview">
        <div className="tres-glow pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[900px] -translate-x-1/2 opacity-50" />
        <Reveal className="relative mx-auto max-w-7xl">
          <div className="tres-glass overflow-hidden rounded-[1.5rem] p-1.5 md:rounded-[2rem] md:p-2">
            <img
              src={tresAiVisual}
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
              alt="TRES AI Assistant chat interface answering questions, qualifying leads and scheduling bookings across website, WhatsApp, Instagram, Messenger and email"
              className="block h-auto w-full rounded-[1.1rem] md:rounded-[1.6rem]"
            />
          </div>
        </Reveal>
      </section>

      {/* ── PROBLEM / SOLUTION ── */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The problem"
            title="Every unanswered message is a customer walking to a competitor."
            text="Customers expect an answer now, on the channel they chose. Most teams can't be there every minute of every day. TRES can."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-[1.75rem] border border-white/[0.06] bg-white/[0.015] p-8 md:p-10">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                <Clock size={14} /> Without TRES
              </p>
              <ul className="mt-8 space-y-5">
                {problems.map((item) => (
                  <li key={item} className="flex gap-4 text-white/55">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/40">
                      <X size={13} />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              delay={0.1}
              className="relative overflow-hidden rounded-[1.75rem] border border-[#06A3DA]/30 bg-gradient-to-br from-[#06A3DA]/[0.12] via-[#06A3DA]/[0.03] to-transparent p-8 md:p-10"
            >
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#06A3DA]">
                <TresAiMark size={16} title="" /> With TRES AI Assistant
              </p>
              <ul className="mt-8 space-y-5">
                {solutions.map((item) => (
                  <li key={item} className="flex gap-4 text-white/90">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#06A3DA] text-white">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="px-6 pb-24 md:px-16 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Features"
            title="A complete AI business assistant, not just a chatbot."
            text="Everything a great front desk does, from the first hello to the follow-up, handled in one place."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon, title, text, wide }, i) => {
              const Icon = icon;
              return (
                <Reveal key={title} delay={(i % 3) * 0.06} className={wide ? "lg:col-span-2" : ""}>
                  <div className="tres-card h-full rounded-[1.5rem] p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#06A3DA]/10 text-[#06A3DA] ring-1 ring-[#06A3DA]/20">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-6 text-xl font-medium text-white">{title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-white/50">{text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: JOURNEY ── */}
      <section id="how-it-works" className="relative overflow-hidden border-t border-white/[0.06] px-6 py-24 md:px-16 md:py-32">
        <div className="tres-glow pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="How it works"
            title="One conversation. Six moves. Zero dropped leads."
            text="TRES carries every customer through the same proven journey, whichever channel they start on."
          />

          <Reveal className="mt-16">
            <div className="tres-glass overflow-hidden rounded-[1.5rem] p-1.5 md:rounded-[2rem] md:p-2">
              <img
                src={tresAiFlow}
                width="1672"
                height="941"
                loading="lazy"
                decoding="async"
                alt="TRES AI Assistant flow: Hi, understand, qualify, recommend, book and confirm, with lead capture, workflow automation, appointment scheduling, human handoff, 24/7 support and analytics"
                className="block h-auto w-full rounded-[1.1rem] md:rounded-[1.6rem]"
              />
            </div>
          </Reveal>

          <div className="relative mt-20">
            <div className="tres-rail absolute left-0 right-0 top-7 hidden h-px lg:block">
              <span className="tres-rail-pulse" />
            </div>
            <ol className="grid gap-10 lg:grid-cols-6 lg:gap-6">
              {journey.map(({ icon, step, title, text }, i) => {
                const Icon = icon;
                return (
                  <Reveal as="li" key={step} delay={i * 0.1} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                    {i < journey.length - 1 && <span className="absolute left-7 top-16 h-[calc(100%-1rem)] w-px bg-white/10 lg:hidden" />}
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0c0d10] text-[#06A3DA] shadow-[0_0_30px_-8px_rgba(6,163,218,0.6)]">
                      <Icon size={22} />
                    </span>
                    <div className="lg:mt-6">
                      <p className="text-xs font-semibold tracking-[0.3em] text-white/35">{step}</p>
                      <h3 className="mt-2 text-2xl font-medium text-white">{title}</h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-white/50">{text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          <div className="mt-24 grid gap-5 md:grid-cols-3">
            {setupSteps.map(({ icon, title, text }, i) => {
              const Icon = icon;
              return (
                <Reveal key={title} delay={i * 0.08}>
                  <div className="tres-card h-full rounded-[1.5rem] p-7">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
                        <Icon size={20} />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">Setup &middot; 0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-white">{title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-white/50">{text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SAMPLE CONVERSATION ── */}
      <section id="conversation" className="scroll-mt-24 border-t border-white/[0.06] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="See it in action"
            title="Watch a “Hi” turn into a booking."
            text="A real-world style conversation for a dental clinic. Alongside it, see what TRES captures and hands to your team as it happens."
          />
          <div className="mt-16">
            <ConversationDemo />
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="use-cases" className="border-t border-white/[0.06] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Use cases" title="Built for businesses that live on conversations." />
            <Reveal className="max-w-md text-lg font-light leading-relaxed text-white/55">
              If your customers ask, book or buy through messages, TRES fits right in, tailored to your services and workflows.
            </Reveal>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon, title, text }, i) => {
              const Icon = icon;
              return (
                <Reveal
                  key={title}
                  delay={(i % 3) * 0.06}
                  className="group bg-[#050505] p-8 transition-colors duration-500 hover:bg-[#0a0c10] md:p-10"
                >
                  <Icon size={26} className="text-white/70 transition-colors duration-500 group-hover:text-[#06A3DA]" />
                  <h3 className="mt-8 text-xl font-medium text-white">{title}</h3>
                  <p className="mt-3 leading-relaxed text-white/50">{text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CHANNELS & INTEGRATIONS ── */}
      <section className="border-t border-white/[0.06] py-16" aria-label="Channels and integrations">
        <p className="px-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
          Works where your customers already are
        </p>
        <div className="tres-marquee-mask mt-10 overflow-hidden">
          <div className="tres-marquee-track flex w-max gap-4">
            {[...channels, ...channels].map((name, i) => (
              <span
                key={i}
                aria-hidden={i >= channels.length}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="border-t border-white/[0.06] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading center eyebrow="Benefits" title="Built for outcomes, not just conversations." />
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon, title, text }, i) => {
              const Icon = icon;
              return (
                <Reveal key={title} delay={(i % 3) * 0.06} className="border-t border-white/10 pt-8">
                  <Icon size={22} className="text-[#06A3DA]" />
                  <h3 className="mt-5 text-xl font-medium text-white">{title}</h3>
                  <p className="mt-2 leading-relaxed text-white/50">{text}</p>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-16 flex items-center justify-center gap-2 text-sm text-white/40">
            <Lock size={14} /> Every deployment is configured and supported by the Tresvance engineering team.
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-6 pb-28 md:px-16">
        <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#06A3DA]/25 px-8 py-20 text-center md:px-16 md:py-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#06A3DA]/[0.14] via-[#06A3DA]/[0.04] to-transparent" />
          <div className="tres-grid absolute inset-0 -z-10 opacity-60" />
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10">
            <TresAiMark size={36} />
          </span>
          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Let TRES handle the conversations. You handle the growth.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white/60">
            See TRES AI Assistant working with your own services, pricing and booking flow in a free, personalised demo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="tres-btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold">
              Book a free demo <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:contact@tresvance.com?subject=TRES%20AI%20Assistant%20demo"
              className="tres-btn-ghost inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
            >
              contact@tresvance.com
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default TresAiAssistant;
