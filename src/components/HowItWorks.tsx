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
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label">Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold mb-5 tracking-[-0.04em] leading-[1.1]">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A Seamless, Done-For-You Production Process
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * index }}
                className="relative"
              >
                <div className="bg-card p-8 rounded-2xl h-full card-surface-hover">
                  <span className="text-6xl font-extrabold text-muted/80 block mb-5 tracking-[-0.06em] select-none">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-background" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] font-bold mb-2.5 leading-snug">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2.5 items-center">
                    <div className="w-5 h-px bg-border" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg text-center max-w-2xl mx-auto text-foreground font-medium leading-relaxed"
        >
          Get the polish of a premium video agency — without the delays, overhead, or endless meetings.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorks;
