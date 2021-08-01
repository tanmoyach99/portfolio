import { motion } from 'framer-motion';
import React from 'react';
import { stagger } from '../Animation';
import Service from '../components/Service';
import { services } from '../data';

const index = () => {

     const variants={
        initial:{
            opacity:0, y:60
        },
        animate:{
            opacity:1, y:0

        }  
    }

   
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
    <h5 className="my-3 font-medium">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione numquam corporis doloribus, quis aliquid esse nobis eius repellendus veritatis recusandae a dolores eos tenetur eveniet sapiente nulla velit sequi.
    </h5>
    <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft: '-1.5rem',marginRight:"-1.5rem"}}>
      <h6 className="my-3 text-xl font-bold tracking-wide"> what I offer</h6>
      <motion.div variants={stagger}  initial='initial' animate='animate' className="grid gap-6 lg:grid-cols-2">
        {
          services.map(service=><motion.div variants={variants} key={service.title} className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
            <Service key={service.title} service={service}/>
          </motion.div>
            )
        }
      </motion.div>
    </div>
    </div>
  );
};

export default index;