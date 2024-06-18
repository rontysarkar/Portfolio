import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Navbar = () => {
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
  ];
  return (
    <nav className="py-10 flex justify-between items-center">
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
