import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "@/assets/custom_video_logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--secondary)/0.04),transparent_70%)]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      
      <div className="container px-5 sm:px-8 lg:px-10 relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <img 
              src={logo} 
              alt="CustomVideos.AI" 
              className="w-56 sm:w-64 h-auto mx-auto"
            />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-extrabold mb-8 leading-[1.05] tracking-[-0.045em]"
          >
            Custom Videos That Convert.{" "}
            <span className="text-muted-foreground">Created Fast. Priced Fair.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-muted-foreground mb-16 max-w-[38rem] mx-auto leading-[1.7] font-normal"
          >
            Get premium, studio-quality videos crafted by expert creators and enhanced with AI precision — delivered in as little as 7–14 days.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 text-[15px] sm:text-base px-9 sm:px-11 py-6 sm:py-7 rounded-full font-semibold w-full sm:w-auto shadow-dramatic hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <a href="https://cal.com/customvideos/meeting" target="_blank" rel="noopener noreferrer">
                Book Your Free Strategy Call
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-[15px] sm:text-base px-9 sm:px-11 py-6 sm:py-7 rounded-full border-border hover:bg-muted/60 font-medium w-full sm:w-auto transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <a href="#examples">See Examples</a>
            </Button>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="mt-20"
          >
            <p className="text-[11px] text-muted-foreground/60 tracking-[0.18em] uppercase font-medium">
              Trusted by fast-growing brands, SaaS companies, e-commerce stores, and agencies.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
