import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "@/assets/custom_video_logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.04),transparent_60%)]" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-16"
          >
            <img 
              src={logo} 
              alt="CustomVideos.AI" 
              className="w-56 sm:w-64 h-auto mx-auto"
            />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold mb-8 leading-[1.08] tracking-[-0.035em]"
          >
            Custom Videos That Convert. Created Fast. Priced Fair.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            Get premium, studio-quality videos crafted by expert creators and enhanced with AI precision — delivered in as little as 7–14 days.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 transition-all text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full font-semibold w-full sm:w-auto shadow-glow-lg"
            >
              <a href="https://cal.com/customvideos/meeting" target="_blank" rel="noopener noreferrer">
                Book Your Free Strategy Call
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full border-border/60 hover:bg-muted/50 font-medium w-full sm:w-auto"
            >
              <a href="#examples">See Examples</a>
            </Button>
          </motion.div>

          {/* Trust badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 text-sm text-muted-foreground tracking-wide uppercase"
          >
            Trusted by fast-growing brands, SaaS companies, e-commerce stores, and agencies.
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/60" />
    </section>
  );
};

export default Hero;
