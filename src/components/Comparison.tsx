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
            Why We're Different
          </h2>
          <p className="text-xl sm:text-2xl text-foreground font-medium">
            A Premier Video Agency — Rebuilt for the AI Era
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          {/* Desktop table view */}
          <div className="hidden md:block bg-background rounded-2xl shadow-elevated overflow-hidden border border-border/60">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-0 border-b border-border">
              <div className="p-5 text-sm font-semibold text-muted-foreground uppercase tracking-wider"></div>
              <div className="p-5 text-center border-l border-border">
                <span className="text-sm font-bold text-foreground">CustomVideos.ai</span>
              </div>
              <div className="p-5 text-center border-l border-border">
                <span className="text-sm font-medium text-muted-foreground">Traditional Agencies</span>
              </div>
            </div>

            {/* Table rows */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-0 items-center ${
                  index !== comparisonData.length - 1 ? 'border-b border-border/60' : ''
                } ${index % 2 === 0 ? 'bg-muted/20' : ''}`}
              >
                <div className="p-5 text-sm font-semibold text-foreground">{row.category}</div>
                <div className="p-5 text-center border-l border-border/60">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {row.customVideos}
                  </span>
                </div>
                <div className="p-5 text-center border-l border-border/60">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <X className="w-4 h-4 flex-shrink-0 opacity-40" />
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.04 * index }}
                className="bg-background rounded-xl border border-border/60 p-5"
              >
                <h3 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">{row.category}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-medium text-foreground">{row.customVideos}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
                    <div className="text-sm text-muted-foreground">
                      {row.traditional}
                    </div>
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
