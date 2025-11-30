import { motion } from "framer-motion";
import { Video, Play, TrendingUp, Sparkles, BookOpen, User, Smartphone } from "lucide-react";

const videoTypes = [
  { icon: Video, title: "Explainer Videos", color: "from-blue-500 to-cyan-500" },
  { icon: Play, title: "Product Demos", color: "from-purple-500 to-pink-500" },
  { icon: User, title: "UGC-Style Ads", color: "from-orange-500 to-red-500" },
  { icon: Sparkles, title: "Brand Videos", color: "from-green-500 to-emerald-500" },
  { icon: BookOpen, title: "Tutorials / Training Videos", color: "from-indigo-500 to-purple-500" },
  { icon: TrendingUp, title: "AI Spokesperson Videos", color: "from-pink-500 to-rose-500" },
  { icon: Smartphone, title: "Social Reels, TikToks & Shorts", color: "from-yellow-500 to-orange-500" },
];

const WhatWeCreate = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            What We Create
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Video Content That Boosts Engagement, Sales & Trust
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videoTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card p-8 rounded-3xl shadow-glow hover:shadow-glow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{type.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreate;
