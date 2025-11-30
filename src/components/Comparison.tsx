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
    customVideos: "$1,200–$5,000", 
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
            Why We're Different
          </h2>
          <p className="text-2xl sm:text-3xl text-foreground font-semibold">
            A Premier Video Agency — Rebuilt for the AI Era
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto overflow-hidden"
        >
          <div className="bg-card rounded-3xl shadow-glow-lg overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 border-b border-border">
              <div></div>
              <div className="text-center">
                <div className="gradient-primary text-white font-bold py-3 px-4 rounded-2xl text-lg">
                  CustomVideos.ai
                </div>
              </div>
              <div className="text-center">
                <div className="bg-muted py-3 px-4 rounded-2xl text-lg font-semibold text-muted-foreground">
                  Traditional Agencies
                </div>
              </div>
            </div>

            {/* Table rows */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className={`grid grid-cols-3 gap-4 p-6 items-center ${
                  index !== comparisonData.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="font-semibold text-foreground">{row.category}</div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary py-2 px-4 rounded-xl font-medium">
                    <Check className="w-4 h-4" />
                    {row.customVideos}
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-muted-foreground py-2 px-4">
                    <X className="w-4 h-4" />
                    {row.traditional}
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
