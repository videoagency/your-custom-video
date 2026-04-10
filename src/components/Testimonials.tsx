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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold mb-5 tracking-[-0.04em] leading-[1.1]">
            Real Results
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            See what our clients are saying
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * index }}
              className="bg-card p-8 rounded-2xl card-surface-hover flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-[15px] mb-8 leading-[1.75] flex-1 text-foreground/80">{testimonial.quote}</p>
              <div className="pt-6 border-t border-border/50">
                <p className="font-bold text-sm text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
