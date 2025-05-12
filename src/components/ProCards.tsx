import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  description: string;
  side: "left" | "right";
  onInView: () => void;
};

const ProCards: React.FC<Props> = ({ title, description, side, onInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white text-black p-6 rounded-lg shadow-md max-w-md"
    >
      <h2 className="font-semibold text-xl mb-2">{title}</h2>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
};

export default ProCards;
