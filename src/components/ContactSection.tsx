import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
          CONTACT
        </h2>
        <p className="text-muted-foreground mb-8 font-sans">
          入部希望・質問など、お気軽にご連絡ください！
        </p>
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2 font-sans">InstagramのDMから</p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent font-sans font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @NAG_basketball（DMはこちら）
              </a>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="text-sm text-muted-foreground mb-2 font-sans">公式LINEから</p>
              <a
                href="https://line.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(145,63%,42%)] text-primary-foreground px-6 py-3 rounded-full font-sans font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                LINE で友だち追加
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
