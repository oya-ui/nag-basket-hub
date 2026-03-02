const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display text-xl text-foreground mb-1">NAG</p>
        <p className="text-sm text-muted-foreground font-sans">
          福岡女子大学 × 九州大学 インカレバスケットボールサークル
        </p>
        <p className="text-xs text-muted-foreground/60 mt-4 font-sans">
          © {new Date().getFullYear()} NAG. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
