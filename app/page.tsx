"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, Phone, Mail, MapPin, Star, ArrowRight, Menu, X, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Hero animations
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1,
      });

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Properties", href: "#properties" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div ref={heroRef}>
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Floating Navigation */}
      <nav className={`floating-nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-semibold text-white tracking-tight">
            CinCin <span className="text-[var(--accent-primary)]">YVR</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="magnetic-btn px-6 py-2.5 rounded-full bg-[var(--accent-primary)] text-black font-medium text-sm"
          >
            <span className="relative z-10">Book Call</span>
            <span className="btn-bg" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-8">
          <div className="flex flex-col gap-8 mt-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 text-xl text-[var(--accent-primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Book Call →
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0d0d0d]" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <div className="hero-text opacity-0">
            <p className="mono text-[var(--accent-primary)] text-sm tracking-widest mb-6">
              PREMIER AIRBNB CO-HOSTING • VANCOUVER
            </p>
          </div>

          <h1 className="hero-text opacity-0 text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
            Your Property.<br />
            <span className="display-serif text-[var(--accent-primary)] italic">
              Our Expertise.
            </span>
          </h1>

          <p className="hero-text opacity-0 text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Hands-off property management that transforms your Vancouver Airbnb into a 
            <span className="text-white"> high-performing</span> revenue machine.
          </p>

          <div className="hero-cta opacity-0 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="magnetic-btn group px-8 py-4 rounded-full bg-[var(--accent-primary)] text-black font-semibold text-lg inline-flex items-center gap-3"
            >
              <span className="relative z-10">Book Feasibility Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="btn-bg" />
            </a>
            <a
              href="#properties"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/5 transition-colors"
            >
              View Properties
            </a>
          </div>

          {/* Stats */}
          <div className="hero-cta opacity-0 mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">43%</p>
              <p className="text-sm text-white/50 mt-1">Higher CTR</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">67%</p>
              <p className="text-sm text-white/50 mt-1">More Favorites</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
              <p className="text-sm text-white/50 mt-1">Hands-off</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-32 px-6" ref={featuresRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="mono text-[var(--accent-primary)] text-sm tracking-widest mb-4 reveal opacity-0 translate-y-8">
              WHY CHOOSE US
            </p>
            <h2 className="text-4xl md:text-5xl text-white reveal opacity-0 translate-y-8">
              The CinCin <span className="display-serif italic text-[var(--accent-primary)]">Method</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card-hover reveal opacity-0 translate-y-8 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary)]/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <h3 className="text-xl text-white mb-3">Hands-Off Management</h3>
              <p className="text-white/60 leading-relaxed">
                We handle everything — from guest communication to cleaning coordination. 
                You enjoy passive income while we manage the daily operations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-hover reveal opacity-0 translate-y-8 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary)]/20 flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <h3 className="text-xl text-white mb-3">Designer Background</h3>
              <p className="text-white/60 leading-relaxed">
                Founded by Emily Carr University alumna. Every listing is optimized 
                for visual impact — 43% higher click-through rates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-hover reveal opacity-0 translate-y-8 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary)]/20 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <h3 className="text-xl text-white mb-3">Bilingual Expertise</h3>
              <p className="text-white/60 leading-relaxed">
                English and Mandarin. We connect with a global audience of guests 
                while helping immigrant homeowners succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[var(--bg-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="mono text-[var(--accent-primary)] text-sm tracking-widest mb-4 reveal opacity-0 translate-y-8">
                ABOUT US
              </p>
              <h2 className="text-4xl md:text-5xl text-white mb-6 reveal opacity-0 translate-y-8">
                Where <span className="display-serif italic text-[var(--accent-primary)]">Art</span> Meets Algorithm
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 reveal opacity-0 translate-y-8">
                Most Airbnb cohosting services focus on either aesthetics or analytics — 
                but rarely both. CinCin bridges that gap.
              </p>
              <p className="text-white/60 leading-relaxed mb-8 reveal opacity-0 translate-y-8">
                We merge fine arts precision with data-backed optimization to transform 
                underperforming listings into high-earning, design-driven experiences.
              </p>
              
              <div className="flex flex-wrap gap-3 reveal opacity-0 translate-y-8">
                {["Emily Carr Alum", "Bilingual EN/Mandarin", "Vancouver Local", "Full-Service"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-8">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-deep)] border border-[var(--border-subtle)] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-6xl mb-2">🎨</p>
                      <p className="text-white/40">Cindy L.</p>
                      <p className="text-sm text-[var(--accent-primary)]">Founder</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-[var(--accent-primary)]/30 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--accent-primary)]/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="mono text-[var(--accent-primary)] text-sm tracking-widest mb-4 reveal opacity-0 translate-y-8">
              WHAT WE DO
            </p>
            <h2 className="text-4xl md:text-5xl text-white reveal opacity-0 translate-y-8">
              End-to-End <span className="display-serif italic text-[var(--accent-primary)]">Management</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Listing Optimization", desc: "Professional photos, SEO-informed copy, multi-platform distribution" },
              { title: "Dynamic Pricing", desc: "Real-time data adjustments for maximum occupancy and revenue" },
              { title: "Guest Communication", desc: "24/7 support, check-ins, and exceptional guest experiences" },
              { title: "Cleaning & Maintenance", desc: "Professional scheduling and property upkeep" },
            ].map((service, i) => (
              <div 
                key={service.title}
                className="reveal opacity-0 translate-y-8 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50 transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl text-white mb-3">{service.title}</h3>
                <p className="text-white/60">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[var(--bg-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="mono text-[var(--accent-primary)] text-sm tracking-widest mb-4 reveal opacity-0 translate-y-8">
              GUEST LOVE
            </p>
            <h2 className="text-4xl md:text-5xl text-white reveal opacity-0 translate-y-8">
              Trusted by <span className="display-serif italic text-[var(--accent-primary)]">Owners</span> & Guests
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "The hosts were accommodating and communicative throughout the process. Located in a perfect, quiet neighborhood.", author: "Anna, Toronto" },
              { quote: "Cindy was so kind and accommodating. The space was cozy, spotless, and full of thoughtful touches.", author: "Azadeh, Toronto" },
              { quote: "Perfectly peaceful and safe for solo travelers. The hospitality went above and beyond!", author: "Harleen, Vancouver" },
            ].map((testimonial, i) => (
              <div 
                key={i}
                className="reveal opacity-0 translate-y-8 p-8 rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[var(--accent-primary)] fill-[var(--accent-primary)]" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-sm text-[var(--accent-primary)]">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="mono text-[var(--accent-primary)] text-sm tracking-widest mb-4 reveal opacity-0 translate-y-8">
              QUESTIONS
            </p>
            <h2 className="text-4xl md:text-5xl text-white reveal opacity-0 translate-y-8">
              Frequently <span className="display-serif italic text-[var(--accent-primary)]">Asked</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "What does an Airbnb co-hosting company actually do?", a: "A Vancouver co-host handles day-to-day operations — listing setup, booking management, guest communication, cleaning coordination, and maintenance. The goal is hassle-free hosting while improving reviews, occupancy, and rates." },
              { q: "How do you maximize short-term rental income?", a: "We use real-time market insights, seasonal pricing strategies, and occupancy optimization. Continuous revenue adjustments keep your property performing as market conditions change." },
              { q: "What's included in full-service management?", a: "Everything — optimized listing and marketing, professional photos, calendar management, 24/7 guest support, cleaning coordination, and maintenance oversight. Complete peace of mind." },
            ].map((faq, i) => (
              <details 
                key={i} 
                className="reveal opacity-0 translate-y-8 group p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] cursor-pointer"
              >
                <summary className="flex justify-between items-center list-none text-white font-medium">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-[var(--accent-primary)] group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-white/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-[var(--bg-deep)] to-[var(--bg-card)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mono text-[var(--accent-primary)] text-sm tracking-widest mb-4 reveal opacity-0 translate-y-8">
            GET STARTED
          </p>
          <h2 className="text-4xl md:text-6xl text-white mb-6 reveal opacity-0 translate-y-8">
            Ready to <span className="display-serif italic text-[var(--accent-primary)]">Transform</span> Your Property?
          </h2>
          <p className="text-xl text-white/60 mb-12 reveal opacity-0 translate-y-8">
            Book a free feasibility call. We'll analyze your property and show you the potential.
          </p>
          
          <div className="reveal opacity-0 translate-y-8">
            <a
              href="mailto:hello@cincinyvrcohost.com"
              className="magnetic-btn inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[var(--accent-primary)] text-black font-semibold text-xl"
            >
              <Mail className="w-5 h-5" />
              <span className="relative z-10">Book Your Call</span>
              <span className="btn-bg" />
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-sm text-white/40 reveal opacity-0 translate-y-8">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Vancouver, BC
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> Local Expertise
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-2xl font-semibold text-white">
                CinCin <span className="text-[var(--accent-primary)]">YVR</span>
              </p>
              <p className="text-white/40 text-sm mt-2">Premium Airbnb Co-Hosting in Vancouver</p>
            </div>

            <div className="flex gap-8 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="mono text-white/40">System Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
