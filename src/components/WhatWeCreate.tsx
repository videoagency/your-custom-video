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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold mb-5 tracking-[-0.04em] leading-[1.1]">
            What We Create
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Video Content That Boosts Engagement, Sales & Trust
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {videoTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="group relative bg-card p-7 sm:p-8 rounded-2xl text-center card-surface-hover cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-muted/80 flex items-center justify-center mb-5 mx-auto group-hover:bg-foreground group-hover:text-background transition-all duration-500 group-hover:rounded-xl group-hover:scale-105">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm sm:text-[15px] font-semibold leading-snug">{type.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreate;
