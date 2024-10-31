import EduTimeline from './edu_timeline';
import ExpTimeline from './exp_timeline';

function AboutSection() {
  return (
    <section className="p-6 h-auto w-auto lg:p-12 bg-background dark:bg-darkBackground text-darkText dark:text-lightText font-sans">
      <div className="md:max-w-5xl md:mx-auto md:px-6">
        {/* About Me Title */}
        <div className="text-center p-6">
          <p className="text-4xl font-bold text-primary dark:text-primary">
            <span>About Me</span>
          </p>
        </div>

        {/* Introduction Section */}
        <div className="my-4">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-lightText dark:text-darkText">
              Introduction:
            </h2>
          </div>
          <div className="px-4">
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            <span className="justify-start">
              Hi, I&apos;m Saifullah Balghari from <span className="font-semibold text-primary dark:text-white">Skardu</span>, Gilgit-Baltistan, Pakistan, studying Computer Science at Army Public School and College System, Skardu.
            </span>
            <span className="justify-start">
              {" "}I&apos;ve learned various programming languages online. I have a strong foundation in <span className="font-semibold text-primary dark:text-white">Python</span> for its simplicity and extensive libraries, making it my favorite. I also know <span className="font-semibold text-primary dark:text-white">C++, JavaScript, SQL,</span> etc., and have intermediate knowledge in CS concepts like <span className="font-semibold text-primary dark:text-white">DSA, DB, OS,</span> and <span className="font-semibold text-primary dark:text-white">VC</span>.
            </span>
          </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-4">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-lightText dark:text-darkText">
              Education:
            </h2>
          </div>
          <div className="px-4 bg-white dark:bg-secondary rounded-lg p-4 shadow-l hover:shadow-lg transition-all duration-300 hover:scale-105">
            <EduTimeline />
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-4">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-lightText dark:text-darkText">
              Experience:
            </h2>
          </div>
          <div className="px-4 bg-white dark:bg-secondary rounded-lg p-4 shadow-l hover:shadow-lg transition-all duration-300 hover:scale-105">
            <ExpTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}300

export default AboutSection;
