import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Navbar = ({className}:{className?:string}) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/rontysarkar",
      label: "Linkedin",
      icon: FaLinkedin,
    },
    {
      link: "https://github.com/rontysarkar",
      label: "Github",
      icon: FaGithub,
    },
    // {
    //   link: "https://wa.me/+8801402796307",
    //   label: "Whatsapp",
    //   icon: SiWhatsapp,
    // },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down",className)}>
      <Link href="/">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Ronty Sarkar 👨🏻‍💻
      </h1>
      </Link>
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
