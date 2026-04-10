import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-7 leading-tight tracking-[-0.03em]">
            Ready to Get a Custom Video That Drives Real Results?
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
            Book your free strategy call and discover how we can help you create video content that converts.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 transition-all text-lg px-10 py-7 rounded-full font-semibold shadow-glow-lg"
          >
            <a href="https://cal.com/customvideos/meeting" target="_blank" rel="noopener noreferrer">
              Book Your Free Strategy Call
            </a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/60" />
    </section>
  );
};

export default FinalCTA;
