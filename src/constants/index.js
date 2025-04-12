import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  python,
  html,
  css,
  laravel,
  php,
  tailwind,
  vuejs,
  powerbi,
  postman,
  wordpress,
  git,
  figma,
  // docker,
  postgresql,
  jupyter,
  streamlit,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Data Analyst',
    icon: ux,
  },
  {
    title: 'Data AI',
    icon: prototyping,
  },
  {
    title: 'Developer Web Junior',
    icon: frontend,
  },
  {
    title: 'IoT Consultant',
    icon: backend,
  },
  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Vue JS',
    icon: vuejs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  
  {
    name: 'Jupyter Notebook',
    icon: jupyter,
  },
  {
    name: 'Streamlit',
    icon: streamlit,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'Power BI',
    icon: powerbi,
  },
  {
    name: 'Postman',
    icon: postman,
  },
  {
    name: 'WordPress',
    icon: wordpress,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'IoT Consultant',
    company_name: 'FabLab UVCI',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2023 - May 2024',
  },
  {
    title: 'Class Delegate',
    company_name: 'ITA II Plateaux',
    icon: microverse,
    iconBg: '#333333',
    date: 'Oct 2019 - Aug 2021',
  },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Sticky-Note',
    description:
      'Quick note-taking application, reminders and minimalist interface for efficient task management.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://postit-chi.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'My_Shop Wecode',
    description: 'Online store with integrated product management system and responsive interface',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://projet-integration.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'AQI Suivi',
    description: 'Web application displaying the air quality index (AQI) in Abidjan in real time, using data collected locally by an IoT device.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    // demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Real Time Flux RSS',
    description: `Real-time RSS feeds for the latest news from selected sources, with a simplified interface and automatic content updates.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    // demo: 'https://movie-metro.netlify.app/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   // demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
