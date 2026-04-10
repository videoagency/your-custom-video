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
        <div className="max-w-5xl mx-auto bg-foreground text-background rounded-[2rem] p-10 sm:p-14 lg:p-20 relative overflow-hidden">
          {/* Ambient light effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,hsl(var(--primary)/0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,hsl(var(--secondary)/0.1),transparent_50%)]" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-14"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40 mb-5 block">
                Free consultation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold mb-6 tracking-[-0.04em] text-background leading-[1.1]">
                Book a Free Strategy Call
              </h2>
              <p className="text-lg sm:text-xl text-background/60 max-w-2xl mx-auto leading-[1.7]">
                Get expert guidance on the best video for your brand, your goals, and your budget — no pressure, no hard sell.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mb-14">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.06 * index }}
                    className="flex gap-4 bg-background/[0.06] backdrop-blur-sm p-6 rounded-2xl border border-background/[0.08] hover:bg-background/[0.1] transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-background/[0.12] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-background/80" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[15px] mb-1 text-background">{benefit.title}</h3>
                      <p className="text-background/50 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 transition-all duration-300 text-base px-11 py-7 rounded-full font-semibold shadow-dramatic hover:scale-[1.02] active:scale-[0.98]"
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
