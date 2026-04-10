import { motion } from "framer-motion";
import { Video, Play, TrendingUp, Sparkles, BookOpen, User, Smartphone } from "lucide-react";

const videoTypes = [
  { icon: Video, title: "Explainer Videos" },
  { icon: Play, title: "Product Demos" },
  { icon: User, title: "UGC-Style Ads" },
  { icon: Sparkles, title: "Brand Videos" },
  { icon: BookOpen, title: "Tutorials / Training Videos" },
  { icon: TrendingUp, title: "AI Spokesperson Videos" },
  { icon: Smartphone, title: "Social Reels, TikToks & Shorts" },
];

const WhatWeCreate = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-[-0.03em]">
            What We Create
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Video Content That Boosts Engagement, Sales & Trust
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {videoTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
                className="bg-background border border-border/60 p-6 sm:p-7 rounded-2xl hover:shadow-elevated transition-all duration-300 group cursor-pointer text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 mx-auto group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold leading-snug">{type.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreate;
