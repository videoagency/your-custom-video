import { motion } from "framer-motion";
import { MessageSquare, Clapperboard, Eye, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Tell Us What You Need",
    description: "Share your vision, goals, and requirements"
  },
  {
    icon: Clapperboard,
    number: "2",
    title: "We Script, Produce & Edit Your Video",
    description: "Our team creates your video with expert precision"
  },
  {
    icon: Eye,
    number: "3",
    title: "You Review",
    description: "One professional revision round included"
  },
  {
    icon: Rocket,
    number: "4",
    title: "Publish & Grow",
    description: "Launch your video and watch results soar"
  }
];

const HowItWorks = () => {
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
            How It Works
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            A Seamless, Done-For-You Production Process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className="bg-card p-8 rounded-3xl shadow-glow h-full">
                  <div className="gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative">
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-center max-w-3xl mx-auto text-foreground font-medium"
        >
          Get the polish of a premium video agency — without the delays, overhead, or endless meetings.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorks;
