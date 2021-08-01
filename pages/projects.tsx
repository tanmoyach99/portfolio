
import { motion } from "framer-motion";
import { useState } from "react";
import { stagger, variants } from "../Animation";
import ProjectCard from "../components/ProjectCard"
import ProjectNavbar from "../components/ProjectNavbar";
import { Category, projectsData as pData  } from "../data"

const Projects = () => {


   const [projects, setProjects] = useState(pData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(pData);
      setActive(category);
      return;
    }

    const newArray = pData.filter((project) =>
      project.category.includes(category)
    );
    
    setProjects(newArray);
    setActive(category);
  };
  
    
    return (
        <div className="px-5 py-2 overflow-y-scroll" style={{height:"65vh"}}>
           <ProjectNavbar
             handlerFilterCategory={handlerFilterCategory}
              active={active}
           
           />
            <motion.div variants={stagger}  initial='initial' animate='animate' className="relative grid grid-cols-12 gap-4 my-3">
                {projects.map(project=>  <motion.div variants={variants} key={project.name} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} key={project.name} />
          </motion.div> )}
            </motion.div>
           
        </div>
    )
}

export default Projects;
