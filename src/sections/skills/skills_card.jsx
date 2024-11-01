import PropTypes from "prop-types";
import { useRef } from "react";
import fallbackIcon from "../../assets/icons/c.png";

function SkillsCard({ title, skills }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);
      const tiltX = (y / height) * 15;
      const tiltY = (x / width) * 15;
      cardRef.current.style.transform = `perspective(1000px) rotateY(${tiltX}deg) rotateX(${tiltY}deg) scale(1.05)`;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div
      ref={cardRef}
      className="hover:border hover:border-primary w-full bg-white dark:bg-secondary shadow-lg rounded-xl transition-transform duration-500 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-2xl pt-6 font-semibold text-center text-lightText dark:text-darkText">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4 m-6 lg:m-6 pb-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center hover:cursor-pointer p-2 border border-gray-300 dark:border-gray-700 dark:hover:border-primary rounded-xl hover:border-primary hover:shadow-lg hover:scale-105 shadow-primary transition-all duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.label}
              className="w-8 h-8 object-contain mr-2"
              onError={(e) => (e.target.src = fallbackIcon)}
            />
            <span className="text-md text-gray-700 dark:text-gray-300">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

SkillsCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillsCard;
