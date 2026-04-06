import { motion } from "framer-motion";
import { FileText, RefreshCw, Zap, Repeat } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Scriptwriting included",
    description: "Professional scripts crafted by experienced writers"
  },
  {
    icon: RefreshCw,
    title: "Professional revision round",
    description: "One round of revisions included in every project"
  },
  {
    icon: Zap,
    title: "Hybrid human + AI production workflow",
    description: "Best of both worlds for quality and speed"
  },
  {
    icon: Repeat,
    title: "Perfect for ongoing content or one-off projects",
    description: "Flexible solutions that scale with your needs"
  }
];

const Features = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-muted/40">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-[-0.03em]">
            Additional Features
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="bg-background border border-border/60 p-7 rounded-2xl shadow-glow"
              >
                <div className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
