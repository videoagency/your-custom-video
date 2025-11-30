import logo from "@/assets/custom_video_logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={logo} 
            alt="CustomVideos.AI" 
            className="w-48 h-auto"
          />
          <p className="text-muted-foreground text-center">
            Premium video production, enhanced with AI precision
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CustomVideos.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
