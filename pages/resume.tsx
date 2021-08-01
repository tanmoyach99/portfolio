import { languages, tools } from "../data"
import Bar from "../components/Bar";
import { motion } from "framer-motion";

const resume = () => {


    const variants={
        initial:{
            opacity:0, y:60
        },
        animate:{
            opacity:1, y:0

        }  
    }

    return (
        <div className="px-4 py-2">
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={variants} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                           Computer Science of engineering
                        </h5>
                        <p className="font-semibold">Bangladesh Open University</p>
                        <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam iste sequi? Voluptatibus, neque ad.</p>
                    </div>
                </motion.div>
                 <motion.div variants={variants} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                           Junior web devloper (2020-now)
                        </h5>
                        <p className="font-semibold">react specialist</p>
                        <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam iste sequi? Voluptatibus, neque ad.</p>
                    </div>
                </motion.div>

            </div>


             <div className="grid gap-6 md:grid-cols-2">
                 <div>
                     <h5 className="my-3 text-2xl font-bold">
                         Languages and frameworks
                     </h5>
                     <div className="my-2">
                         {languages.map(lan=><Bar lan={lan} key={lan.name}/>)}
                     </div>
                 </div> <div>
                     <h5 className="my-3 text-2xl font-bold">
                        Tools and Softwares
                     </h5>
                     <div className="my-2">
                         {tools.map(tool=><Bar lan={tool} key={tool.name}/>)}
                     </div>
                 </div>


             </div>
            
        </div>
    )
}

export default resume
