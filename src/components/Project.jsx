import { PROJECTS } from "../constants"
import {motion} from"framer-motion"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Project</motion.h1>
        <div> {PROJECTS.map((project, index)=>(
            <div key={index}className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}} className="w-full lg:w-1/4">
                                                                                <img
                                                                                    src={project.image}
                                                                                    width={project.imageSize || 170}
                                                                                    height={project.imageSize || 170}
                                                                                    alt={project.title}
                                                                                    className="mb-6 rounded"
                                                                                    loading="lazy"
                                                                                />
                </motion.div>
                <motion.div
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}} className="w-full max-w-xl lg:3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    {project.link && (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-sm text-purple-400 hover:text-purple-300 underline mr-2"
                                                        >
                                                            Live Demo
                                                        </a>
                                                    )}
                                                    {project.technologies.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                </motion.div>
            </div>
        ))}
        </div>
      
    </div>
  )
}

export default Project
