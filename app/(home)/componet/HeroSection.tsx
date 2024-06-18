import Link from "next/link";
import React from "react";

const HeroSection = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-between">
            <div>
                <h1>
                    Nice to meet you! 👋 <br /> <span>{"I'am Ronty."}</span>
                </h1>
                <p>
                    {
                        "Based in Bangladesh, I'am a Front End developer passionate about building a modern web application that users love."
                    }
                </p>
                <Link href={"mailto:rontysarkar07@gmail.com"}>
                    <div>
                        <h1>Contact Me 📧</h1>
                    </div>
                </Link>
            </div>
            <div>
                <div className="h-72 w-72 space-y-3 -rotate-[30deg]">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500 "></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500 "></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500 "></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500 "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
