import logo from "@/assets/custom_video_logo.png";

const Footer = () => {
  return (
    <footer className="py-20 px-5 sm:px-8 lg:px-10 border-t border-border/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={logo} 
            alt="CustomVideos.AI" 
            className="w-36 h-auto opacity-70 hover:opacity-100 transition-opacity duration-500"
          />
          <p className="text-sm text-muted-foreground text-center max-w-sm leading-relaxed">
            Premium video production, enhanced with AI precision
          </p>
          <div className="w-12 h-px bg-border/60" />
          <p className="text-[11px] text-muted-foreground/50 tracking-[0.1em] uppercase">
            © {new Date().getFullYear()} CustomVideos.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
