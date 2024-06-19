import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

const Navbar = ({className}:{className?:string}) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/rontysarkar",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/rontysarkar",
      label: "Github",
      icon: SiGithub,
    },
    // {
    //   link: "https://wa.me/+8801402796307",
    //   label: "Whatsapp",
    //   icon: SiWhatsapp,
    // },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down",className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Ronty Sarkar 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, indx) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={indx} aria-label={social.label}>
              <Icon className="w-6 h-6 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
