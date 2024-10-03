"use client";

interface ProjectCardProps {
  github: string;
  image: string;
  title: string;
  description: string;
  icons: string[];
  tech: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ github, image, title, description, icons, tech, projectLink }) => {
  return (
    <div className="group [perspective:1000px] w-[350px] h-[500px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-text-primary-dark shadow-xl shadow-gray-500">
        {/* Front Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] p-8">
        <h1 className="text-accent font-bold text-center text-2xl m-5">{title}<br/></h1>
          <img
            src={image}
            alt="Project Screenshot"
            width="500"
            height="500"
            className="top-1/2 border-accent shadow-sm shadow-accent border-4 mx-auto "
          />
          <p className="text-accent font-semibold text-left text-base text-wrap"><br/><br/><br/>Built using {tech}<br/></p>
          <div className="flex flex-row">
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="tech icon"
                width="20"
                height="20"
                className="m-3 justify-start"
                >
                </img>
            ))}
            </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gray-100 p-8 rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center">
        <h1 className="text-accent font-bold text-center text-2xl m-5 hover:text-hover-light hover:cursor-pointer" onClick={() => {
              window.open(projectLink, '_blank');
            }}>{title}<br/></h1>
        {github !== "none" && (
              <button>
                <img src="/assets/tech/github.png" alt="github icon" width="40" height="40"
                className="flex justify-center rounded-full hover:bg-hover-light"
                onClick={() => {window.open(github, '_blank');}}
              /></button>)}
          <p className="text-accent font-semibold text-justify text-base text-wrap"><br/>{description}<br/></p>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;