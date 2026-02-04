'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Play,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
  Disc3,
  Mail,
  Phone,
  Download
} from 'lucide-react';

import {
  latestReleases,
  fanFavorites,
  socialStats,
  playlistGoals,
  bookingContact,
  navItems,
  featuredVideos,
  SPOTIFY_ARTIST_ID,
  SPOTIFY_ARTIST_URL,
  CAREER_STREAMS,
  CAREER_STREAMS_FULL,
} from '../constants/data';
import { Youtube } from 'lucide-react';

export default function FilmoreBio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent scale on first render
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  // Scale effect disabled on mobile for performance
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  useEffect(() => {
    // Detect mobile/tablet devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile(); // Check immediately on mount
    window.addEventListener('resize', checkMobile);
    
    setIsLoaded(true);
    
    // Intersection Observer for section tracking
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Mobile-optimized viewport settings for smoother scroll animations
  const mobileViewport = { once: true, margin: "-50px" };
  const desktopViewport = { once: true, margin: "-100px" };
  const viewportConfig = isMobile ? mobileViewport : desktopViewport;
  
  // Simplified animation for mobile
  const mobileTransition = { duration: 0.4, ease: "easeOut" };
  const desktopTransition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] };
  const transitionConfig = isMobile ? mobileTransition : desktopTransition;

  return (
    <div ref={containerRef} className="relative">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: isMobile ? 0.3 : 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="relative z-50"
          >
            <img 
              src="/images/f-only-white.png" 
              alt="FILMORE" 
              className="h-12 w-auto"
            />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link font-display text-sm tracking-widest uppercase transition-colors ${
                  activeSection === item.id ? 'text-filmore-gold' : 'text-filmore-cream hover:text-filmore-tan'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 bg-filmore-dark/98 backdrop-blur-lg h-screen flex items-center justify-center md:hidden"
            >
              <div className="flex flex-col items-center gap-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-2xl tracking-widest uppercase text-filmore-cream hover:text-filmore-gold transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ 
            opacity: heroOpacity,
            // Only apply scale on desktop - it causes lag on mobile/tablet
            scale: isMobile ? 1 : heroScale
          }}
          className="absolute inset-0 will-change-[opacity,transform]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-filmore-dark/30 via-transparent to-filmore-dark z-10" />
          <img
            src="/images/filmore-hero.jpg"
            alt="FILMORE"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 15 : 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            <motion.p 
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={isLoaded ? { opacity: 1, letterSpacing: '0.3em' } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="font-display text-sm md:text-base text-filmore-tan mb-4 tracking-[0.3em] uppercase"
            >
              Rising Country Music Artist from Wildwood, Missouri
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: 0.7 }}
              className="flex justify-center"
            >
              <img 
                src="/images/filmore-logo-white.png" 
                alt="FILMORE" 
                className="max-h-16 md:max-h-24 lg:max-h-32 w-auto max-w-[80vw] object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: 1.2 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href={SPOTIFY_ARTIST_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Disc3 className="w-5 h-5" />
                Listen Now
              </a>
              <a 
                href="/FILMORE_BIO_2025.pdf"
                download="FILMORE_BIO_2025.pdf"
                className="btn-outline flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: isMobile ? 0.3 : 0.8, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-filmore-tan"
            >
              <span className="font-display text-xs tracking-widest uppercase">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mr. 305 Logo */}
        <motion.a
          href="https://mr305.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: isMobile ? 0.3 : 0.8, delay: 1.8 }}
          className="absolute bottom-6 right-6 z-20"
        >
          <img 
            src="/images/mr305-logo.png" 
            alt="Mr. 305 Records" 
            className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 px-6 min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-1.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-filmore-dark/80" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 15 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: isMobile ? 0.3 : 0.8 }}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            {/* Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.3 : 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src="/images/bg-1.jpg"
                    alt="FILMORE"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-filmore-gold/30 rounded-sm -z-10" />
              </motion.div>
            </div>

            {/* Bio */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.25 : 0.6 }}
                className="inline-block font-display text-filmore-gold text-sm tracking-[0.3em] uppercase mb-4"
              >
                About The Artist
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.25 : 0.6, delay: 0.1 }}
                className="font-accent text-5xl md:text-6xl mb-6"
              >
                FILMORE
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.25 : 0.6, delay: 0.2 }}
                className="space-y-4 text-filmore-cream/80 leading-relaxed"
              >
                <p>
                  <span className="text-filmore-gold font-semibold">FILMORE</span>, a native of <span className="text-filmore-tan">Wildwood, Missouri</span>, is making waves in the country music scene. As the <span className="text-filmore-gold">first independent artist to be featured on Spotify's Hot Country cover</span>, he has rapidly amassed over <span className="text-filmore-gold font-semibold">481 million career streams</span>. Recently signed to <span className="text-filmore-gold">Pitbull's Mr. 305 Records</span>, FILMORE continues to shatter barriers between Country and Pop.
                </p>
                <p>
                  Known for his catchy hooks and clever lyrics, FILMORE has captured the attention of major outlets such as <span className="text-filmore-tan">The New York Times</span>, <span className="text-filmore-tan">Rolling Stone Country</span>, NBC's <span className="text-filmore-tan">"TODAY" show</span>, <span className="text-filmore-tan">The Bobby Bones Show</span>, <span className="text-filmore-tan">CMT</span>, and Sirius XM's <span className="text-filmore-tan">"The Highway"</span>.
                </p>
                <p>
                  His electric live performances have seen him opening for notable acts like <span className="text-filmore-gold">Blake Shelton, Carrie Underwood, Dan + Shay, Brett Young, Pitbull</span>, and more. He has also delivered memorable performances at renowned festivals like <span className="text-filmore-tan">Stagecoach, CMA Fest, Windy City Smokeout, Country Thunders</span>, and more.
                </p>
                <p>
                  A first-generation American with Colombian heritage, FILMORE is gearing up to release his fourth studio album <span className="text-filmore-gold font-semibold">ATYPICAL</span>—a 21-song powerhouse dropping <span className="text-filmore-tan">February 20, 2026</span> via <span className="text-filmore-gold">Mr. 305 Records</span>, with a co-project alongside Pitbull coming later in 2026.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.25 : 0.6, delay: 0.3 }}
                className="mt-8 grid grid-cols-3 gap-4"
              >
                <div className="text-center p-4 bg-filmore-dark/50 rounded-sm border border-filmore-tan/20">
                  <div className="font-accent text-3xl text-filmore-gold">{CAREER_STREAMS}</div>
                  <div className="font-display text-xs tracking-wider text-filmore-tan uppercase mt-1">Streams</div>
                </div>
                <div className="text-center p-4 bg-filmore-dark/50 rounded-sm border border-filmore-tan/20">
                  <div className="font-accent text-3xl text-filmore-gold">#1</div>
                  <div className="font-display text-xs tracking-wider text-filmore-tan uppercase mt-1">Hot Country</div>
                </div>
                <div className="text-center p-4 bg-filmore-dark/50 rounded-sm border border-filmore-tan/20">
                  <div className="font-accent text-3xl text-filmore-gold">CMA</div>
                  <div className="font-display text-xs tracking-wider text-filmore-tan uppercase mt-1">Ambassador</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-filmore-tan/30 to-transparent" />
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative py-24 md:py-32 px-6 min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-2.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-filmore-dark/75" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-filmore-gold text-sm tracking-[0.3em] uppercase">Social Presence</span>
            <h2 className="font-accent text-5xl md:text-6xl mt-4">BY THE NUMBERS</h2>
          </motion.div>

          {/* Social Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {socialStats.map((stat, index) => (
              <motion.a
                key={stat.platform}
                href={stat.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.2 : 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-filmore-dark/80 border border-filmore-tan/20 rounded-sm p-6 text-center hover:border-filmore-gold/50 transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-sm"
                  style={{ background: stat.color }}
                />
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-filmore-tan group-hover:text-filmore-gold transition-colors" />
                <div className="font-accent text-3xl md:text-4xl text-filmore-cream group-hover:text-filmore-gold transition-colors">
                  {stat.count}
                </div>
                <div className="font-display text-xs tracking-wider text-filmore-tan uppercase mt-2">
                  {stat.label || stat.platform}
                </div>
                <ExternalLink className="absolute top-3 right-3 w-4 h-4 text-filmore-tan/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="relative py-24 md:py-32 px-6 min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-3.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-filmore-dark/80" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Latest Releases */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-filmore-gold text-sm tracking-[0.3em] uppercase">Discography</span>
            <h2 className="font-accent text-5xl md:text-6xl mt-4">LATEST RELEASES</h2>
          </motion.div>

          {/* Spotify Embed */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <iframe 
              className="spotify-embed w-full"
              style={{ borderRadius: '12px' }}
              src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`} 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            />
          </motion.div>

          {/* YEEHAW Banner */}
          <motion.a
            href="https://open.spotify.com/track/3zvpqxPFQxtFLD1FdCBiOf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6, delay: 0.3 }}
            className="block mb-16 group"
          >
            <img
              src="/images/YEEHAW-FxP-Banner.jpg"
              alt="YEEHAW featuring Pitbull"
              className="w-full rounded-sm border border-filmore-tan/20 group-hover:border-filmore-gold/50 transition-all"
            />
          </motion.a>

          {/* Album Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {latestReleases.map((album, index) => (
              <motion.a
                key={album.title}
                href={album.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.2 : 0.5, delay: index * 0.1 }}
                className="album-card group relative"
              >
                <div className="aspect-square rounded-sm overflow-visible relative border border-filmore-tan/20 hover:border-filmore-gold/50 transition-all">
                  <div className="absolute inset-0 rounded-sm overflow-hidden">
                    <img 
                      src={album.image} 
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="album-overlay absolute inset-0 bg-filmore-gold/20 opacity-0 flex items-center justify-center transition-opacity duration-300">
                      <Play className="w-12 h-12 text-filmore-cream" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 left-0 right-0 p-3 pt-8 bg-gradient-to-t from-filmore-dark via-filmore-dark/90 to-transparent rounded-b-sm">
                    <div className="font-display text-sm text-filmore-cream tracking-wider">{album.title}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <Disc3 className="w-3 h-3 text-[#1DB954]" />
                      <span className="text-xs text-filmore-tan/60">Spotify</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="divider" />

          {/* Fan Favorites */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-display text-filmore-gold text-sm tracking-[0.3em] uppercase">Fan Favorites</span>
            <h3 className="font-accent text-4xl md:text-5xl mt-4">TOP TRACKS</h3>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {fanFavorites.map((track, index) => (
              <motion.a
                key={track.title}
                href={track.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="group flex items-center gap-4 p-4 bg-filmore-dark/50 border border-filmore-tan/20 rounded-sm hover:border-filmore-gold/50 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-filmore-gold/20 flex items-center justify-center group-hover:bg-filmore-gold/40 transition-colors">
                  <Play className="w-4 h-4 text-filmore-gold" />
                </div>
                <span className="font-display text-sm tracking-wider text-filmore-cream group-hover:text-filmore-gold transition-colors">
                  {track.title}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative py-24 md:py-32 px-6 min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-4.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-filmore-dark/75" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-filmore-gold text-sm tracking-[0.3em] uppercase">Visual Content</span>
            <h2 className="font-accent text-5xl md:text-6xl mt-4">FEATURED VIDEOS</h2>
          </motion.div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuredVideos.map((video, index) => (
              <motion.a
                key={video.title}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.2 : 0.5, delay: index * 0.1 }}
                className="group block"
              >
                <div className="aspect-video bg-filmore-dark rounded-sm overflow-hidden relative">
                  <img 
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-filmore-dark/30 group-hover:bg-filmore-dark/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-filmore-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-filmore-dark ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h4 className="font-display text-lg mt-4 text-filmore-cream tracking-wider group-hover:text-filmore-gold transition-colors">{video.title}</h4>
              </motion.a>
            ))}
          </div>

          {/* YouTube Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a 
              href="https://www.youtube.com/@FILMOREMUSIC/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Youtube className="w-5 h-5" />
              View All Videos
            </a>
          </motion.div>
        </div>
      </section>

      {/* ATYPICAL Section */}
      <section id="atypical" className="relative py-24 md:py-32 px-6 min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-5.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-filmore-dark/80" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Album Art - Using actual Atypical artwork */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.3 : 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-sm overflow-hidden relative group shadow-2xl">
                <img 
                  src="/images/atypical-album.png" 
                  alt="ATYPICAL Album Cover"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-filmore-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Floating vinyl effect */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-filmore-dark border-4 border-filmore-gold/30 hidden md:block"
              >
                <div className="absolute inset-4 rounded-full bg-filmore-gold/10" />
                <div className="absolute inset-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-filmore-gold" />
              </motion.div>
            </motion.div>

            {/* Album Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: 0.2 }}
            >
              <span className="font-display text-filmore-gold text-sm tracking-[0.3em] uppercase">New Album</span>
              <h2 className="font-accent text-6xl md:text-7xl mt-4 mb-6">ATYPICAL</h2>
              
              <p className="text-filmore-cream/80 leading-relaxed mb-8">
                FILMORE's fourth studio album <span className="text-filmore-gold font-semibold">'ATYPICAL'</span> drops <span className="text-filmore-tan">February 20, 2026</span>—his first full-length under <span className="text-filmore-tan">Mr. 305 Records</span>. The 21-song powerhouse stacks hard-hitting hooks with a bold mosaic of styles: Outlaw Country, Hard-Rock, Hip-Hop, Dancehall-Pop, and more. A co-project with Pitbull, <span className="text-filmore-gold">"TBD Volume 1"</span>, is also set to release in 2026.
              </p>

              {/* Playlist Spots */}
              <div className="mb-8">
                <h4 className="font-display text-sm tracking-[0.2em] uppercase text-filmore-tan mb-4">Playlist Spots</h4>
                <div className="grid grid-cols-2 gap-3">
                  {playlistGoals.map((playlist, index) => (
                    <motion.div
                      key={playlist.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-filmore-dark/50 border border-filmore-tan/20 rounded-sm"
                    >
                      <Disc3 className="w-5 h-5 text-filmore-gold" />
                      <div>
                        <div className="font-display text-sm text-filmore-cream">{playlist.name}</div>
                        <div className="text-xs text-filmore-tan">{playlist.platform}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <a 
                href="https://open.spotify.com/prerelease/6Iieqpd3lBD8qzueoFrTz7?si=7a4586a7fb924736"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Disc3 className="w-5 h-5" />
                Listen Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 px-6 min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-6.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-filmore-dark/80" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-display text-filmore-gold text-sm tracking-[0.3em] uppercase">Get In Touch</span>
            <h2 className="font-accent text-5xl md:text-6xl mt-4">BOOKING</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-filmore-brown/30 to-filmore-dark border border-filmore-tan/20 rounded-sm p-8 md:p-12"
          >
            <div className="text-center">
              <span className="font-display text-filmore-gold text-sm tracking-[0.2em] uppercase">{bookingContact.title}</span>
              <h3 className="font-accent text-3xl md:text-4xl mt-2 mb-8">{bookingContact.name}</h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={`tel:${bookingContact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-filmore-cream hover:text-filmore-gold transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-filmore-tan/20 flex items-center justify-center group-hover:bg-filmore-gold/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-display tracking-wide">{bookingContact.phone}</span>
                </a>
                
                <a 
                  href={`mailto:${bookingContact.email}`}
                  className="flex items-center gap-3 text-filmore-cream hover:text-filmore-gold transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-filmore-tan/20 flex items-center justify-center group-hover:bg-filmore-gold/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-display tracking-wide">{bookingContact.email}</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.25 : 0.6, delay: 0.4 }}
            className="text-center text-filmore-tan/60 text-sm mt-8"
          >
            For all booking inquiries, please contact management directly
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-filmore-dark border-t border-filmore-tan/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Description */}
            <div>
              <img 
                src="/images/f-only-white.png" 
                alt="FILMORE" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-filmore-cream/60 text-sm leading-relaxed">
                Rising Country Music Artist from Wildwood, Missouri. Over {CAREER_STREAMS_FULL} career streams and counting.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-sm tracking-[0.2em] uppercase text-filmore-gold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-filmore-cream/60 hover:text-filmore-gold transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://www.filmoremusic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-filmore-cream/60 hover:text-filmore-gold transition-colors text-sm"
                >
                  Official Website
                </a>
                <a
                  href="/FILMORE_BIO_2025.pdf"
                  download="FILMORE_BIO_2025.pdf"
                  className="block text-filmore-cream/60 hover:text-filmore-gold transition-colors text-sm"
                >
                  Download PDF
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-display text-sm tracking-[0.2em] uppercase text-filmore-gold mb-4">Connect</h4>
              <div className="flex gap-4 mb-6">
                {socialStats.slice(0, 4).map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-10 h-10 rounded-full bg-filmore-tan/20 flex items-center justify-center text-filmore-tan hover:bg-filmore-gold/20"
                    aria-label={social.platform}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <a href="https://mr305.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/mr305-logo.png" 
                  alt="Mr. 305 Records" 
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-filmore-tan/10 text-center">
            <p className="text-filmore-cream/40 text-sm">
              © {new Date().getFullYear()} FILMORE. All rights reserved. | Mr. 305 Records
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
