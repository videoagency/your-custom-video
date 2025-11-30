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
            Real Results
          </h2>
          <p className="text-2xl text-muted-foreground">
            See what our clients are saying
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card p-8 rounded-3xl shadow-glow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
