import logo from "@/assets/custom_video_logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/60">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-5">
          <img 
            src={logo} 
            alt="CustomVideos.AI" 
            className="w-40 h-auto opacity-80"
          />
          <p className="text-sm text-muted-foreground text-center max-w-sm">
            Premium video production, enhanced with AI precision
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} CustomVideos.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
