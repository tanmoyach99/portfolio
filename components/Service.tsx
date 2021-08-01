import React, { FunctionComponent } from 'react';
import { ISkill } from '../data';

const Service:FunctionComponent<{service:ISkill}> = ({service:{Icon,about,title}}) => {

const createMarkup=()=>{
    return {
    
        __html:about,
    }
    
     
}

    return (
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-green"/>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
            
        </div>
    );
};

export default Service;