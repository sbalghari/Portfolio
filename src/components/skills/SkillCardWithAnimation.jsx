import PropTypes from 'prop-types';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillsCard from "./skills_card.jsx";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function SkillCardWithAnimation({ title, skills }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <SkillsCard title={title} skills={skills} />
    </motion.div>
  );
}

SkillCardWithAnimation.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCardWithAnimation;
