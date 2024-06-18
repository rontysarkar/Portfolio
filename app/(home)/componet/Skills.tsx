"use client"
import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiCss3, SiExpress, SiFirebase, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            text: 'React',
            Icon: SiReact,
        },
        {
            text: 'JavaScript',
            Icon: SiJavascript,
        },
        {
            text: 'Html',
            Icon: SiHtml5,
        },
        {
            text: 'CSS',
            Icon: SiCss3,
        },
        {
            text: 'Tailwind CSS',
            Icon: SiTailwindcss,
        },
        {
            text: 'Firebase',
            Icon: SiFirebase,
        },
        {
            text: 'Next js',
            Icon: SiNextdotjs,
        },
        {
            text: 'Node js',
            Icon: SiNodedotjs,
        },
        {
            text: 'Express js',
            Icon: SiExpress,
        },
        {
            text: 'MongoDb',
            Icon: SiMongodb,
        },
        {
            text: 'Git',
            Icon: SiGit,
        },
        {
            text: 'VsCode',
            Icon: SiVisualstudiocode,
        },

    ]
    return (
        <div className='max-w-5xl mx-auto px-8'>
            <Title text='Skills 🔨' className='flex flex-col justify-center items-center -rotate-6' />
            <HoverEffect items={skills} />
        </div>
    );
};

export default Skills;