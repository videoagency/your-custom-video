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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Additional Features
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card p-8 rounded-3xl shadow-glow"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
