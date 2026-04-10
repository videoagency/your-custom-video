import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-label">Get started</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold mb-7 leading-[1.1] tracking-[-0.04em]">
            Ready to Get a Custom Video That Drives Real Results?
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-14 leading-[1.7]">
            Book your free strategy call and discover how we can help you create video content that converts.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 text-base px-11 py-7 rounded-full font-semibold shadow-dramatic hover:scale-[1.02] active:scale-[0.98]"
          >
            <a href="https://cal.com/customvideos/meeting" target="_blank" rel="noopener noreferrer">
              Book Your Free Strategy Call
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
