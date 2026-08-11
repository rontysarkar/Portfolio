"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: "Home", link: "home" },
  { name: "Skills", link: "skills" },
  { name: "Projects", link: "projects" },
  { name: "Education", link: "Education" },
];

const NewNavbar = ({ className }: { className?: string }) => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const socials = [
    {
      link: "https://www.linkedin.com/in/rontysarkar",
      label: "LinkedIn",
      icon: (
        <FaLinkedin className="w-7 h-7 text-[#0A66C2] hover:scale-125 transition-all duration-200" />
      ),
    },
    {
      link: "https://github.com/rontysarkar",
      label: "GitHub",
      icon: (
        <FaGithub className="w-7 h-7 text-black dark:text-white  hover:scale-125 transition-all duration-200" />
      ),
    },
    // {
    //   link: "https://wa.me/8801402796307",
    //   label: "WhatsApp",
    //   icon: <SiWhatsapp className="w-5 h-5 text-[#25D366]" />,
    // },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setActiveSection(targetId);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item) => {
      const element = document.getElementById(item.link);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(item.link);
            }
          },
          {
            rootMargin: "-30% 0px -50% 0px",
          },
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <nav
      className={cn(
        "max-w-7xl mx-auto px-8 my-3 py-1.5 sticky top-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/5 flex justify-between items-center transition-all duration-300",
        className,
      )}
    >
      <Link href="/">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 block whitespace-nowrap text-white">
          Ronty Sarkar 👨🏻‍💻
        </h1>
      </Link>

      <div className="hidden md:flex items-center gap-1 bg-[#1A1A1A] border border-white/10 px-2 py-1.5 rounded-full shadow-xl">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.link}`}
            onClick={(e) => handleScroll(e, item.link)}
          >
            <span
              className={cn(
                "px-5 py-1 text-sm  rounded-full transition-all duration-300 block cursor-pointer select-none",
                activeSection === item.link
                  ? "bg-white text-black font-semibold shadow-[0_4px_12px_rgba(255,255,255,0.15)] scale-105"
                  : "text-[#AAAAAA] hover:text-white hover:bg-[#2A2A2A]",
              )}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-5">
        {socials.map((social, indx) => {
          const Icon = social.icon;
          return (
            <Link
              href={social.link}
              key={indx}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <Icon className="w-6 h-6 text-[#AAAAAA] hover:text-white hover:scale-125 transition-all duration-200" /> */}
              {social.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NewNavbar;
