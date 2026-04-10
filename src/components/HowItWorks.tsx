import { motion } from "framer-motion";
import { MessageSquare, Clapperboard, Eye, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell Us What You Need",
    description: "Share your vision, goals, and requirements"
  },
  {
    icon: Clapperboard,
    number: "02",
    title: "We Script, Produce & Edit Your Video",
    description: "Our team creates your video with expert precision"
  },
  {
    icon: Eye,
    number: "03",
    title: "You Review",
    description: "One professional revision round included"
  },
  {
    icon: Rocket,
    number: "04",
    title: "Publish & Grow",
    description: "Launch your video and watch results soar"
  }
];

const HowItWorks = () => {
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
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A Seamless, Done-For-You Production Process
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
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
                <div className="bg-background border border-border/60 p-7 rounded-2xl shadow-glow h-full">
                  <span className="text-5xl font-bold text-muted-foreground/20 block mb-4 tracking-tighter">{step.number}</span>
                  <div className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg text-center max-w-2xl mx-auto text-foreground font-medium"
        >
          Get the polish of a premium video agency — without the delays, overhead, or endless meetings.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorks;
