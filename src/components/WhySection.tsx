import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Fast turnaround (7–14 days)",
  "Transparent pricing",
  "No agency overhead or delays",
  "Expert creators + AI precision"
];

const WhySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label">Why us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold mb-6 tracking-[-0.04em] leading-[1.1]">
            Why CustomVideos.ai
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            High-Quality Video Production — Without the Slow, Expensive Agency Process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg text-muted-foreground mb-5 text-center leading-[1.8]">
            Most brands need video content but don't have the time, team, or budget to deal with traditional production studios.
          </p>
          <p className="text-lg text-foreground font-semibold mb-14 text-center">
            We built an easier, faster, more modern way.
          </p>

          <div className="grid sm:grid-cols-2 gap-3.5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
                className="flex items-center gap-4 bg-card p-5 rounded-2xl card-surface-hover"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                  <Check className="w-4 h-4 text-background" strokeWidth={2.5} />
                </div>
                <span className="text-[15px] font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
