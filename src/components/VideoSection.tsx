import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section id="examples" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold mb-5 tracking-[-0.04em] leading-[1.1]">
            See It In Action
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how we transform ideas into engaging videos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-dramatic aspect-video bg-muted border border-border/40">
            <iframe
              src="https://player.vimeo.com/video/1141725070?h=4a7f7c8c8f&title=0&byline=0&portrait=0"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="CustomVideos.AI Welcome Video"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
