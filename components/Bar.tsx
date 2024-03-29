import React, { FunctionComponent } from 'react';
import { ISkills } from '../data';
import {motion} from 'framer-motion'
import { spring } from 'popmotion';

const Bar:FunctionComponent<{lan:ISkills}> = ({lan:{Icon,level,name}}) => {

    const bar_width=`${level}`;
    console.log(bar_width)

    const variants={
        initial:{width:0},
        animate:{
            width:bar_width,
            transition:{ 
                duration: 0.4,
                type:'spring',
                damping:10,
                stiffness:100,
                 
            }
        
        
        }

    }
    // console.log(level)
    return (
        <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
           <motion.div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600" style={{width:level}}
           variants={variants}
           initial="initial"
           animate="animate"
           >
               <Icon className="mr-3"/>
               {name}
           </motion.div>
            
        </div>
    );
};

export default Bar;