import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';




const Projects = () => {
    const projects = [
        {
            title: 'CAFE RAIN',
            tech: [FaReact, SiTailwindcss, SiExpress, SiMongodb, SiFirebase],
            Link: 'https://github.com/rontysarkar/Cafe-Rain-Client',
            cover: '/projects-1.png',
            background: "bg-indigo-500"
        },
        {
            title: 'Tourism Vision',
            tech: [FaReact, SiTailwindcss, SiExpress, SiMongodb, SiFirebase],
            Link: 'https://github.com/rontysarkar/Tourism-Vision-Client',
            cover: '/projects-2.png',
            background: "bg-green-500"
        },
        {
            title: 'HealX',
            tech: [FaReact, SiTailwindcss, SiExpress, SiMongodb, SiFirebase],
            Link: 'https://github.com/rontysarkar/HealX',
            cover: '/projects-3.png',
            background: "bg-fuchsia-500"
        },
        {
            title: 'HomelyHub',
            tech: [FaReact, SiTailwindcss, SiExpress, SiMongodb, SiFirebase],
            Link: 'https://github.com/rontysarkar/HomelyHub',
            cover: '/projects-4.png',
            background: "bg-violet-500"
        },
        {
            title: 'Boi Bazar',
            tech: [FaReact, SiTailwindcss,SiJavascript, SiFirebase],
            Link: 'https://github.com/rontysarkar/Boi-Bazar',
            cover: '/projects-5.png',
            background: "bg-pink-500"
        },
        {
            title: 'RS Paribahan',
            tech: [FaHtml5,FaCss3Alt, SiTailwindcss,SiJavascript],
            Link: 'https://github.com/rontysarkar/RS-Paribahan',
            cover: '/projects-6.png',
            background: "bg-lime-500"
        }
    ]
    return (
        <div id='projects'  className='py-10 p-5 sm:p-0 mt-52'>
            <Title  text='Projects 🛠️' className='flex flex-col justify-center items-center -rotate-6' />
            <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5  '>
                {
                    projects.map((project, index) => {
                        return <Link href={project.Link} key={index}>
                            <div className={cn("p-5 rounded-md ", project.background)}>
                                <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                                    <div className='space-y-5'>
                                        <h1 className='text-2xl font-bold'>{project.title}</h1>
                                        <div className='flex items-center gap-5'>
                                            {
                                                project.tech.map((Icon, index) => {
                                                    return <Icon className='w-8 h-8' key={index} />
                                                })
                                            }
                                        </div>
                                    </div>

                                </DirectionAwareHover>
                            </div>
                        </Link>
                    })
                }

            </div>

        </div>
    );
};

export default Projects;