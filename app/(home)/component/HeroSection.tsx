import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import { SiWhatsapp } from "react-icons/si";
import Image from "next/image";
import img from '../../../public/ronty.jpg'

const HeroSection = () => {
    return (
        <div id="home" className="min-h-[72vh] flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold">
                    Nice to meet you! 👋 <br /> <span className="underline underline-offset-8 decoration-green-500">{"I'am Ronty."}</span>
                </h1>
                <p className="md:px-10 lg:px-0 lg:pr-56 text-lg text-gray-300">
                    {
                        "Hi, I'm Ronty Sarkar, a passionate Full Stack Developer dedicated to building modern, responsive, and user-friendly web applications. I enjoy turning ideas into scalable digital products using React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, Prisma, and Tailwind CSS."
                    }
                </p>
                <div className="flex flex-col mx-auto md:flex-row md:justify-center lg:justify-start  items-center gap-6">

                    <Link href={"Ronty_Resume.pdf"} download className="inline-block group">
                        <Title text="Download CV📝" />
                    </Link>
                    <Link href={"https://wa.me/+8801402796307"} >
                        <div >
                            <h1 className="text-3xl hover:text-green-400 transition-all font-bold flex items-center gap-2">Contact Me <SiWhatsapp className="text-3xl text-green-500" /> </h1>
                            <div className="w-40 h-2 bg-green-500 rounded-full"></div>
                            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="relative">
                <div className="h-80 w-80 space-y-3  relative">
                    {/* <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500 "></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500 "></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500 "></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500 "></div>
                    </div> */}
                    <div className="h-80 w-80 space-y-3 rounded-full overflow-hidden relative">
                        <Image
                        style={{objectFit: "cover"}}
                            src={img}
                            width={600}
                            height={600}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
                </div>
                <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10 ">
                    <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
                        <p>📢 Available for work</p>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
