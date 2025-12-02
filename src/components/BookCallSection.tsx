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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto bg-card rounded-[3rem] shadow-glow-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                Book a Free Strategy Call
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Get expert guidance on the best video for your brand, your goals, and your budget — no pressure, no hard sell.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-background/50 backdrop-blur-sm p-6 rounded-2xl text-center sm:text-left"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity text-base sm:text-xl px-6 sm:px-12 py-5 sm:py-7 shadow-glow-lg w-full sm:w-auto"
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
