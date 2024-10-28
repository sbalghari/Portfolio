import EduTmln from './edu_timeline';
import ExpTmln from './exp_timeline';

function AboutSection() {
  return (
    <section className="h-screen bg-background dark:bg-darkBackground text-darkText dark:text-lightText font-sans">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* About Me Title */}
        <div className="text-center mb-10">
          <p className="text-4xl font-bold text-primary dark:text-primary">
            <span>About Me</span>
          </p>
        </div>

        {/* Introduction Section */}
        <div className="mb-12">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-lightText dark:text-darkText">
              Introduction:
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-lightText dark:text-darkText">
              <span className="flex justify-start">
                Hi, I&apos;m Saifullah Balghari from Skardu, Gilgit-Baltistan Pakistan. I&apos;m currently 
                a college student and learning Computer Science from Army Public School and College System, Skardu.
              </span>
              <span className="flex justify-start">
                I&apos;ve learned many programming languages from online sources, and working on the foundation and making it stronger. 
                Python, due to it&apos;s simplicity, flexibility and wide range of external libraries makes it my favorite language. 
                I&apos;ve also learned some other languages including C++, JS, HTML, CSS, etc. Other then programming I also have an 
                intermediate understanding of CS concepts like DSA, DB, OS, VC, etc. 
              </span>
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-lightText dark:text-darkText">
              Education:
            </h2>
          </div>
          <div className="bg-white dark:bg-secondary rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <EduTmln />
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-lightText dark:text-darkText">
              Experience:
            </h2>
          </div>
          <div className="bg-white dark:bg-secondary rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <ExpTmln />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
