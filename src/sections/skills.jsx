{
  /* Skill 1: C++
  <div className="mb-7">
  <div className="flex justify-between py-1">
    <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
      C++
    </span>
    <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
      50%
    </span>
  </div>
  <svg
    className="rc-progress-line"
    viewBox="0 0 100 1"
    preserveAspectRatio="none"
  >
    <path
      className="rc-progress-line-trail"
      d="M 0.5,0.5 L 99.5,0.5"
      strokeLinecap="round"
      stroke="#D9D9D9"
      strokeWidth="1"
      fillOpacity="0"
    ></path>
    <path
      className="rc-progress-line-path"
      d="M 0.5,0.5 L 79.5,0.5"
      strokeLinecap="round"
      stroke="#FF6464"
      strokeWidth="1"
      fillOpacity="0"
      style={{
        strokeDasharray: "49.2px, 100px",
        strokeDashoffset: "0px",
        transition:
          "stroke-dashoffset 0.3s ease, stroke-dasharray 0.3s ease, stroke 0.3s linear",
      }}
    ></path>
  </svg>
</div>;
*/
}
function SkillsSection() {
  return (
    <section className="h-screen bg-white dark:bg-gray-900">
      <div className="flex justify-center">
        <p className="relative p-2 inline-block">
          <span className="relative z-10 text-3xl font-semibold text-gray-900 dark:text-white">
            My Skills
          </span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500"></span>
        </p>
      </div>
    </section>
  );
}
export default SkillsSection;
