import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  { 
    category: "Turnaround", 
    customVideos: "7–14 days", 
    traditional: "2–6+ weeks",
    customVideosBetter: true
  },
  { 
    category: "Pricing", 
    customVideos: "$300–$8,000", 
    traditional: "$10,000–$50,000+",
    customVideosBetter: true
  },
  { 
    category: "Scriptwriting", 
    customVideos: "Included", 
    traditional: "Often Extra",
    customVideosBetter: true
  },
  { 
    category: "Workflow", 
    customVideos: "Hybrid human + AI", 
    traditional: "Fully manual",
    customVideosBetter: true
  },
  { 
    category: "Revisions", 
    customVideos: "One included", 
    traditional: "Billed hourly",
    customVideosBetter: true
  },
  { 
    category: "Scalability", 
    customVideos: "Easy", 
    traditional: "Slow",
    customVideosBetter: true
  },
  { 
    category: "Overhead", 
    customVideos: "Low", 
    traditional: "High",
    customVideosBetter: true
  },
  { 
    category: "On-Camera Talent", 
    customVideos: "AI spokesperson options", 
    traditional: "Actors, studios, scheduling",
    customVideosBetter: true
  },
];

const Comparison = () => {
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
          <span className="section-label">Comparison</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold mb-5 tracking-[-0.04em] leading-[1.1]">
            Why We're Different
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/80 font-medium">
            A Premier Video Agency — Rebuilt for the AI Era
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Desktop table view */}
          <div className="hidden md:block bg-card rounded-2xl shadow-dramatic overflow-hidden border border-border/40">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-0 border-b border-border/60 bg-muted/40">
              <div className="p-6 text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em]"></div>
              <div className="p-6 text-center border-l border-border/60">
                <span className="text-sm font-bold text-foreground">CustomVideos.ai</span>
              </div>
              <div className="p-6 text-center border-l border-border/60">
                <span className="text-sm font-medium text-muted-foreground">Traditional Agencies</span>
              </div>
            </div>

            {/* Table rows */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-0 items-center transition-colors duration-200 hover:bg-muted/30 ${
                  index !== comparisonData.length - 1 ? 'border-b border-border/40' : ''
                }`}
              >
                <div className="p-6 text-sm font-semibold text-foreground">{row.category}</div>
                <div className="p-6 text-center border-l border-border/40">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                    {row.customVideos}
                  </span>
                </div>
                <div className="p-6 text-center border-l border-border/40">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 flex-shrink-0 opacity-30" strokeWidth={2} />
                    {row.traditional}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile card view */}
          <div className="md:hidden space-y-3">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.03 * index }}
                className="bg-card rounded-2xl border border-border/40 p-6 card-surface"
              >
                <h3 className="font-bold text-xs text-foreground mb-4 uppercase tracking-[0.15em]">{row.category}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-sm font-medium text-foreground">{row.customVideos}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <X className="w-4 h-4 text-muted-foreground/30 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-muted-foreground">{row.traditional}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
