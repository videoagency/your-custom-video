import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
            Ready to Get a Custom Video That Drives Real Results?
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12">
            Book your free strategy call and discover how we can help you create video content that converts.
          </p>

          <Button
            asChild
            size="lg"
            className="gradient-primary text-white hover:opacity-90 transition-opacity text-xl px-12 py-8 shadow-glow-lg text-lg"
          >
            <a href="https://cal.com/customvideos/meeting" target="_blank" rel="noopener noreferrer">
              Book Your Free Strategy Call
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default FinalCTA;
