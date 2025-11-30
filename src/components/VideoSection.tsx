import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section id="examples" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            See It In Action
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Watch how we transform ideas into engaging videos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-glow-lg aspect-video bg-muted">
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
