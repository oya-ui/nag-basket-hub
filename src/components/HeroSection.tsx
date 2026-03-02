import heroImage from "@/assets/hero-basketball.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="バスケットボールの試合風景"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto section-fade-in">
        <p className="text-primary-foreground/80 font-sans text-sm md:text-base tracking-widest uppercase mb-4">
          福岡女子大学 × 九州大学
        </p>
        <h1 className="font-display text-7xl md:text-9xl text-primary-foreground leading-none mb-4">
          NAG
        </h1>
        <p className="text-primary-foreground/90 font-sans text-lg md:text-xl mb-2">
          インカレバスケットボールサークル
        </p>
        <p className="text-primary-foreground/60 font-sans text-sm md:text-base mb-8">
          楽しく、本気で、バスケを。
        </p>
        <a
          href="https://www.instagram.com/nag_qufwu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-sans font-medium text-sm hover:bg-accent transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          Instagramをチェック
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
