import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, DollarSign, Clock, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "A custom video strategy",
    description: "Tailored to your brand and goals"
  },
  {
    icon: DollarSign,
    title: "Clear pricing recommendations",
    description: "Transparent costs with no hidden fees"
  },
  {
    icon: Clock,
    title: "Timeline + production plan",
    description: "Know exactly when to expect your video"
  },
  {
    icon: MessageCircle,
    title: "Answers to any questions",
    description: "Get expert guidance on your specific needs"
  }
];

const BookCallSection = () => {
  return (
    <section className="section-padding-compact relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto bg-foreground text-background rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-[-0.03em] text-background">
                Book a Free Strategy Call
              </h2>
              <p className="text-lg sm:text-xl text-background/70 max-w-2xl mx-auto leading-relaxed">
                Get expert guidance on the best video for your brand, your goals, and your budget — no pressure, no hard sell.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 * index }}
                    className="flex gap-4 bg-background/8 backdrop-blur-sm p-5 rounded-xl border border-background/10"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-background/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-0.5 text-background">{benefit.title}</h3>
                      <p className="text-background/60 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 transition-all text-lg px-10 py-7 rounded-full font-semibold shadow-glow-lg"
              >
                <a href="https://cal.com/customvideos/meeting" target="_blank" rel="noopener noreferrer">
                  Schedule Your Free Call Now
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
