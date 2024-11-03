import { experienceData } from "../../data/experience.js";

const Timeline = () => {
  return (
    <ol className="items-center lg:flex">
      {experienceData.map((item, index) => (
        <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-fancy font-medium text-2xl text-primary mb-1 sm:mb-0">
            {item.company}
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 mx-2 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              {item.year}
            </time>
            <div className="text-xl font-bold text-lightText dark:text-darkText">
              {item.position}
            </div>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            {item.description}
          </div>
        </div>
      ))}
    </ol>
  );
};

export default Timeline;
