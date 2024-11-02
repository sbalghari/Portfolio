import PropTypes from "prop-types";

function ProjectCard({ data }) {
    
    let skills = data.Technologies_used.split(",");

    return (
        <div className="lg:w-[430px] lg:h-[400px] shadow-lg hover:scale-105 hover:border transition all duration-300 hover:border-primary bg-white dark:bg-secondary text-start text-lightText dark:text-darkText p-4 rounded-xl">
            <img className="rounded-md w-full h-52" src={data.screenshot} alt={data.Name} />
            <a className="text-sm font-normal hover:cursor-pointer hover:text-primary" href={data.Link}>SourceCode</a>
            <h1 className="text-2xl pt-4 font-semibold">{data.Name}</h1>
            <p className="text-md pt-2 font-normal text-gray-500 dark:text-gray-400 text-ellipsis">{data.Description}</p>
            <div className="text-md pt-2 font-normal">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300"
                    >
                        {skill.trim()}
                    </span>
                ))}
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    data: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Technologies_used: PropTypes.string.isRequired,
        screenshot: PropTypes.string.isRequired,
        Link: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;
