import React from 'react';

const Title = ({text,className}:{text:string,className?:string}) => {
    return (
        <div className={className}>
            <h1 className="text-2xl group-hover:text-green-400 transition-all font-bold">{text}</h1>
            <div className="w-40 h-1 bg-green-500 rounded-full"></div>
            <div className="w-40 h-1 bg-indigo-500 rounded-full translate-x-2"></div>
        </div>
    );
};

export default Title;