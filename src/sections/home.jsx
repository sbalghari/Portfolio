import ProfilePic from "../assets/profilepic1.jpg";

function HomeSection() {
  return (
    <section className="bg-background dark:bg-darkBackground h-screen flex items-center justify-center font-sans">
      <div className="items-center mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="rounded-full scale-100 w-96 h-96 dark:block dark:filter dark:brightness-90"
          src={ProfilePic}
          alt="Profile picture of Saifullah Balghari"
        />
        <div className="mt-0">
          <h2 className="mb-2 font-mono text-sm tracking-tight font-bold text-lightText dark:text-darkText">
            Hello, World!
          </h2>
          <h2 className="mb-2 text-4xl md:text-5xl tracking-tight font-extrabold text-secondary">
            It&apos;s <span>Saifullah Balghari</span>
          </h2>
          <h2 className="mb-2 text-2xl md:text-3xl font-semibold tracking-tight">
            <span className="text-lightText dark:text-darkText">
              I&apos;m{" "}
            </span>
            <span className="font-extrabold text-secondary">
              a Software Engineer
            </span>
          </h2>
          <p className="mb-4 text-lightText md:text-sm dark:text-darkText">
            An aspiring AI/ML engineer currently studying Computer Science from
            APSACS Skardu.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
