import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Our conversions increased 42% after implementing CustomVideos.ai's product demos. The quality exceeded our expectations and the turnaround was incredibly fast.",
    author: "Jessica R.",
    role: "Marketing Director",
    rating: 5
  },
  {
    quote: "We used to wait weeks for video content. Now we get professional videos in just a few days. It's completely transformed our content strategy.",
    author: "Daniel M.",
    role: "Founder & CEO",
    rating: 5
  },
  {
    quote: "Game-changer for our e-commerce brand. The UGC-style ads they created performed better than anything we'd produced in-house or with traditional agencies.",
    author: "Amber T.",
    role: "E-commerce Manager",
    rating: 5
  }
];

const Testimonials = () => {
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
            Real Results
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            See what our clients are saying
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-background border border-border/60 p-7 rounded-2xl shadow-glow flex flex-col"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-base mb-6 leading-relaxed flex-1 text-foreground/85">{testimonial.quote}</p>
              <div className="pt-5 border-t border-border/60">
                <p className="font-semibold text-sm text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
