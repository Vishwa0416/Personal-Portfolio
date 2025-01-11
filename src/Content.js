// import images
import Hero_person from "./assets/images/Hero/man3.png";

import figma from "./assets/images/Skills/flutter.png";
import sketch from "./assets/images/Skills/java.png";
import ps from "./assets/images/Skills/github.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/laravel.png";
import python from "./assets/images/Skills/mongodb.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/travplan.png";
import project2 from "./assets/images/projects/medassist.png";
import project3 from "./assets/images/projects/drinker.png";
import person_project from "./assets/images/projects/man.png";

import Hireme_person from "./assets/images/Hireme/man2.png";
import Hireme_person2 from "./assets/images/Hireme/man2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Developer",
    firstName: "Vishwa",
    LastName: "Wijesekare",
    btnText: "Contact Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web & App development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Flutter",
        para: "Flutter frontend development",
        logo: figma,
      },
      {
        name: "Laravel",
        para: "Laravel development",
        logo: nodejs,
      },
      {
        name: "Github",
        para: "Github Version Control",
        logo: ps,
      },
      {
        name: "React js",
        para: "JavaScript Library",
        logo: reactjs,
      },
      {
        name: "Java",
        para: "OOP Language",
        logo: sketch,
      },
      {
        name: "MongoDB",
        para: "MongoDB Database",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I'm highly skilled in web development, specializing in creating responsive, dynamic, and user-friendly applications. I have expertise in using modern frameworks like React and Laravel, ensuring efficient and scalable solutions tailored to client needs.",
        logo: services_logo1,
      },
      {
        title: "UI / UX DESIGNING",
        para: "I am skilled in UI/UX design, creating visually appealing, user-centric interfaces that enhance functionality. With a focus on intuitive navigation and responsive layouts, I ensure seamless and engaging user experiences.",
        logo: services_logo2,
      },
      {
        title: "Mobile Application Development",
        para: "I'm proficient in mobile application development, focusing on building intuitive, feature-rich, and cross-platform apps. With expertise in Flutter, I deliver scalable solutions optimized for performance and user experience across Android and iOS platforms.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "TravPlan Application",
        image: project1,
      },
      {
        title: "MedAssist Application",
        image: project2,
      },
      {
        title: "Drinker Application",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      
      
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Are you looking for a dedicated and versatile professional to bring your projects to life? With expertise in web and mobile application development, as well as UI/UX design, I specialize in creating innovative, user friendly solutions tailored to your needs. Whether it's crafting responsive websites, developing feature rich apps, or designing intuitive interfaces, I bring creativity, technical skill, and attention to detail to every project. Let’s collaborate to turn your vision into reality I'm ready to make a difference for your business!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "araliyawijesakare@gmail.com",
        icon: GrMail,
        link: "mailto:araliyawijesakare@gmail.com",
      },
      {
        text: "+94 70 233 1284",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "LinkedIn Profile",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/vishwa-wijesakare-752040247/",
      },
      {
        text: "Github Profile",
        icon: BsGithub,
        link: "https://github.com/Vishwa0416",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
