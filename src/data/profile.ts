export const profile = {
  name: "Andrea Junior Berselli",
  role: "Software engineer (Frontend developer)",
  job: {
    name: "Coders51",
    url: "https://www.coders51.com/",
  },
  github: {
    label: "abjunior92",
    url: "https://github.com/abjunior92",
  },
  location: "Bologna, Italy",
  baskin: {
    label: "Baskin Player",
    handle: "westriver_asd",
    url: "https://www.instagram.com/westriver_asd/",
  },
  skillGroups: [
    {
      title: "Languages and frameworks",
      text: "The languages and frameworks behind the interfaces.",
      items: [
        "ReactJs",
        "VueJs",
        "Javascript",
        "Typescript",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Astro",
      ],
    },
    {
      title: "Interface and accessibility",
      text: "UI and UX, with attention to accessible development.",
      items: ["UI/UX", "Accessible development", "Figma"],
    },
    {
      title: "Repositories",
      text: "Managing repositories on GitHub, Bitbucket or GitLab.",
      items: ["GitHub", "Bitbucket", "GitLab"],
    },
    {
      title: "Delivery and agile work",
      text: "CI/CD, agile ways of working, and a Jira board that tracks the project sprint by sprint.",
      items: ["CI/CD", "Agile", "Jira", "Sprints"],
    },
    {
      title: "AI, agents and skills",
      text: "Using AI agents and skills to develop code and features.",
      items: ["OpenAI", "Claude", "Cursor", "GitHub Copilot"],
    },
    {
      title: "Tools",
      text: "Tools for development.",
      items: ["Git", "Docker", "Miro"],
    },
    {
      title: "Databases",
      text: "Databases for the project.",
      items: ["PostgreSQL", "MySQL", "Prisma"],
    },
  ],
  about: {
    text: "I am a motivated, curious, and passionate person. I never feel I have reached the top: in technology you are always one step behind, and that is why I keep working to improve and stay up to date. \n\n I like working in a team and collaborating with my colleagues to create innovative and efficient solutions, in everyone's interest, especially the client's. \n\n I particularly care about keeping the user experience simple and intuitive, with close attention to accessibility and performance. \n\n I believe my real strength, though, lies in my soft skills, such as listening, communicating, and working in a team.",
    timeline: [
      "2011 - I graduated from ITIS Odone Belluzzi institute (Bologna) as a computer expert.",
      "March, 2017 - I graduated from Alma Mater Studiorum in Bologna with a Bachelor's Degree in Information Technology for Management.",
      "During my studies I worked as a computer technician for several years.",
      "My career as a front end / mobile developer started in June 2017.",
      "2019 - today I started working as a software engineer at Coders51.",
    ],
  },
  posts: [
    {
      title: "Accessibility is for people",
      date: "2026-03-13",
      author: "Andrea Junior Berselli",
      description:
        "Accessibility in web projects is not about others — it's about everyone",
      image: "https://www.coders51.com/posts/a11y/hero.png",
      url: "https://www.coders51.com/blog/a11y/",
    },
    {
      title: "Astro JS - the birth of the coders51 blog",
      date: "2024-03-25",
      author: "Andrea Junior Berselli",
      description:
        "Our company needed a blog, what better opportunity to experiment with Astro? Let's see how it was made and why we chose this SSG",
      image: "https://www.coders51.com/posts/astro-blog/hero.webp",
      url: "https://www.coders51.com/blog/astro-blog/",
    },
  ],
  contacts: [
    {
      title: "Email",
      href: "mailto:junior.berselli@gmail.com",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/andrea-junior-berselli-263678b6/",
    },
    {
      title: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=+393334805262",
    },
    {
      title: "Telegram",
      href: "http://telegram.me/bersax",
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/BersaX8",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/bers_abj/?hl=it",
    },
  ],
} as const;
