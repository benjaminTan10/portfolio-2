import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  arc_company,
  upwork_company,
  miniorange,
  earnpark,
  onedelta,
  montro
} from "../assets";



import {
  nft0, nft1, nft2, tellman, gallery, bnb, appstore, sappyseals, brahma
} from "../assets/works";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
  // {
  //   title: "Blockchain Developer",
  //   icon: mobile,
  // },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Blockchain Developer",
    company_name: "EarnPark, UK",
    icon: earnpark,
    iconBg: "#383E56",
    date: "08/2022 - 01/2024",
    points: [
      "Spearheaded a joint initiative with product and development teams, enhancing platform efficiency by 20%.",
      "Engaged in over 10 open source community projects, liaised with stakeholders, and provided mentorship and guidance to 3 emerging junior developers.",
      "Enhanced to engineering a robust backend infrastructure pivotal for the convergence of Web3 and FinTech."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "1Delta, US",
    icon: onedelta,
    iconBg: "#383E56",
    date: "04/2020 - 07/2022",
    points: [
      "Reduced the time to diagnose customer's sever issues form 3 hours to 20 minutes, slashing $30k yearly in support costs.",
      "Engineered a decentralized application DApp) that enabled users to simulate crypto loans, resulting in a 10% surge in loan adoption on the platform.",
      "Architected a robust, modular Python trading engine to autonomously recalibrate RW's $23 million portfolio, capitalizing on both private and public market makers within the Ethereum network.",
      "Cultivated and sustained strategic partnerships with over 30 potential investors and 17 business partners, and generated over 20 innovative business proposals.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "Montro Collectibles, Netherlands",
    icon: montro,
    iconBg: "#E6DEDD",
    date: "09/2018 - 03/2020",
    points: [
      "Revamped the Verse homepage utilizing HTML, Tailwind CSS and React, achieving a milestone of 8 million weekly views.",
      "Revitalized the checkout page handling $4M in daily revenue by updating the payment code, resulting in improved transaction processing.",
      "Improved user interfaces by integrating with Bitcoin.com to be more intuitive, attracting 8% more clients than the previous.",
      "Enhanced on-chain data processing efficiency by a remarkable 12% through strategic deployment of optimized smart contract functions and implementing robust persistence storage strategies."
    ],
  }
  // {
  //   title: "Full stack developer",
  //   company_name: "InvoZone (Toronto, Canada)",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Feb 2018 - July 2021",
  //   points: [
  //     "Designed and developed RESTful APIs using Python, Flask, and Django to enable seamless communication between front-end and backend applications.",
  //     "Created high-performance Python scripts for data manipulation and analytics tasks, and optimized data storage and retrieval strategies.",
  //     "Built and optimized dynamic and visually appealing user interfaces (UI) using MERN, MEAN, or MEVN technologies (MongoDB, Express.js, React/Angular/Vue.js, and Node.js).",
  //     "Developed well-structured and optimized databases on MySQL, PostgreSQL, and MongoDB while designing optimized data models and database schemas.",
  //     "Utilized containerization and microservices such as Kubernetes, Docker, and AWS Elastic Beanstalk to deploy production-level applications."
  //   ],
  // },
  // {
  //   title: "Full stack developer",
  //   company_name: "TEKHQS (Remote)",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Feb 2018 - July 2021",
  //   points: [
  //     "Designed and developed blockchain-based solutions using platforms such as Ethereum, Hyperledger Fabric, and Corda.",
  //     "Developed smart contracts in Solidity and implemented their deployment and testing on blockchain networks.",
  //     "Built decentralized applications (DApps) using blockchain technology.Integrated blockchain solutions into existing web and mobile applications, creating interfaces that displayed the data efficiently for stakeholders.",
  //     "Developed proof-of-concept and developed minimum viable products (MVPs) to analyze the feasibility of blockchain solutions.",
  //     "Designed and developed decentralized exchanges (DEX) using technologies such as 0x project, Kyber Network, and Airswap."
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Your contribution to the our project as a blockchain developer was outstanding. Great job on completing the feature ahead of schedule!",
    name: "Kevin Schellinger",
    designation: "Co-Founder and CEO",
    company: "1Delta",
    image: "https://1delta.io/wp-content/uploads/2023/05/kevin-bw.jpg",
  },
  {
    testimonial:
      "We've been thoroughly impressed with your technical prowess as a Web3 developer on our project. Your work has set a standard for maintainability and scalability, making it easy for our team to extend functionalities in the future. ",
    name: "Dmitrii Gromyko",
    designation: "CTO",
    company: "EarnPark",
    image: "https://earnpark.com/_next/static/media/dmitry-gromyko.ac2b4074.png",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Sappy Seals",
    description:
      "NFT platform hosting a collection of 10,000 unique digital collectibles based on the Ethereum blockchain",
    tags: [
      {
        name: "NEXT",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "Tainlwind",
        color: "pink-text-gradient",
      },
    ],
    image: sappyseals,
    to: 'https://www.sappyseals.io/',
    source_code_link: "https://github.com/venuswhispers",
  },
  {
    name: "Brahma Console",
    description:
      "DeFi application offering asset management teams and power users a suite of tools for secure and efficient on-chain execution, automation, and custody",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "Hotjar",
        color: "green-text-gradient",
      },
      {
        name: "Open Graph",
        color: "pink-text-gradient",
      },
    ],
    image: brahma,
    to: 'https://www.brahma.fi/',
    source_code_link: "https://github.com/venuswhispers",
  },
  {
    name: "NFT Marketplace and Gallery",
    description:
      "NFTs—Unique Digital Collectibles and Minting, and gallery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ERC721",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nft0,
    to: 'https://weirdos-nft.netlify.app/',
    source_code_link: "https://github.com/venuswhispers",
  },
  {
    name: "National Cinema Voting System",
    description:
      "A decentralized voting platform for movies.",
    tags: [
      {
        name: "ERC721",
        color: "blue-text-gradient",
      },
      {
        name: "NEXT",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nft1,
    to: 'https://ethcinemanation.vercel.app/',
    source_code_link: "https://github.com/venuswhispers",
  },
  {
    name: "NFT Marketplace for end users",
    description:
      "NFT marketplace using ERC721 and starter project.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "ERC721",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nft2,
    to: 'https://nft-marketplace-doingud.vercel.app/',
    source_code_link: "https://github.com/venuswhispers",
  },
  {
    name: "Gallery site for several topics",
    description:
      "A proof of concept for a video streaming app.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "NUI",
        color: "pink-text-gradient",
      },
    ],
    image: gallery,
    to: 'https://view-web-app-client.vercel.app/',
    source_code_link: "https://github.com/venuswhispers",
  },
  // {
  //   name: "App store",
  //   description:
  //     "App store for your favorite products.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "NEST",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Bootstrap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: appstore,
  //   to: 'https://apps.apple.com/us/app/favorite-photos-widget/id1589994536',
  //   source_code_link: "https://github.com/superdev0816",
  // },
];

export { services, technologies, experiences, testimonials, projects };
