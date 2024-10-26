import ProfilePic from "../assets/profilepic1.jpg";

function HomeSection() {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="rounded-full w-full dark:hidden scale-100"
          src={ProfilePic}
          alt="dashboard image"
        ></img>
        <img
          className="rounded-full w-full hidden dark:block scale-100"
          src={ProfilePic}
          alt="profile pic"
        ></img>
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 font-mono text-7xl tracking-tight font-bold text-gray-900 dark:text-white">
            Hello, World!
          </h2>
          <h2 className="mb-4 font-mono text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            I'm <span className="">Saifullah Balghari</span>
          </h2>
          <p className="mb-6 font-normal font-mono text-gray-500 md:text-lg dark:text-gray-200">
            an aspiring AI/ML engineer currently studying Computer Science from
            APSACS skardu.
          </p>
        </div>
      </div>
    </section>
  );
}
export default HomeSection;
