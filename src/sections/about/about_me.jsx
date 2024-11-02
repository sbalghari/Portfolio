import EduTimeline from './edu_timeline';
import ExpTimeline from './exp_timeline';

function AboutSection() {
  return (
    <section className="p-2 sm:p-4 md:p-6 lg:p-12 bg-transparent dark:bg-transparent text-darkText dark:text-lightText font-sans">
      <div className="md:max-w-5xl md:mx-auto md:px-6">
        {/* About Me Title */}
        <div className="text-center p-6">
          <p className="text-4xl font-bold text-primary dark:text-primary">
            <span>About Me</span>
          </p>
        </div>

        {/* Introduction Section */}
        <div className="mt-8">
          <div className="">
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            <span className="block">
              Hi, I&apos;m Saifullah Balghari based in <span className="font-semibold text-primary dark:text-white">Skardu, GB</span>, Pakistan. I am currently studying Computer Science from Army Public School and College System, Skardu.
            </span>
            <span className="block">
              I&apos;ve learned various programming languages online. I have a strong foundation in <span className="font-semibold text-primary dark:text-white">Python</span> and it&apos;s simplicity and extensive libraries, makes it my favorite. I also know <span className="font-semibold text-primary dark:text-white">C++, JavaScript, SQL,</span> etc, and have an intermediate knowledge in CS concepts like <span className="font-semibold text-primary dark:text-white">DSA, DB, OS,</span> and <span className="font-semibold text-primary dark:text-white">VC</span>.
            </span>
          </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-lightText dark:text-darkText">
              Education:
            </h2>
          </div>
          <div className="px-4 bg-transparent dark:bg-transparent rounded-lg p-4">
            <EduTimeline />
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-8">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-lightText dark:text-darkText">
              Experience:
            </h2>
          </div>
          <div className="px-4 mb-8 bg-transparent dark:bg-transparent rounded-lg p-4">
            <ExpTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}300

export default AboutSection;
